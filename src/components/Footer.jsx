import React from 'react'
import logo from '../assets/favicon.png'

const Footer = () => {
  return (
    <div className='mx-auto max-w-[1200px] sm:h-[150px] p-12 flex items-center justify-between'>
      <a href='/'>
        <div className='flex items-center'>
        <img src={logo} alt='' width={40} height={30} />
        <h1 className='text-2xl font-bold primary-color ml-2'>Waseem Zahid</h1>
      </div>
      </a>
      <p className='text-white sm:text-lg lg:text-xl'>
          <a href='mailto:waseemzahid64@gmail.com'>waseemzahid64@gmail.com</a> <br /> 
          <a href="tel:+923006997639">Conatct: +92 300 6997639</a>
        </p>
    </div>
  )
}

export default Footer