import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import HeroPic from '../assets/images/olamilekan2.jpg';
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-white flex justify-center items-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-screen-lg">
        <div className='flex flex-col justify-center items-center text-center h-full'>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 md:mb-7 mt-12 md:mt-0">
            I'm Akintola Olamilekan
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Back-End Developer
          </h2>
          <p className="text-gray-800 py-4 max-w-md text-xl md:text-2xl">
            I'm dedicated to materializing digital ideas.
          </p>
          <Link to='portfolio' smooth duration={500} className="group flex justify-center items-center w-fit rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack py-2 px-3 text-white font-medium cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300 ml-2">
              <IoIosArrowForward size={25}/>
            </span>
          </Link>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 w-full max-w-xs md:max-w-sm flex justify-center">
          <img src={HeroPic} alt="Akintola Olamilekan" 
          className="rounded-lg shadow-lg object-cover w-full h-auto" 
          style={{ borderRadius: '50px' }}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
