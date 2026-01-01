import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
