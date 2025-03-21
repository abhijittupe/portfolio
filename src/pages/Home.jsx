import React from 'react'
import {Github,Linkedin} from 'lucide-react'
import photo from '../assets/myphoto.jpg'
import Lottie from "lottie-react";
import animation from '../assets/devanimation.json'


function Home() {
  return (
    <div className='flex gap-2 mx-auto'>
       <img
                    src={photo}
                    alt='img'
                    className='w-32 h-32 rounded-full mx-auto mb-8 object-cover'
         />
         <h1 className=' text-5xl'>
					Hi, Everyone 👋🏻,I'm{" "}
					<span className=' text-purple-500'>FULL STACK WEB DEVELOPER</span>
				</h1>
        <Lottie loop autoplay animationData={animation}/>
    </div>
  )
}

export default Home
