import React from 'react'

export default function Hireme() {

  const handleClick = () => {
    window.open("mailto:joshisanjaydutt3@gmail.com");
  }

  return (
     <section id="hireme" className='py-10 px-3 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
      
      </div>
      <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center md:gap-16'>
            <div>
            <h2 className='text-2xl font-semibold'>Do you want any work from me</h2>
            <p className='max-w-lg text-sm mt-4 text-gray-200 leading-6'>"Are you looking for a frontend developer who can bring your web ideas to life? Look no further! I'm passionate about creating visually stunning and intuitive web experiences that engage and delight users. Whether you're starting a new project from scratch or need someone to jump in and make updates to an existing site, I'm ready to help.
<br />
<br />
With my expertise in HTML5, CSS, Tailwind CSS, JavaScript, TypeScript, Redux, and React JS, I can help you create custom solutions that align with your unique goals and vision. I pride myself on clean code, thoughtful design, and user experience, and I'm committed to delivering high-quality work that exceeds your expectations."
            </p>
            </div>
           
            <button onClick={handleClick} className='btn-primary mt-10'>Say Hello</button>
          </div>
      </div>
     </section>
  )
}
