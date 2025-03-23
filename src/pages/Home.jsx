import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import photo from '../assets/myphoto.jpg'
import Lottie from "lottie-react";
import animation from '../assets/devanimation.json'
import { SocialIcon } from 'react-social-icons'


function Home() {
  return (
    <div className='flex gap-2 mx-auto'>
      <div className='leftBanner flex flex-col gap-8 justify-center mx-2'>
      <img
        src={photo}
        alt='img'
        className='w-50 h-50 rounded-full mx-auto mb-8 object-cover'
      />
      <h1 className=' text-5xl'>
        Hi, Everyone 👋🏻,I'm{" "} 
        <span className=' text-purple-950'>FULL STACK WEB DEVELOPER</span>
      </h1>
      <div className='buttons flex gap-5'>
       <a href="mailto:abhitupe08@gmail.com?subject=Want_to_Hire_you">
        <button className=' bg-blue-700 text-white text-xl py-5 px-10 rounded-2xl border-2'>
          Hire me
        </button>
        </a>
        <button className=' bg-emerald-900 text-white text-2xl py-5 px-10 rounded-2xl border-2'>
          <a href='Resume.pdf' download>Download My Resume</a>
        </button>
      </div>
      <div className='socialLinks'>
        <SocialIcon url='https://github.com/abhijittupe' target='about_blank' />
        <SocialIcon url='https://www.linkedin.com/in/abhijit-tupe-3859611b5/' target='about_blank' />
      </div>
      </div>
      <div className='rightbanner min-w-min'>
      <Lottie loop autoplay animationData={animation} size={50} />
      </div>
      
    </div>
  )
}

export default Home
