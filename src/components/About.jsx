import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from '../hooks/useTranslation'
import { getAbout } from '../services/api'

const About = () => {
  const { t } = useTranslation('about')
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAbout = async () => {
      const data = await getAbout()
      if (data) {
        setAboutData(data)
      }
      setLoading(false)
    }
    loadAbout()
  }, [])

  // Mostra loading state completo senza contenuto
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Skeleton */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 animate-pulse">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400">Caricamento...</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-6">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              {aboutData?.profileImage ? (
                <img
                  src={aboutData.profileImage}
                  alt={aboutData.title || 'Dora Hairstylist Salon'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/drjt7kzny/image/upload/v1767314731/1767182338376_cggdqd.png"
                  alt="Dora Hairstylist Salon"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {aboutData?.title || t('title')}
            </h2>
            {aboutData?.description ? (
              <div className="prose prose-lg max-w-none text-gray-700">
                <ReactMarkdown>{aboutData.description}</ReactMarkdown>
              </div>
            ) : (
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  {t('intro.welcome')} <strong>{t('intro.brand')}</strong>, {t('intro.description')}
                </p>
                <p>
                  {t('services.paragraph1')}
                </p>
                <p>
                  {t('services.paragraph2')}
                </p>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {aboutData?.yearsExperience || t('stats.experience.value')}
                </div>
                <div className="text-gray-600">{t('stats.experience.label')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">
                  {aboutData?.happyClients || t('stats.clients.value')}
                </div>
                <div className="text-gray-600">{t('stats.clients.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
