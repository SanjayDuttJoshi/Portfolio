import React from 'react'
import css from "./assets/images/css.png";
import html5 from "./assets/images/html5.png";
import ReactJs from "./assets/images/ReactJs.png";
import Redux from "./assets/images/Redux.png";
import TailwindCss from "./assets/images/TailwindCss.png";
import typeScript from "./assets/images/typeScript.png";
import Jscript from "./assets/images/Jscript.png"


export default function Skills() {
       
  const Skills = [
    {
      logo: html5 ,
      level: "Advance",
      count: 86,
      name: "html5",
    },
    {
      logo: css,
      level: "Advance",
      count: 86,
      name: "css",
    },
    {
      logo: TailwindCss,
      level: "Advance",
      name: "TailwindCss",
      count: 86,
    },
    {
      logo: Jscript ,
      level: "Advance",
      count: 86,
      name: "JS",
    },
    {
      logo: typeScript ,
      level: "Beginner",
      count: 86,
      name: "TypeScript",
    },
    {
      logo: ReactJs ,
      level: "Advance",
      count: 86,
      name: "ReactJS",
    },
    {
      logo: Redux ,
      level: "intermediate",
      count: 86,
      name: "Redux"
    },
  ]
    

  return (
    <section id="skills" className='py-10 bg-gray-800 relative '>
    <div className='mt-8 text-gray-100  text-center'>
      <h3 className='text4xl font-semibold '>
        My <span className='text-cyan-600'>Skills</span>
      </h3>
      <p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
      <div className='flex items-center justify-center mt-12 gap-10 flex-wrap '>
        {
          Skills.map((Skill,i)=>(
            
            <div key={i} className='border-2 relative min-w-[10rem] max-w-[16rem] bg-gray-900 border-cyan-600  p-10 rounded-xl '>
              {console.log(Skill, "skills")}
             
            <div
            style={{
              background: `conic-gradient(rgb(8,145,170) ${Skill.count}%, #ddd ${Skill.count}% )`
            }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
             <div className=' w-20  h-20 bg-gray-900 rounded-full flex items-center justify-center'>
             <img src={Skill.logo} alt={Skill.name} />
             </div>
            </div>
             <p className='text-2xl text-cyan-300 '>{Skill.name}</p>
             <p className='text-xl mt-3 text-blue-600'>{Skill.level}</p>
        </div>
          ))
        }
      </div>
    </div>
    </section>
  )
}
