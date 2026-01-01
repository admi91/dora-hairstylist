import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slides del carosello
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80',
      title: 'Trasforma il Tuo Stile',
      subtitle: 'Tagli moderni e colorazioni innovative',
      cta: 'Prenota Ora'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80',
      title: 'Colori che Parlano di Te',
      subtitle: 'Balayage e colorazioni su misura',
      cta: 'Scopri di Più'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&q=80',
      title: 'Acconciature per Ogni Occasione',
      subtitle: 'Dal quotidiano agli eventi speciali',
      cta: 'Vedi Gallery'
    }
  ]

  // Blog posts preview
  const blogPosts = [
    {
      id: 1,
      title: 'Tendenze Capelli Primavera 2026',
      excerpt: 'Scopri i colori e i tagli che domineranno la nuova stagione',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
      date: '15 Gen 2026',
      category: 'Tendenze'
    },
    {
      id: 2,
      title: 'Come Mantenere il Colore Vibrante',
      excerpt: 'I segreti per far durare la tua colorazione più a lungo',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80',
      date: '10 Gen 2026',
      category: 'Tutorial'
    },
    {
      id: 3,
      title: 'Taglio Perfetto per il Tuo Viso',
      excerpt: 'Guida completa per scegliere il taglio ideale',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
      date: '5 Gen 2026',
      category: 'Consigli'
    },
    {
      id: 4,
      title: 'Trattamenti Rigeneranti Inverno',
      excerpt: 'Proteggi i tuoi capelli dal freddo con i nostri trattamenti',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80',
      date: '1 Gen 2026',
      category: 'Trattamenti'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <Link
                  to="/contatti"
                  className="inline-block bg-red-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-600 transition-all duration-300 shadow-2xl hover:scale-105"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-lg text-gray-600">Eccellenza e passione in ogni dettaglio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                  alt="Tagli"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tagli Moderni</h3>
                  <p className="text-gray-200">Stile e personalità in ogni taglio</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Colore"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Colorazioni</h3>
                  <p className="text-gray-200">Balayage, meches e colori vibranti</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80"
                  alt="Acconciature"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Acconciature</h3>
                  <p className="text-gray-200">Styling per ogni occasione speciale</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/galleria"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all duration-300"
            >
              Vedi Tutti i Lavori
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perché Scegliere Dora</h2>
            <p className="text-lg text-gray-600">Passione, professionalità e risultati garantiti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Esperienza Pluriennale</h3>
              <p className="text-gray-600">Anni di formazione e aggiornamento continuo</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prodotti di Qualità</h3>
              <p className="text-gray-600">Solo prodotti professionali certificati</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Consulenza Personalizzata</h3>
              <p className="text-gray-600">Ogni cliente è unico e speciale</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Clienti Soddisfatti</h3>
              <p className="text-gray-600">La tua soddisfazione è il nostro successo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dal Nostro Blog</h2>
            <p className="text-lg text-gray-600">Consigli, tendenze e novità dal mondo hair styling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-red-500 uppercase">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-red-500 font-semibold hover:text-red-600 transition-colors inline-flex items-center"
                  >
                    Leggi di più
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition-all duration-300"
            >
              Tutti gli Articoli
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronta per il Tuo Nuovo Look?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Prenota subito la tua consulenza gratuita e lasciati coccolare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-block bg-red-500 text-white px-10 py-4 rounded-lg font-bold hover:bg-red-600 transition-all duration-300 shadow-xl"
            >
              Prenota Ora
            </Link>
            <Link
              to="/portfolio"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Scopri di Più
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
