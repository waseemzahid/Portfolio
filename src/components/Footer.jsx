import React from 'react'
import logo from '../assets/favicon.png'

const Footer = () => {
  return (
      <div className='mx-auto max-w-[1200px] p-12 flex items-center justify-between flex-col sm:flex-row sm:h-[150px]'>
        <a href='/'>
          <div className='flex items-center'>
            <img src={logo} alt='' width={40} height={30} />
            <h1 className='text-2xl font-bold primary-color ml-2'>Waseem Zahid</h1>
          </div>
        </a>
        <p className='text-white text-center sm:text-left sm:text-lg lg:text-xl mt-4 sm:mt-0'>
          <a href='mailto:waseemzahid64@gmail.com'>waseemzahid64@gmail.com</a> <br /> 
          <a href="tel:+923006997639">Contact: +92 300 6997639</a>
        </p>
      </div>
  )
}

export default Footer
