import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage
