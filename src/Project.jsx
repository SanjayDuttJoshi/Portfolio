import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import EasyCart from "./assets/Logo/EasyCart.png";
import MoodTracker from "./assets/Logo/MoodTracker.png";
import Netflix from "./assets/Logo/Netflix.png";
import Todos from "./assets/Logo/Todos.png";


export default function Project() {

       const projects =[
        {
          img: EasyCart,
          github_link: "https://github.com/SanjayDuttJoshi/Easy-Cart.git",
          live_link: "https://easycartdemo.netlify.app",
          name: "AmazonCart"
        },
        {
          img: MoodTracker,
          github_link: "https://github.com/SanjayDuttJoshi/Mood-Tracker.git",
          live_link: "https://moodtrackerdemo.netlify.app/",
          name: "Mood Tracker"
        },
        {
          img: Todos,
          github_link: "https://github.com/SanjayDuttJoshi/Todo-App.git",
          live_link: "https://boisterous-syrniki-34fc0e.netlify.app/",
          name: "Todo App"
        },
        {
          img: Netflix,
          github_link: "https://github.com/SanjayDuttJoshi/Netflix-Clone.git",
          live_link: "https://subtle-hummingbird-1d3902.netlify.app/",
          name: "NetFlix"
        }
       ]



  return (
    <section id="projects" className='py-10 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>

      </div>
      <br />
      <div className='flex max-w-6xl px-5 mx-auto items-center relative justify-center'>
        <div className='lg:w-2/3 w-full '>
          <Swiper  slidesPerView={1} spaceBetween={20} breakpoints={{
            768:{
              sliderPerview: 3,
            }
          }}
          loop={true} autoplay={{delay: 2000,}}
           pagination={{
            clickable: true,
           }}
           modules={[Pagination,Autoplay]}
          >
            {
              projects.map((project_info,i)=>(
                <SwiperSlide key={i}>
              <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                <img src={project_info.img} alt="project" className='rounded-lg' />
                <h3 className='text-xl my-4'>{project_info.name}</h3>
                <div className='flex gap-3'>
                  <a href={project_info.github_link} target="_blank"  className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                  <a href={project_info.live_link}  target="_blank" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live demo</a>
                </div>
              </div>
            </SwiperSlide>
              ))
            }
            
          </Swiper>
        </div>
       
      </div>
    </section>
  )
}
