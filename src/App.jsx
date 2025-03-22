import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useState } from 'react'
import { useEffect } from 'react'
import { themeContext } from './main'
import AIchatbot from './components/AIchatbot'

function App() {
  const [theme, setTheme] = useState("light")
		const toggleTheme = () => {
			setTheme(theme == "light" ? "dark" : "light")
    }
  useEffect(() =>
  {
    document.body.className = theme;
  },[theme])
  return (
    <>
    <themeContext.Provider value={{theme,toggleTheme}}>
      <Header/>
      
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='aichatbot' element={<AIchatbot/>} />
      </Routes>
      <Footer/>
      </themeContext.Provider>
    </>
  )
}

export default App
