import React from 'react'
import useTranslation from '../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                alt="Dora Hairstylist Salon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
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

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">{t('stats.experience.value')}</div>
                <div className="text-gray-600">{t('stats.experience.label')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">{t('stats.clients.value')}</div>
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
