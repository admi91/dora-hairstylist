import React from 'react'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation('hero')

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.svg" 
            alt="Dora Hair Stylist" 
            className="h-32 md:h-40 brightness-0 invert"
          />
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Link
          to="/galleria"
          className="btn-primary text-lg inline-block"
        >
          {t('ctaButton')}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
