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
          folder: 'dora-hairstylist',
        },
        uploadStream: {
          folder: 'dora-hairstylist',
        },
        delete: {},
      },
      // Disabilita la generazione locale dei thumbnails
      // Cloudinary li genererà on-the-fly tramite URL transformations
      sizeLimit: 250 * 1024 * 1024, // 250mb
    },
  },
});
