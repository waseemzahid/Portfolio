import React from 'react'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'
import proj4 from '../assets/proj4.jpg'
import proj5 from '../assets/proj5.jpg'
import proj6 from '../assets/proj6.jpg'
import proj7 from '../assets/proj7.jpg'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8 text-center'>
        <h2 className='primary-color text-4xl mb-3 font-bold'>Work</h2>
        <p className='text-white sm:text-lg lg:text-xl'>
          Check out some of my recent work
        </p>
        <div className='mt-4'>
        <p className='text-orange-600 font-bold text-lg'>
        “Hover to get details about work”
        </p>
        </div>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[280px] sm:h-[300px] md:h-[400px] bg-cover relative">
        <img src={proj4} alt="Project Screenshot" className="w-full h-full object-cover" />
        <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
          <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center">MERN CHAT APP with Socket.io</span>
          <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>React JS, Node JS, Express JS, Socket.IO
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>Tailwind CSS & Daisy UI
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Database:</span>MONGODB
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code, Postman, MongoDB Compass
            </li>
          </ul>
          <div className="pt-2 md:pt-6 text-center">
            <a href="https://mern-chat-app-189n.onrender.com/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
              Live Link
            </a>
          </div>
        </div>
      </div>

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[280px] sm:h-[300px] md:h-[400px] bg-cover relative">
        <img src={proj2} alt="Project Screenshot" className="w-full h-full object-cover" />
        <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
          <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center">E-Commerce Next JS APP With Stripe Payment</span>
          <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>NEXT JS, NEXT Auth
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>Tailwind CSS
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Database:</span>MONGODB
            </li>
            <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
              <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code, MongoDB Compass
            </li>
          </ul>
          <div className="pt-3 md:pt-6 text-center">
            <a href="https://amazonpro-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
              Live Link
            </a>
          </div>
        </div>
      </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[290px] sm:h-[300px] md:h-[400px] bg-cover relative">
          <img src={proj3} alt="Project Screenshot" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
            <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center">MERN Medicare Booking App with Stripe Payment</span>
            <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>React JS, Node JS, Express JS
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>Tailwind CSS
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Database:</span>MONGODB
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code, Postman, MongoDB Compass
              </li>
            </ul>
            <div className="pt-3 md:pt-6 text-center">
              <a href="https://medicare-booking-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
          <img src={proj7} alt="Project Screenshot" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
            <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center">NEXT Js Home Interior Design Website</span>
            <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>Next Js
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>Tailwind CSS, Shad CN, Framer Motion
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code
              </li>
            </ul>
            <div className="pt-4 md:pt-6 text-center">
              <a href="https://home-interior-three.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                Live Link
              </a>
            </div>
          </div>
        </div>
        
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
          <img src={proj5} alt="Project Screenshot" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
            <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center">React Js Educational Website</span>
            <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>React JS, Web3Froms
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>CSS3
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code
              </li>
            </ul>
            <div className="pt-4 md:pt-6 text-center">
              <a href="https://edusity-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
          <img src={proj6} alt="Project Screenshot" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
            <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center text-white">Netflix Clone With Firebase Authentication</span>
            <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>React JS, Firebase, TMDB Movies Database Api's
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>CSS3
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code
              </li>
            </ul>
            <div className="pt-4 md:pt-6 text-center">
              <a href="https://netflix-clone-psi-three-66.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] sm:h-[300px] md:h-[400px] bg-cover relative">
          <img src={proj1} alt="Project Screenshot" className="w-full h-full object-cover" />
          <div className="opacity-0 group-hover:opacity-100 bg-black/90 absolute inset-0 flex flex-col justify-center items-center duration-500 ease-in-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 p-4 md:px-6 shadow-lg m-2 md:m-6 rounded-md">
            <span className="text-lg md:text-2xl font-bold primary-color tracking-wider text-center text-white">Virtual Reality Frontend APP</span>
            <ul className="text-sm md:text-base lg:text-lg list-none mt-1 md:mt-4">
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Frameworks & Libraries:</span>React JS
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>CSS Styling:</span>Tailwind CSS
              </li>
              <li className="mb-2 text-white pl-6 md:pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-600 before:text-[24px] md:before:text-[36px]">
                <span className='mr-2 font-bold text-orange-600'>Software & Tools:</span>Visual Studio Code
              </li>
            </ul>
            <div className="pt-4 md:pt-6 text-center">
              <a href="https://virtualreality-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className='px-2 py-2 md:px-6 md:py-3 w-full rounded-xl mr-0 md:mr-4 bg-gradient-to-br from-orange-500 to-red-500 text-white'>
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
