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
  },
};
