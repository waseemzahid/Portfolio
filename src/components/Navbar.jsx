import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const[nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary-color ml-4'>Waseem Zahid</h1>
      <ul className='hidden md:flex text-[20px]'>
        <li className='p-5 text-gradient-hover'><a href='#about'>About</a></li>
        <li className='p-5 text-gradient-hover'><a href='#work'>Work</a></li>
        <li className='p-5 text-gradient-hover'><a href='#contact'>Contact</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[70%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        {/* <h1 className='text-[24px] primary-color mx-6 my-4'>Waseem Zahid</h1> */}
        <ul className='text-center justify-center text-[20px] mt-4'>
          <li className='p-2 text-gradient-hover'><a href='#home' >Home</a></li>
          <li className='p-2 text-gradient-hover'><a href='#about' >About</a></li> 
          <li className='p-2 text-gradient-hover'><a href='#work' >Work</a></li> 
          <li className='p-2 text-gradient-hover'><a href='#contact'>Contact</a></li> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar