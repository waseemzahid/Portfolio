import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='primary-color text-4xl font-bold leading-tight'>Contact</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 p-10 bg-[#161616] rounded-xl'>
          <form action='https://getform.io/f/qaloexkb' method='POST'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <div class="mt-2.5 relative">
              <input type="text" name="name" id="" placeholder="Your Name" class="bg-[#161616] w-full px-4 py-4
              text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600" />
              </div>
            </div>

            <div>
              <div class="mt-2.5 relative">
              <input type="email" name="email" id="" placeholder="Your Email" class="bg-[#161616] w-full px-4 py-4
              text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600" />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <div class="mt-2.5 relative">
                <textarea name="message" id="" placeholder="Your Message" rows='3' class="bg-[#161616] w-full px-4 py-4
              text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600" />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <button type='submit'
              className='text-xl w-full p-3 mt-2 font-semibold text-white bg-primary-color rounded-md'>Send Message</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact