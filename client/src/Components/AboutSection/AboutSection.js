import React from 'react'
import './AboutSectionStyle.css'

const AboutSection = () => {
  return (
    <div className='about-main'>
        <div className='about-top'>
           <div className='top-left'>
                <p>We offer reliable, efficient delivery with high-caliber engineers & finely-tuned software development processes.We Believe In Leadership to lead the technology to build a better future Integrity to follow truth and be real Accountability for our every commitment.</p>
                <ul>
                    <li>We Imagine</li>
                    <li>We Engineer</li>
                    <li>We Modernize</li>
                    <li>We Manage</li>
                </ul>
           </div>

            <div className='top-right'>
                <img 
                    src='https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='image'
                />
            </div>

        </div>

        <div className='about-bottom'>
            
        </div>
    </div>
  )
}

export default AboutSection