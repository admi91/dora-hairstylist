module.exports = async ({ strapi }) => {
  // Find the ID of the 'Public' role
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    console.log('Public role not found');
    return;
  }

  // Define permissions for public access
  const permissions = [
    // Gallery Items
    { action: 'api::gallery-item.gallery-item.find' },
    { action: 'api::gallery-item.gallery-item.findOne' },
    
    // Blog Posts
    { action: 'api::blog-post.blog-post.find' },
    { action: 'api::blog-post.blog-post.findOne' },
    
    // Carousel Slides
    { action: 'api::carousel-slide.carousel-slide.find' },
    { action: 'api::carousel-slide.carousel-slide.findOne' },
    
    // Services
    { action: 'api::service.service.find' },
    { action: 'api::service.service.findOne' },
    
    // About (Single Type)
    { action: 'api::about.about.find' },
    
    // Contact Info (Single Type)
    { action: 'api::contact-info.contact-info.find' },
  ];

  // Grant permissions
  await Promise.all(
    permissions.map((permission) =>
      strapi.query('plugin::users-permissions.permission').create({
        data: {
          ...permission,
          role: publicRole.id,
        },
      })
    )
  );

  console.log('✅ Public permissions configured successfully');
};
