/**
 * Middleware per mostrare correttamente i thumbnails di Cloudinary nella Media Library
 * Sostituisce i percorsi locali dei thumbnails con gli URL di Cloudinary
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // Intercetta le richieste alla Media Library
    if (ctx.request.url.includes('/content-manager/collection-types/plugin::upload.file')) {
      const { body } = ctx;
      
      if (body && body.results) {
        // Processa ogni file nella risposta
        body.results = body.results.map(file => {
          if (file.provider === 'cloudinary' && file.formats) {
            // Per ogni formato (thumbnail, small, medium, large)
            Object.keys(file.formats).forEach(formatKey => {
              const format = file.formats[formatKey];
              
              // Se l'URL è relativo (inizia con /), sostituiscilo con l'URL Cloudinary
              if (format.url && format.url.startsWith('/uploads/')) {
                // Ricostruisci l'URL completo di Cloudinary dal public_id
                const publicId = file.provider_metadata?.public_id;
                if (publicId) {
                  format.url = `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/v${format.url.split('_')[0].split('/').pop()}/${formatKey}_${publicId.split('/').pop()}`;
                }
              }
            });
          }
          return file;
        });
      }
    }
  };
};
