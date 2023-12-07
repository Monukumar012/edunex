import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import ServiceSection from '../Components/ServiceSection/ServiceSection'


const Home = () => {
  
  return (
    <>
      <Navbar/>
      <Hero
        cName = "home-hero"
        url = "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        textClass = "home-hero-text"
        heading = "We Empower you to find the right career path"
        para = "Join the Virtual Internship Program in emerging technologies with Edunexx"
        btnText = "Apply Now"
        btnClass = "home-hero-btn"
        alt="image"
      />
      <ServiceSection
        heading = "Internships"
      />
      <Footer/>
    </>
  )
}

export default Home