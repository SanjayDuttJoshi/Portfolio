import React from 'react'
import mailLogo from './assets/Logo/mailLogo.png';
import phoneLogo from './assets/Logo/phoneLogo.png';

export default function Contact() {
  return (
   <section id="contact" className='py-10 px-3 text-white'>
    <div className='text-center mt-8'>
      <h3 className='text-4xl font-semibol
      '>Contact <span className='text-cyan-600'>Me</span>
      </h3>
      <p className='text-gray-400 mt-3 text-lg'>get in touch </p>
      <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl md:justify-between md:px-14 bg-gray-800 p-6 rounded-lg mx-auto
      '>
        <div className='flex  justify-center items-center gap-2'><img className='w-10' src={phoneLogo} />8218426648 </div>


        <div><a className='flex justify-center items-center gap-2' href="mailto:joshisanjaydutt3@gmail.com"><img className='w-10' src={mailLogo} /> joshisanjaydutt3@gmail.com</a></div>
        
      </div>

    </div>
   </section>
  )
}
