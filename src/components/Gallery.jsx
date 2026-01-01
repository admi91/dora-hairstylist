import React, { useState } from 'react'

const Gallery = () => {
  // Placeholder per le immagini - sostituire con immagini reali del salone
  const galleryItems = [
    { id: 1, title: 'Taglio Moderno', category: 'tagli', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80' },
    { id: 2, title: 'Colore Vibrante', category: 'colore', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80' },
    { id: 3, title: 'Styling Elegante', category: 'styling', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80' },
    { id: 4, title: 'Acconciatura Sposa', category: 'styling', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80' },
    { id: 5, title: 'Balayage', category: 'colore', image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80' },
    { id: 6, title: 'Taglio Donna', category: 'tagli', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80' },
    { id: 7, title: 'Trattamento Capelli', category: 'trattamenti', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80' },
    { id: 8, title: 'Styling Creativo', category: 'styling', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80' },
    { id: 9, title: 'Colore Naturale', category: 'colore', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80' },
    { id: 10, title: 'Altro', category: 'altro', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80' },
  ]

  const categories = ['tutti', 'tagli', 'colore', 'styling', 'trattamenti']
  const [activeCategory, setActiveCategory] = useState('tutti')

  const filteredItems = activeCategory === 'tutti' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
