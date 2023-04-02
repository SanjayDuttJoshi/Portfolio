import React from 'react';
import hero from "./assets/images/hero.png";



const social_media = [
  'logo-instagram',
  'logo-facebook',
  'logo-linkedin',
  'logo-gmail',

]
export default function Hero() {
  return (
   <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center ">
     <div className='flex-1  flex items-center justify-center'>
      <img src={hero} alt="" className='md:w-11/12 h-full boject-cover ' />
     </div>
     <div className='flex-1 '>
       <div className='md:text-left text-center '>
        <h1 className='md:text-5xl text-2xl md:leading-normal leading-0 text-white font-bold'>
          <span className='text-cyan-600 md:text-6xl text-5xl  block'>
            Hello!
          </span>
          My name is <span>Sanjay Dutt</span>
        </h1>
        <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
          Frontend developer
          </h4>
          <button className='btn-primary mt-4 '><a href='#contact'>contact me</a></button>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center '>
            {
              social_media?.map((icon)=>{
                <div key={icon} className="text-gray-600">
                   <ion-icon name={icon}></ion-icon>
                </div>
              })
            }

          </div>
        
       </div>
       </div>
   </section>
  )
}
