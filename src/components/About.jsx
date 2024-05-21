import React from 'react'
import aboutImg from '../assets/about-4.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className="grid md:grid-cols-2 sm:py-16">
        <div className="text-left flex flex-col h-full justify-start py-3 md:py-0"> 
          <div className="mx-6">
            <h2 className="font-bold mb-6 primary-color text-[30px]">About Me</h2>
            <ul className="text-base lg:text-lg list-none">
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Proficient in MERN Stack, React JS, Next JS & Node JS with experience in JavaScript.</li>
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Skilled in utilizing Jira for task management, including creating and assigning tasks for efficient project execution.</li>
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Experienced in setting up and managing CI/CD workflows, including creating pipelines and leveraging GitHub Actions for automated workflows.</li>
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Proficient in utilizing frontend development frameworks such as Tailwind CSS, Material-UI, and Chakra-UI to create visually appealing and responsive web applications.</li>
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Expert in frontend animations utilizing Framer Motion library, with additional experience in SVG animations using Lottie Files.</li>
              <li className="mb-2 pl-8 relative before:content-['▹'] before:absolute before:left-0 before:text-orange-500 before:text-[36px]">Experienced in implementing authentication using Firebase and validation using Formik, React Hook Form, and Joi-Browser for robust data validation.</li>
            </ul>
          </div>
        </div>
        <img className="mx-auto rounded-lg py-8 md:py-0" src={aboutImg} width={450} height={450} alt='' />
      </div>
    </div>
  )
}

export default About