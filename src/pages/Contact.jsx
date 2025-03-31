import React from 'react'

function Contact() {
  return (
    <div>
      <form className='flex justify-center text-2xl text-left p-4 mx-auto my-auto dark:text-white' action="" method="post">
        <div className='bg-amber-950 w-3xl px-5 rounded-2xl py-5'>
          <div className='flex flex-col justify-center text-black dark:text-white '>
            Enter your Name : <input className=' bg-cyan-900 py-2 my-2 rounded-2xl' type="text" />
            Enter your Email : <input className=' bg-cyan-900 py-2 my-2 rounded-2xl' type="text" />
            Enter your Message here : <textarea className=' bg-cyan-900 py-2 my-2 rounded-2xl' name="" id=""></textarea>
            </div>
            <div className='text-2xl align-middle py-2 w-2'>
              <button  className='button bg-green-800 rounded w-auto' type='submit' onSubmit={()=>alert("Message submitted")}>Submit</button>
            </div>
        </div>
      </form>
    </div>


  )
}

export default Contact
