import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import photo from '../assets/myphoto.jpg'
import Lottie from "lottie-react";
import animation from '../assets/devanimation.json'
import { SocialIcon } from 'react-social-icons'


function Home() {
  return (
    <div className='flex gap-2 mx-auto'>
      <div className='leftBanner flex flex-col gap-8 justify-center'>
      <img
        src={photo}
        alt='img'
        className='w-32 h-32 rounded-full mx-auto mb-8 object-cover'
      />
      <h1 className=' text-5xl'>
        Hi, Everyone 👋🏻,I'm{" "}
        <span className=' text-purple-500'>FULL STACK WEB DEVELOPER</span>
      </h1>
      <div className='buttons flex gap-5'>
        <button className=' bg-black text-white text-xl py-5 px-10 rounded-2xl'>
          Hire me
        </button>
        <button className=' bg-transparent text-black text-2xl py-5 px-10 rounded-2xl'>
          <a href='Resume.pdf' download>Download My Resume</a>
        </button>
      </div>
      <div className='socialLinks'>
        <SocialIcon url='https://github.com/abhijittupe' />
        <SocialIcon url='https://www.linkedin.com/in/abhijit-tupe-3859611b5/' />
      </div>
      </div>
      <div className='rightbanner'>
      <Lottie loop autoplay animationData={animation} />
      </div>
      
    </div>
  )
}

export default Home
