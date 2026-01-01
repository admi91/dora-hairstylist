module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'strapi-uploads',
        },
        uploadStream: {
          folder: 'strapi-uploads',
        },
        delete: {},
      },
      // Genera thumbnails su Cloudinary invece che localmente
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 156,
      },
    },
  },
});
