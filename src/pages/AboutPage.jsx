import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
