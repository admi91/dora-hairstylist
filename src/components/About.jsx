import React, { useState, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { getAbout } from '../services/api'

const About = () => {
  const { t } = useTranslation('about')
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAbout = async () => {
      const data = await getAbout()
      console.log('About data ricevuta:', data)
      if (data) {
        setAboutData(data)
      }
      setLoading(false)
    }
    loadAbout()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-pulse text-gray-400">Caricamento...</div>
                </div>
              ) : aboutData?.profileImage ? (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {aboutData?.title || t('title')}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed prose prose-invert max-w-none">
              {aboutData?.description ? (
                <div dangerouslySetInnerHTML={{ __html: aboutData.description }} />
              ) : (
                <>
                  <p>
                    {t('intro.welcome')} <strong>{t('intro.brand')}</strong>, {t('intro.description')}
                  </p>
                  <p>
                    {t('services.paragraph1')}
                  </p>
                  <p>
                    {t('services.paragraph2')}
                  </p>
                </>
              )}
            </div>

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
