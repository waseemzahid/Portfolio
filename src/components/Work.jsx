import React from 'react'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8 text-center'>
        <h2 className='primary-color text-4xl mb-3 font-bold'>Work</h2>
        <p className='text-white sm:text-lg lg:text-xl'>
          Check out some of my recent work
        </p>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-1g 
        shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={proj2} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2x1 font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href="https://amazonpro-chi.vercel.app/" target='blank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-1g 
        shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={proj1} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2x1 font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href="https://virtualreality-nine.vercel.app/" target='blank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-1g 
        shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
          <img src={proj3} layout="fill" objectFit="cover" alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2x1 font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href="https://medicare-booking-frontend.vercel.app/" target='blank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work