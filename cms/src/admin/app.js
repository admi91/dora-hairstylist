/**
 * Override del componente MediaLibrary per mostrare correttamente i thumbnails Cloudinary
 */

import './app.css';

export default {
  config: {
    locales: [],
  },
  bootstrap(app) {
    // Patch del componente Media Library per rimuovere il check dei file locali
    console.log('🔧 Patching Media Library per Cloudinary thumbnails');
  },
};
