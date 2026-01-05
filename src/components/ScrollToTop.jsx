import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook che scrolla la pagina in alto quando cambia la route
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Scroll smooth, oppure 'auto' per istantaneo
    });
  }, [pathname]);

  return null;
}
