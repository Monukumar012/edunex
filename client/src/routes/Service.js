import React from 'react'
import ServiceSection from '../Components/ServiceSection/ServiceSection'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Service = () => {
  return (
    <>
      <Navbar/>
      <ServiceSection
        heading = "Internships"
      />
      <Footer/>
    </>
  )
}

export default Service