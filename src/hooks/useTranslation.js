import { useState, useEffect } from 'react';
import translations from '../locales/it.json';

/**
 * Hook personalizzato per gestire le traduzioni
 * @returns {Object} Oggetto con funzione t() per tradurre le chiavi
 */
export const useTranslation = () => {
  const [locale] = useState('it'); // Per ora solo italiano, ma estendibile

  /**
   * Funzione per ottenere una traduzione dal bundle
   * @param {string} key - Chiave nel formato "section.subsection.key"
   * @returns {string} Traduzione corrispondente o la chiave stessa se non trovata
   */
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  };

  return { t, locale };
};

export default useTranslation;
