import React from 'react'
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <div>
      <h2 className=' text-4xl text-center text-decoration-underline decoration-1 decoration-wavy decoration-purple-500 my-10'>
				<b>About me</b>
			</h2>
			<div className=' border rounded-3xl shadow-2xl  shadow-amber-500 mb-5 flex flex-col gap-10 p-20'>
				<p className=' text-justify text-2xl '>
				Hello, I am a Fullstack Web Developer. I am an engineer with a passion for programming and building innovative things. I am skilled in Front End Technologies like HTML, CSS, JavaScript, React Js, Bootstrap, TailwindCSS,etc and also with Backend Technologies like Core Java, Advanced Java, Spring boot and Microservices, etc. In addition to this, I also worked with Database Technologies like Oracle, MySQL, NoSQl etc 
				</p>
				<div className=' flex gap-3'>
					<FaHtml5 size='5em' />
					<FaCss3 size='5em' />
					<FaJs size='5em' />
					<FaReact size='5em' />
					<SiTypescript size='5em' />
					<RiTailwindCssFill size='5em' />
					<FaJava size='5em'/>
					<FaGitAlt size='5em'/>
            
				</div>
			</div>
    </div>
  )
}

export default About
