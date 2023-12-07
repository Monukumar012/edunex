import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inside'>
        <div className='footer-top'>
          <div className='footer-top-text'>
            <h2>Edunexx</h2>
            {/* <p>Hello this is eX</p> */}
          </div>

          <div className='footer-top-icons'>
            <a href='https://www.facebook.com/edunexx'>
              <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href='https://www.instagram.com/edunexx'>
              <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href='https://twitter.com/edunexx'>
              <i className='fa-brands fa-twitter-square'></i>
            </a>
            <a href='https://www.linkedin.com/in/edunexx/'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>

        </div>




        <div className='footer-bottom'>
          <div className='footer-bottom-box'>
            <h4>Useful Links</h4>
            <a href='/'>Home</a>
            <a href='/service'>Internships</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
          </div>

          <div className='footer-bottom-box'>
            <h4>Internships Domain</h4>
            <a href='/'>Web Devlopement</a>
            <a href='/service'>Python Devlopement</a>
            <a href='/about'>Java Devlopement</a>
            <a href='/contact'>Campus Ambassador</a>
          </div>

          <div className='footer-bottom-box'>
            <h4>Project</h4>
            <a href='/'>Home</a>
            <a href='/service'>Service</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer