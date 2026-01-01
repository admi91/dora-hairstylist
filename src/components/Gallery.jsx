import React, { useState, useEffect } from 'react'
import { getGalleryItems } from '../services/api'

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const categories = ['Tutti', 'Tagli', 'Colore', 'Styling', 'Trattamenti']
  const [activeCategory, setActiveCategory] = useState('Tutti')

  // Carica gli items dalla API quando cambia la categoria
  useEffect(() => {
    const loadGalleryItems = async () => {
      setLoading(true)
      const items = await getGalleryItems(activeCategory)
      setGalleryItems(items)
      setLoading(false)
    }
    
    loadGalleryItems()
  }, [activeCategory])

  const filteredItems = galleryItems

  // Mostra loading state
  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Caricamento gallery...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GALLERIA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora la nostra galleria di creazioni, dove ogni taglio e colore racconta una storia unica
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">Nessuna immagine disponibile in questa categoria</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200 cursor-pointer"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-200 mt-1">{item.description}</p>
                    )}
                    <p className="text-sm text-gray-300 capitalize mt-2">{item.category}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
