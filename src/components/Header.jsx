import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../main'

function Header() {
  const { theme, toggleTheme } = useContext(themeContext)
  return (
    <div className='w-screen max-h-screen bg-green-800 py-4 text-white md:py-6 flex justify-center md:bg-blue-400 lg:bg-amber-800 xl:bg-blue-950'
>
      <nav className='w-screen px-1'>
        <Link to=''className=' hover:text-green-600 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl px-2'>Home </Link>
        <Link to='/about' className=' hover:text-green-600 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl px-2'>About </Link>
        {/* <Link to='/contact' className=' hover:text-green-600 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl px-2'>Contact </Link> */}
        <Link to='/projects' className='  hover:text-green-600 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl px-2'>Projects </Link>
        <Link to='/aichatbot' className='  hover:text-green-600 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl px-2'>AI chatbot</Link>
        <button onClick={() => toggleTheme("dark")}>
					{theme == "light" ? "☀️Light" : "🌙Dark"}
				</button>
      </nav>
    </div>
  )
}

export default Header
