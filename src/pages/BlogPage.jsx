import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tendenze Capelli Primavera 2026',
      excerpt: 'Scopri i colori e i tagli che domineranno la nuova stagione. Dal bob classico alle tonalità pastello, ecco tutto quello che devi sapere.',
      content: 'La primavera 2026 porta con sé una ventata di freschezza anche nel mondo dell\'hair styling...',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
      date: '15 Gen 2026',
      category: 'Tendenze',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Come Mantenere il Colore Vibrante',
      excerpt: 'I segreti per far durare la tua colorazione più a lungo. Prodotti giusti, routine corretta e consigli professionali.',
      content: 'Mantenere un colore brillante e vibrante richiede attenzione e cura quotidiana...',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80',
      date: '10 Gen 2026',
      category: 'Tutorial',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Taglio Perfetto per il Tuo Viso',
      excerpt: 'Guida completa per scegliere il taglio ideale in base alla forma del viso. Viso ovale, tondo, squadrato? Ecco i consigli.',
      content: 'La scelta del taglio giusto può valorizzare incredibilmente i tuoi lineamenti...',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
      date: '5 Gen 2026',
      category: 'Consigli',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Trattamenti Rigeneranti Inverno',
      excerpt: 'Proteggi i tuoi capelli dal freddo con i nostri trattamenti specifici. Idratazione profonda e riparazione intensiva.',
      content: 'L\'inverno può essere molto aggressivo per i capelli. Scopri come proteggerli...',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
      date: '1 Gen 2026',
      category: 'Trattamenti',
      readTime: '4 min'
    },
    {
      id: 5,
      title: 'Balayage vs Ombré: Quale Scegliere?',
      excerpt: 'Differenze, pro e contro delle tecniche di colorazione più amate. Una guida per scegliere consapevolmente.',
      content: 'Balayage e Ombré sono tecniche diverse che producono risultati unici...',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      date: '28 Dic 2025',
      category: 'Tendenze',
      readTime: '8 min'
    },
    {
      id: 6,
      title: 'Capelli Ricci: Routine Perfetta',
      excerpt: 'Come prendersi cura dei capelli ricci. Prodotti, tecniche e segreti per ricci definiti e senza effetto crespo.',
      content: 'I capelli ricci hanno bisogno di cure specifiche e attenzione particolare...',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      date: '20 Dic 2025',
      category: 'Tutorial',
      readTime: '10 min'
    }
  ]

  const categories = ['Tutti', 'Tendenze', 'Tutorial', 'Consigli', 'Trattamenti']
  const [activeCategory, setActiveCategory] = React.useState('Tutti')

  const filteredPosts = activeCategory === 'Tutti' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Il Nostro Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consigli, tendenze e novità dal mondo dell'hair styling. 
            Scopri tutti i segreti per capelli perfetti!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                      In Evidenza
                    </span>
                    <span className="text-sm text-gray-500">{filteredPosts[0].date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-red-500 transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">⏱ {filteredPosts[0].readTime} di lettura</span>
                    <Link
                      to={`/blog/${filteredPosts[0].id}`}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                    >
                      Leggi l'Articolo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
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
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-red-500 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">⏱ {post.readTime}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-red-500 font-semibold hover:text-red-600 transition-colors inline-flex items-center"
                  >
                    Leggi
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resta Aggiornata!</h2>
          <p className="text-xl mb-8 text-red-50">
            Iscriviti alla newsletter per ricevere consigli, offerte esclusive e le ultime tendenze
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-white text-red-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
              Iscriviti
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default BlogPage
