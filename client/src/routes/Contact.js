import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContactForm from '../Components/Form/ContactForm'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName = "contact-hero"
        url = "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        textClass = "contact-hero-text"
        heading = "Contact"
        alt="image"
      />
      <ContactForm/>
      <Footer/>

      

    </>
  )
}

export default Contact