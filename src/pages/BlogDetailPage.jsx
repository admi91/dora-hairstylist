import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getBlogPostById, getBlogPosts } from '../services/api'

const BlogDetailPage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  // Carica l'articolo da Strapi
  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true)
      window.scrollTo(0, 0)
      const post = await getBlogPostById(id)
      setArticle(post)
      
      // Carica articoli correlati dalla stessa categoria
      if (post && post.category) {
        const allPosts = await getBlogPosts(post.category)
        const related = allPosts
          .filter(p => p.id !== parseInt(id))
          .slice(0, 3)
        setRelatedArticles(related)
      }
      
      setLoading(false)
    }
    
    loadArticle()
  }, [id])

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-rose-500"></div>
        </div>
        <Footer />
      </>
    )
  }

  // Article not found
  if (!article) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen bg-white flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articolo non trovato</h1>
          <p className="text-gray-600 mb-8">L'articolo che stai cercando non esiste o è stato rimosso.</p>
          <Link
            to="/blog"
            className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
          >
            Torna al Blog
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <article className="pt-20 min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={article.coverImage || 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80'}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-rose-500 text-white text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-white text-sm space-x-6">
              <span>{article.publishedDate || article.createdAt}</span>
              <span>•</span>
              <span>{article.readTime || '5'} min di lettura</span>
              <span>•</span>
              <span>{article.author || 'Dora'}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </p>
          )}

          {/* Main Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tag:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Condividi:</h3>
            <div className="flex gap-4">
              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Facebook
              </button>
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`, '_blank')}
                className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
              >
                Twitter
              </button>
              <button
                onClick={() => window.open(`https://api.whatsapp.com/send?text=${article.title} ${window.location.href}`, '_blank')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Vuoi saperne di più?
            </h3>
            <p className="text-gray-700 mb-6">
              Prenota una consulenza gratuita e scopri come realizzare il look dei tuoi sogni
            </p>
            <Link
              to="/contatti"
              className="inline-block px-8 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition shadow-lg"
            >
              Prenota Ora
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.coverImage || 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80'}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full">
                        {related.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{related.publishedDate || related.createdAt}</span>
                        <span className="mx-2">•</span>
                        <span>{related.readTime || '5'} min</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
      <Footer />
    </>
  )
}

export default BlogDetailPage
