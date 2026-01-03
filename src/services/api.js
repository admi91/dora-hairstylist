import axios from 'axios';

// Base URL per Strapi
// In produzione usa Railway, in development usa localhost se disponibile
const API_URL = import.meta.env.VITE_STRAPI_URL || 
                (import.meta.env.MODE === 'production' 
                  ? 'https://dora-hairstylist-production.up.railway.app'
                  : 'http://localhost:1337');

// Crea un'istanza axios con configurazione base
const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper per formattare le immagini da Strapi
const getImageUrl = (imageData) => {
  if (!imageData) return null;
  
  // Se l'immagine ha l'URL completo, usalo
  if (imageData.url && imageData.url.startsWith('http')) {
    return imageData.url;
  }
  
  // Altrimenti costruisci l'URL con il base URL di Strapi
  const url = imageData.url || imageData.attributes?.url;
  return url ? `${API_URL}${url}` : null;
};

// Helper per formattare i dati da Strapi v4
const formatStrapiData = (data) => {
  if (!data) return null;
  
  if (Array.isArray(data)) {
    return data.map(item => ({
      id: item.id,
      ...item.attributes,
    }));
  }
  
  return {
    id: data.id,
    ...data.attributes,
  };
};

// ==================== GALLERY ====================
export const getGalleryItems = async (category = 'Tutti') => {
  try {
    const params = category && category !== 'Tutti' 
      ? { filters: { category: { $eq: category } } }
      : {};
    
    const response = await api.get('/gallery-items', {
      params: {
        ...params,
        populate: 'image',
        sort: 'order:asc',
      },
    });
    
    const items = formatStrapiData(response.data.data);
    
    // Formatta le immagini
    return items.map(item => ({
      ...item,
      image: getImageUrl(item.image?.data?.attributes || item.image?.data),
    }));
  } catch (error) {
    console.error('Errore nel caricamento gallery:', error);
    return [];
  }
};

// ==================== BLOG ====================
export const getBlogPosts = async (category = null, featured = false) => {
  try {
    const filters = {};
    if (category) filters.category = { $eq: category };
    if (featured) filters.featured = { $eq: true };
    
    const response = await api.get('/blog-posts', {
      params: {
        filters,
        populate: 'coverImage',
        sort: 'publishedDate:desc',
      },
    });
    
    const posts = formatStrapiData(response.data.data);
    
    return posts.map(post => ({
      ...post,
      coverImage: getImageUrl(post.coverImage?.data?.attributes || post.coverImage?.data),
    }));
  } catch (error) {
    console.error('Errore nel caricamento blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug) => {
  try {
    const response = await api.get('/blog-posts', {
      params: {
        filters: { slug: { $eq: slug } },
        populate: 'coverImage',
      },
    });
    
    const posts = formatStrapiData(response.data.data);
    if (posts.length === 0) return null;
    
    const post = posts[0];
    return {
      ...post,
      coverImage: getImageUrl(post.coverImage?.data?.attributes || post.coverImage?.data),
    };
  } catch (error) {
    console.error('Errore nel caricamento blog post:', error);
    return null;
  }
};

export const getBlogPostById = async (id) => {
  try {
    const response = await api.get(`/blog-posts/${id}`, {
      params: {
        populate: 'coverImage',
      },
    });
    
    const post = formatStrapiData(response.data.data);
    return {
      ...post,
      coverImage: getImageUrl(post.coverImage?.data?.attributes || post.coverImage?.data),
    };
  } catch (error) {
    console.error('Errore nel caricamento blog post:', error);
    return null;
  }
};

// ==================== CAROUSEL ====================
export const getCarouselSlides = async () => {
  try {
    const response = await api.get('/carousel-slides', {
      params: {
        filters: { active: { $eq: true } },
        populate: 'image',
        sort: 'order:asc',
      },
    });
    
    const slides = formatStrapiData(response.data.data);
    
    return slides.map(slide => ({
      ...slide,
      image: getImageUrl(slide.image?.data?.attributes || slide.image?.data),
    }));
  } catch (error) {
    console.error('Errore nel caricamento carousel:', error);
    return [];
  }
};

// ==================== SERVICES ====================
export const getServices = async (featured = false) => {
  try {
    const filters = featured ? { featured: { $eq: true } } : {};
    
    const response = await api.get('/services', {
      params: {
        filters,
        populate: 'image',
        sort: 'order:asc',
      },
    });
    
    const services = formatStrapiData(response.data.data);
    
    return services.map(service => ({
      ...service,
      image: getImageUrl(service.image?.data?.attributes || service.image?.data),
    }));
  } catch (error) {
    console.error('Errore nel caricamento services:', error);
    return [];
  }
};

// ==================== ABOUT (Single Type) ====================
export const getAbout = async () => {
  try {
    const response = await api.get('/about', {
      params: {
        populate: 'profileImage',
      },
    });
    
    const aboutRaw = response.data.data;
    
    // Estrai direttamente gli attributi
    const about = {
      id: aboutRaw.id,
      title: aboutRaw.attributes.title,
      description: aboutRaw.attributes.description,
      yearsExperience: aboutRaw.attributes.yearsExperience,
      happyClients: aboutRaw.attributes.happyClients,
    };
    
    // Estrai l'immagine dal nesting di Strapi
    const imageData = aboutRaw.attributes.profileImage?.data;
    
    if (imageData) {
      about.profileImage = getImageUrl(imageData.attributes || imageData);
    }
    
    return about;
  } catch (error) {
    console.error('Errore nel caricamento about:', error);
    return null;
  }
};

// ==================== CONTACT INFO (Single Type) ====================
export const getContactInfo = async () => {
  try {
    const response = await api.get('/contact-info');
    
    return formatStrapiData(response.data.data);
  } catch (error) {
    console.error('Errore nel caricamento contact info:', error);
    return null;
  }
};

// ==================== EXPERIENCE (Single Type) ====================
export const getExperience = async () => {
  try {
    const response = await api.get('/experience', {
      params: {
        'populate[experiences]': '*',
        'populate[skills]': '*',
        'populate[certifications]': '*',
      },
    });
    
    return formatStrapiData(response.data.data);
  } catch (error) {
    console.error('Errore nel caricamento experience:', error);
    return null;
  }
};

export default {
  getGalleryItems,
  getBlogPosts,
  getBlogPostBySlug,
  getBlogPostById,
  getCarouselSlides,
  getServices,
  getAbout,
  getContactInfo,
  getExperience,
};
