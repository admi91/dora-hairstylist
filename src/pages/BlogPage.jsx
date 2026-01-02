import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getBlogPosts } from '../services/api'
import { useTranslation } from '../hooks/useTranslation'

const BlogPage = () => {
  const { t } = useTranslation('blog')
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(t('categories.all'))

  const categories = [
    t('categories.all'),
    t('categories.trends'),
    t('categories.tutorials'),
    t('categories.tips'),
    t('categories.treatments')
  ]

  // Carica i blog posts all'avvio e quando cambia la categoria
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const category = activeCategory === t('categories.all') ? null : activeCategory
      const posts = await getBlogPosts(category)
      setBlogPosts(posts)
      setLoading(false)
    }
    
    loadPosts()
  }, [activeCategory, t])

  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('loading')}</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container-custom py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
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

          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">{t('noArticles')}</p>
              <p className="text-gray-500 text-sm">
                {t('adminLink')} <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">Strapi Admin</a>
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={blogPosts[0].coverImage || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-4 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                          {t('featured')}
                        </span>
                        <span className="text-sm text-gray-500">
                          {blogPosts[0].publishedDate ? new Date(blogPosts[0].publishedDate).toLocaleDateString('it-IT') : ''}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-red-500 transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">⏱ {blogPosts[0].readTime} {t('readTime')}</span>
                        <Link
                          to={`/blog/${blogPosts[0].id}`}
                          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                        >
                          {t('readArticle')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              {blogPosts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(1).map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('it-IT') : ''}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hover:text-red-500 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">⏱ {post.readTime} min</span>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-red-500 font-semibold hover:text-red-600 transition-colors inline-flex items-center"
                          >
                            {t('read')}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('newsletter.title')}</h2>
            <p className="text-xl mb-8 text-red-50">
              {t('newsletter.subtitle')}
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-white text-red-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
                {t('newsletter.submit')}
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
