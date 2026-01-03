import { useState } from 'react';

// Import dei bundle per componente
import headerBundle from '../locales/components/header.json';
import heroBundle from '../locales/components/hero.json';
import aboutBundle from '../locales/components/about.json';
import galleryBundle from '../locales/components/gallery.json';
import experienceBundle from '../locales/components/experience.json';
import footerBundle from '../locales/components/footer.json';
import contactBundle from '../locales/components/contact.json';
import blogBundle from '../locales/components/blog.json';

// Mappa dei bundle disponibili
const bundles = {
  header: headerBundle,
  hero: heroBundle,
  about: aboutBundle,
  gallery: galleryBundle,
  experience: experienceBundle,
  footer: footerBundle,
  contact: contactBundle,
  blog: blogBundle,
};

/**
 * Hook personalizzato per gestire le traduzioni per componente specifico
 * @param {string} component - Nome del componente (es: 'header', 'hero', etc.)
 * @returns {Object} Oggetto con funzione t() per tradurre le chiavi
 */
export const useTranslation = (component) => {
  const [locale] = useState('it'); // Per ora solo italiano, ma estendibile

  // Ottieni il bundle specifico del componente
  const bundle = component ? bundles[component] : {};

  /**
   * Funzione per ottenere una traduzione dal bundle del componente
   * @param {string} key - Chiave nel formato "subsection.key" o "key"
   * @returns {string} Traduzione corrispondente o la chiave stessa se non trovata
   */
  const t = (key) => {
    if (!bundle) {
      console.warn(`Bundle not found for component: ${component}`);
      return key;
    }

    // Gestisci sia bundle con wrapper lingua che senza
    // Se il bundle ha una chiave "it", usa quella, altrimenti usa direttamente il bundle
    const translations = bundle[locale] || bundle;

    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} in component: ${component}`);
        return key;
      }
    }

    return value;
  };

  return { t, locale };
};

export default useTranslation;
