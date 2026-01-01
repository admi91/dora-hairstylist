/**
 * Override del componente MediaLibrary per mostrare correttamente i thumbnails Cloudinary
 */

import './app.css';

export default {
  config: {
    locales: [],
  },
  bootstrap(app) {
    console.log('🔧 Patching Media Library per Cloudinary thumbnails');
    
    // Intercetta e fixa gli errori di caricamento immagini Cloudinary
    if (typeof window !== 'undefined') {
      // Aspetta che il DOM sia caricato
      window.addEventListener('DOMContentLoaded', () => {
        // Osserva quando vengono aggiunte nuove immagini al DOM
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.tagName === 'IMG' && node.src.includes('cloudinary.com')) {
                // Forza il reload dell'immagine Cloudinary
                const originalSrc = node.src;
                node.onerror = null; // Rimuovi l'handler di errore
                node.src = originalSrc;
                console.log('✅ Fixed Cloudinary image:', originalSrc.substring(0, 80));
              } else if (node.querySelectorAll) {
                // Cerca immagini nei nodi figli
                node.querySelectorAll('img[src*="cloudinary.com"]').forEach((img) => {
                  const originalSrc = img.src;
                  img.onerror = null;
                  img.src = originalSrc;
                  console.log('✅ Fixed Cloudinary image:', originalSrc.substring(0, 80));
                });
              }
            });
          });
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
        
        console.log('✅ Cloudinary image observer attivo');
      });
    }
  },
};
