import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../main'

function Header() {
  const { theme, toggleTheme } = useContext(themeContext)
  return (
    <div className='w-full bg-green-800 py-4 text-white md:py-6 '>
      <nav className='w-full'>
        <Link to=''className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>Home </Link>
        <Link to='/about' className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>About </Link>
        <Link to='/contact' className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>Contact </Link>
        <Link to='/projects' className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>Projects </Link>
        <button onClick={() => toggleTheme("dark")}>
					{theme == "light" ? "☀️" : "🌙"}
				</button>
      </nav>
    </div>
  )
}

export default Header
