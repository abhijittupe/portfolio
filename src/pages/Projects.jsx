import React from 'react'
import flightImage from '../assets/flight.jpg';


function Projects() {
  return (
    <div>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        <div className='project shadow-gray-500 rounded-2xl flex flex-col justify-center items-center gap-5 hover:scale-105 hover:shadow-purple-500'>
          <img
            src={flightImage}
            alt='image'
          />
          <h2>Airline Reservatioo System</h2>
          <p>
            In this project, I tried to make a realistic website to search the flights on particular date, book the flight tickets, get the tickets, etc
          </p>
          <button className=' bg-black text-white text-2xl py-5 px-10 rounded-2xl'>
            GO LIVE
          </button>
        </div>
        <div className='project border shadow-gray-500 rounded-2xl flex flex-col justify-center items-center gap-5 hover:scale-105 hover:shadow-purple-500'>
          <img
            href='portfolio\src\assets\flight.jpg'
            alt='image'
          />
          <h2>IBOMMA Clone</h2>
          <p>
            In this clone project, I tried to create a online movie streaming website clone like Ibomma.
          </p>
          <button className=' bg-black text-white text-2xl py-5 px-10 rounded-2xl'>
            GO LIVE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
