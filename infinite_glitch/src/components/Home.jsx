import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import HeroPic from '../assets/images/HeroPhoto.png';
import {Link} from "react-scroll"


function Home() {
  return (
    <div name="home" className="h-screen w-full bg-white">
      
      <div className="items-center justify-between flex flex-col  
      h-full mx-auto max-w-screen-lg px-4 md:flex-row mr-12">
        
        <div className='flex flex-col justify-center h-full'>
        
          <h1 className="text-5xl font-bold mb-7 mt-20">
            I'm Akintola Olamilekan
          </h1>
          <h2 className="text-4xl font-semibold">
            Back-End Developer
          </h2>
          <p className="text-gray-800 py-4 max-w-md text-2xl">
          An Aspiring Backend Engineer, I'm dedicated to materializing digital ideas. 
          
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className="group flex justify-center items-center 
            w-fit rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack
             py-2 px-3 text-white font-medium cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2 ">
                <IoIosArrowForward size={25}/>
              </span>
            </Link>
          </div>

        </div>

        <div>
          <img src={HeroPic} alt="" 
          style={{height: '200px', borderRadius: '50px', width: '350px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.30)', objectFit: 'fit',
          marginRight: 'px'
          }}/>
        </div>
      </div>

    </div>
  
  )
}

export default Home
