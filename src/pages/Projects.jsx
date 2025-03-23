import React from 'react'
import flightImage from '../assets/flight.jpg';
import ibimage from '../assets/ibomma.png'


function Projects() {
  return (
    <div>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
        <div className='project border shadow-amber-500 rounded-2xl flex flex-col justify-center items-center gap-5 hover:scale-105 hover:shadow-purple-500 overflow-hidden'>
          <img
            src={flightImage}
            alt='image'
          />
          <h2 className='text-2xl font-bold'>Airline Reservatioo System</h2>
          <p>
            In this project, I tried to make a realistic website to search the flights on particular date, book the flight tickets, get the tickets, etc
          </p>
          
             <a href="https://github.com/abhijittupe/PG_Diploma_Project" target='about_blank'>
             <button className=' bg-blue-900 text-white text-xl py-5 px-10 rounded-2xl mx-1 my-1 align-middle '>
             GO LIVE</button>
            </a>
          
        </div>
        <div className='project border  shadow-amber-500 rounded-2xl flex flex-col justify-center items-center gap-5 hover:scale-105 hover:shadow-purple-500 overflow-hidden'>
          <img
            src={ibimage}
            alt='image'
          />
          <h2 className='text-2xl font-bold'>IBOMMA Clone</h2>
          <p className='p-1'>
            In this clone project, I tried to create a online movie streaming website clone like Ibomma.
          </p>
          <a href="https://github.com/abhijittupe/ibommaClone" target='about_blank'>
          <button className=' bg-blue-900 text-white text-xl py-5 px-10 rounded-2xl mx-1 my-1'>
            GO LIVE
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
