import React from 'react'
import ReactImage from '../assets/portfolio/react-2.svg'
import bootstrap from '../assets/portfolio/bootstrap-5-1.svg'
import css from '../assets/portfolio/css-3.svg'
import html from '../assets/portfolio/html-1.svg'
import javascript from '../assets/portfolio/javascript-1.svg'
import mysql from '../assets/portfolio/mysql-3.svg'
import python from '../assets/portfolio/python-5.svg'
import tailwindcss from '../assets/portfolio/tailwindcss.svg'
import github from '../assets/portfolio/github-icon-1.svg'

function Experience() {

    const technologies = [
        {
            id: 1,
            src: python,
            title: "Python",
            style: 'shadow-blue-500'
        },

        {
            id: 2,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },

        {
            id: 3,
            src: css,
            title: "CSS",
            style: 'shadow-blue-400'
        },
        {
            id: 4,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: mysql,
            title: "MySQL",
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            src: tailwindcss,
            title: "Tailwindcss",
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: github,
            title: "Github",
            style: 'shadow-black'
        },
        {
            id: 8,
            src: bootstrap,
            title: "BootStrap",
            style: 'shadow-purple-600'
        },
        {
            id: 9,
            src: ReactImage,
            title: "React",
            style: 'shadow-sky-400'
        },


    ]

  return (
    <div name="experience" className="bg-white w-full mx-auto p-10 mt-10">
        <div className="mx-auto p-10 flex flex-col justify-center 
        h-full max-w-screen-lg">
            <div className='mb-20'>
                <h2 className="text-4xl inline border-b-4 border-b-gray-600 
                font-bold">Experience</h2>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 text-center sm:grid-cols-2
            py-12 sm:px-0 gap-6">
                {technologies.map(function ({id, src, title, style}) {
                    return (
                        <div key={id} className={`hover:scale-105 shadow-md duration-200 py-2 
                        rounded-lg ${style} `}>
                            <img src={src} alt="" className="w-20 mx-auto object-contain"/>
                            <p className=" mt-2 text-sm whitespace-normal" >{title}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Experience