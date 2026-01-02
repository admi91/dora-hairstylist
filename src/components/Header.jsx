import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'

const Header = () => {
  const { t } = useTranslation('header')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: t('menuItems.home'), path: '/' },
    { name: t('menuItems.gallery'), path: '/galleria' },
    { name: t('menuItems.portfolio'), path: '/portfolio' },
    { name: t('menuItems.blog'), path: '/blog' },
    { name: t('menuItems.experience'), path: '/esperienza' },
    { name: t('menuItems.contacts'), path: '/contatti' },
  ]

  const shouldBeTransparent = isHomePage && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent py-6' : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Dora Hair Stylist" 
              className={`h-12 md:h-14 transition-all duration-300 ${
                shouldBeTransparent ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:opacity-70 ${
                  shouldBeTransparent ? 'text-white' : 'text-gray-900'
                } ${location.pathname === item.path ? 'font-bold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${shouldBeTransparent ? 'text-white' : 'text-gray-900'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 bg-white rounded-lg p-4 shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left text-gray-900 hover:opacity-70 ${
                  location.pathname === item.path ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
