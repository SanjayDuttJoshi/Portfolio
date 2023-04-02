import React from 'react'
import { saveAs } from 'file-saver';
import sanjayResume from './assets/Pdf/sanjayResume.pdf'


export default function 
() {

         const info=[
          {text: 'Years experience',count:'0'},
          {text: 'Completed Projects',count:'0'},
          {text: 'Companies Work',count:'0'},
        
         ]

        function downloadResume(){
          saveAs(sanjayResume, 'sanjayResume.pdf')
        }





  return (
   <section id="about" className='py-10 text-white'>
     <div className='text-center mt-8'>
      <h3 className='text-4xl font-semibold'>
        About <span className='text-cyan-800'>me</span>
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto '>
          <div>
          <div className='text-gray-300 my-3 text-lg '>
            <p className=' leading-7 w-11/12 '>
            "Hi there! I'm  Sanjay Dutt, a new frontend developer with a strong foundation in HTML5, CSS, and JavaScript. I'm also proficient in using Tailwind CSS for creating responsive and modern UIs.

Additionally, I have experience with TypeScript for writing scalable and maintainable code, and I'm familiar with using Redux for state management in React applications. Speaking of React, I've also worked with React JS extensively to build dynamic and interactive web applications.

As a self-motivated learner, I'm always looking for opportunities to improve my skills and stay up-to-date with the latest web technologies. I'm a firm believer in clean code, thoughtful design, and user experience, and I strive to apply these principles to every project I work on."



            </p>
            <div className='flex flex-col md:flex-row mt-10 items-center   md:items-center md:justify-center md:gap-8 '>
               {
                    info.map(content => (
                      <div key={content.text} className="text-sm">
                       <h3 className='md:text-4xl text-xl font-semibold text-white '>{content.count}</h3>
                       <span>{content.text}</span>

                      </div>
                    ))
               }
               
               <button onClick={downloadResume} className='btn-primary mt-10 md:mt-0 items-center justify-center '>
                Download CV
               </button>
              
            </div>
          </div>
          </div>
        </div>
      </h3>
     </div>
   </section>
  )
}
