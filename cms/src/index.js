'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Configure public permissions for API access
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      console.log('⚠️  Public role not found');
      return;
    }

    // Check if permissions are already set
    const existingPermissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({ where: { role: publicRole.id } });

    // Define required permissions
    const requiredPermissions = [
      'api::gallery-item.gallery-item.find',
      'api::gallery-item.gallery-item.findOne',
      'api::blog-post.blog-post.find',
      'api::blog-post.blog-post.findOne',
      'api::carousel-slide.carousel-slide.find',
      'api::carousel-slide.carousel-slide.findOne',
      'api::service.service.find',
      'api::service.service.findOne',
      'api::about.about.find',
      'api::contact-info.contact-info.find',
    ];

    // Check which permissions need to be created
    const existingActions = existingPermissions.map(p => p.action);
    const permissionsToCreate = requiredPermissions.filter(
      action => !existingActions.includes(action)
    );

    if (permissionsToCreate.length > 0) {
      console.log(`📝 Creating ${permissionsToCreate.length} public permissions...`);
      
      await Promise.all(
        permissionsToCreate.map((action) =>
          strapi.query('plugin::users-permissions.permission').create({
            data: {
              action,
              role: publicRole.id,
            },
          })
        )
      );

      console.log('✅ Public API permissions configured successfully');
    } else {
      console.log('✅ Public API permissions already configured');
    }

    // Hook per fixare i thumbnails di Cloudinary
    strapi.db.lifecycles.subscribe({
      models: ['plugin::upload.file'],
      
      async afterCreate(event) {
        const { result } = event;
        
        // Se il file usa Cloudinary e ha formats
        if (result.provider === 'cloudinary' && result.formats) {
          const cloudName = process.env.CLOUDINARY_NAME;
          
          // Per ogni formato, genera l'URL Cloudinary on-the-fly
          Object.keys(result.formats).forEach(formatKey => {
            const format = result.formats[formatKey];
            const baseUrl = result.url;
            
            // Trasforma l'URL base aggiungendo le trasformazioni Cloudinary
            if (baseUrl && baseUrl.includes('cloudinary.com')) {
              let width, height, crop;
              
              switch(formatKey) {
                case 'thumbnail':
                  width = 156;
                  height = 156;
                  crop = 'fill';
                  break;
                case 'small':
                  width = 500;
                  height = 500;
                  crop = 'fit';
                  break;
                case 'medium':
                  width = 750;
                  height = 750;
                  crop = 'fit';
                  break;
                case 'large':
                  width = 1000;
                  height = 1000;
                  crop = 'fit';
                  break;
                default:
                  return;
              }
              
              // Sostituisci l'URL con la versione trasformata di Cloudinary
              format.url = baseUrl.replace('/upload/', `/upload/w_${width},h_${height},c_${crop}/`);
            }
          });
          
          // Aggiorna il record nel database con i nuovi URL
          await strapi.db.query('plugin::upload.file').update({
            where: { id: result.id },
            data: {
              formats: result.formats,
            },
          });
        }
      },
    });
    
    console.log('✅ Cloudinary thumbnail fix hook attivato');
  },
};
