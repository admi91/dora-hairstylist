// Custom Cloudinary provider che usa le trasformazioni URL invece di file locali
'use strict';

const cloudinary = require('cloudinary').v2;

module.exports = {
  init(config) {
    cloudinary.config({
      cloud_name: config.cloud_name,
      api_key: config.api_key,
      api_secret: config.api_secret,
    });

    return {
      async upload(file) {
        const uploadResult = await cloudinary.uploader.upload(file.path || file.buffer, {
          folder: config.actionOptions?.upload?.folder || '',
          resource_type: 'auto',
        });

        // Invece di generare thumbnails locali, usa le trasformazioni Cloudinary
        const baseUrl = uploadResult.secure_url;
        const publicId = uploadResult.public_id;

        file.url = baseUrl;
        file.provider_metadata = {
          public_id: publicId,
          resource_type: uploadResult.resource_type,
        };

        // Genera URL per i thumbnails usando le trasformazioni Cloudinary
        file.formats = {
          thumbnail: {
            url: baseUrl.replace('/upload/', '/upload/w_156,h_156,c_fill/'),
            width: 156,
            height: 156,
          },
          small: {
            url: baseUrl.replace('/upload/', '/upload/w_500,h_500,c_fit/'),
            width: 500,
            height: 500,
          },
          medium: {
            url: baseUrl.replace('/upload/', '/upload/w_750,h_750,c_fit/'),
            width: 750,
            height: 750,
          },
          large: {
            url: baseUrl.replace('/upload/', '/upload/w_1000,h_1000,c_fit/'),
            width: 1000,
            height: 1000,
          },
        };

        return file;
      },

      async delete(file) {
        try {
          const publicId = file.provider_metadata?.public_id;
          if (publicId) {
            await cloudinary.uploader.destroy(publicId, {
              resource_type: file.provider_metadata?.resource_type || 'image',
            });
          }
        } catch (error) {
          // Non bloccare se la cancellazione fallisce
          console.error('Cloudinary delete error:', error);
        }
      },
    };
  },
};
