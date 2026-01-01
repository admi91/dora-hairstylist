import React from 'react'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const ExperiencePage = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
    </div>
  )
}

export default ExperiencePage
