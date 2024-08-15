import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div name="about" className="min-h-screen w-full bg-white pt-20">
        <div className="flex flex-col justify-center mx-auto max-w-screen-lg p-5 md:p-10 w-full h-full">
            <div className="mb-5">
                <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-600'>
                    About Me
                </p>
            </div>

            <p className="text-lg md:text-xl mt-10 md:mt-20">
                Greetings! I'm Akintola Olamilekan, A Backend Developer with a unique journey that started in Marketing but quickly transitioned to the world of technology. Despite facing significant challenges, including limited access to resources, my passion for coding propelled me forward, driving me to learn and grow in the field of software development.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                I specialize in crafting secure and high-performing web applications, focusing on designing efficient APIs that facilitate seamless frontend-backend communication. My technical toolkit includes frameworks such as Flask, Django, and Express, and databases like MySQL, PostgreSQL, and MongoDB.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                My journey hasn't been without obstacles, but each challenge has only strengthened my resolve to succeed. From tackling complex data import tasks to improving user management systems, I have always sought out opportunities to enhance performance and optimize systems.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                What drives me is not just a love for technology, but a deep commitment to creating impactful solutions that make a difference. I am constantly pushing myself to refine my skills and deliver work that exceeds expectations, often achieving significant improvements in system efficiency and scalability.
            </p>

            <p className='text-lg md:text-xl mt-8'>
                Outside of tech, I’m a passionate Manchester United fan and love diving into books—whether it's the latest tech reads or just something that sparks my curiosity. My journey has been all about learning and growing through challenges, and I'm excited to connect with others who are equally enthusiastic about technology and making an impact. Let’s chat about how we can work together on exciting projects and create something amazing!
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
