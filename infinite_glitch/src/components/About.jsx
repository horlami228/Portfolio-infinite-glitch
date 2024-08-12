import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div name="about" className="min-h-screen w-full bg-white pt-20">
        <div className="flex flex-col justify-center mx-auto max-w-screen-lg p-5 md:p-10 w-full h-full">
            <div className="mb-5">
                <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-600'>
                    About
                </p>
            </div>

            <p className="text-lg md:text-xl mt-10 md:mt-20">
                Greetings! I'm Akintola Olamilekan, a Backend Developer with a background in Marketing but a heart deeply immersed in technology. My journey began with the intricacies of C, transitioning smoothly into the vast landscapes of Python and JavaScript.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                With over 2+ years of experience, I specialize in crafting secure and high-performing web applications. I design efficient APIs to foster seamless frontend-backend communication and work proficiently with frameworks such as Flask, Django, and Express, as well as databases like MySQL, PostgreSQL, and MongoDB.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                Recently, I've tackled projects involving data import and user management, achieving significant performance improvements. My role in collaborative projects often revolves around backend architecture, designing database schemas that ensure robust data integrity and optimized performance.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                I am always eager to optimize and refine solutions, aiming to enhance scalability and efficiency. My professional and proactive approach has led to noticeable reductions in system latency and improved data handling.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                Away from the keyboard, I’m an avid supporter of Manchester United and relish diving into the expansive universes of video games. Thank you for exploring my profile. Let’s connect to discover how we can collaborate on exciting web projects and create meaningful solutions together!
            </p>
            <div className="flex justify-center gap-4 mt-8">
                <a href="https://www.linkedin.com/in/akintola-olamilekan" className="text-blue-600 hover:text-blue-800" target='_blank' rel='noreferrer'>
                    <FaLinkedinIn size={30} />
                </a>
                <a href="https://github.com/horlami228" className="text-gray-800 hover:text-black" target='_blank' rel='noreferrer'>
                    <FaGithub size={30} />
                </a>
                <a href="https://twitter.com/lazy_codding" className="text-gray-700 hover:text-black" target='_blank' rel='noreferrer'>
                    <FaXTwitter size={30} />
                </a> 
            </div>
        </div>
    </div>
  )
}

export default About;
