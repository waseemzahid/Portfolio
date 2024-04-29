import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto max-w-[1200px] sm:h-[150px] p-12 flex items-center justify-between'>
      <span className='primary-color text-4xl'>Waseem Zahid</span>
      <p className='text-white sm:text-lg lg:text-xl'>
          <a href='mailto:waseemzahid64@gmail.com'>waseemzahid64@gmail.com</a> <br /> 
          <a href="tel:+923006997639">Conatct: +92 300 6997639</a>
        </p>
    </div>
  )
}

export default Footer