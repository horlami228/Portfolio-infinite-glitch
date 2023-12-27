import React from 'react';
import infinite_glitch from '../assets/images/infiniteglitch.png';

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      Image_src: infinite_glitch,
      title: "Infinite Glitch",
      description: "Welcome to my digital realm! This portfolio is not just a collection of code; it's a journey through the landscapes of my backend development prowess. Crafted with React and styled with Tailwind CSS, this static and responsive website showcases and encapsulates the essence of who I am as a backend developer.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Github", "Vercel"],
      Livelink: "portfolio-infinite-glitch.vercel.app",
      GithubLink: "https://github.com/horlami228/Portfolio-infinite-glitch"
    }

  ]
  
  return (
    <div name="portfolio" className="bg-white w-full mt-10">
      <div className="mx-auto p-10 w-full max-w-screen-lg flex flex-col justify-center h-full">
        <div className='mb-10'>
          <p className="text-4xl inline border-b-4 border-b-gray-600 font-bold">Portfolio</p>
        </div>

        <div id='image' className="grid sm:grid-cols-1 md:grid-cols-2 
        gap-8 mt-20 px-5 sm:px-0 cursor-pointer">
          
          
            {
              portfolios.map(({id, Image_src, title, description, technologies, Livelink, GithubLink}) => (
              
              <div className="pb-20" key={id}>
                <div className="overflow-hidden max-w-full shadow-md shadow-gray-400 rounded-lg md:hover:scale-105 duration-200">
                  
                  <div>
                     <img src={Image_src} alt="" className="rounded-t-lg w-full"/>
                  </div>

                <div className="flex justify-center ">
                  <a href={Livelink} target='_blank' rel='noreferrer'>
                  <button className=" w-24 px-3 py-2 mr-10 mb-4 text-1xl hover:text-gray-500 text-white
                  rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack">Live</button>
                  </a>
                  
                  <a href={GithubLink} target='_blank' rel='noreferrer'>
                  <button className=" w-24 px-3 py-2 mb-4 text-1xl hover:text-gray-500 text-white
                  rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack">Code</button>
                  </a>
                </div>

              </div>  

                <div className="p-2 text-left flex flex-col mt-5">
                    <p className='text-4xl font-bold mb-4'>{title}</p>
                    <p className="mb-4">
                    {description}
                    </p>
                  <div>
                    <p className="text-2xl font-semibold"> Technologies used: </p>
                   
                    <ul className="flex  flex-wrap">
                      {technologies.map(function (element, index) {
                        return <li className='px-1' key={index}> {`${element}${index < technologies.length - 1 ? ',' : ''}`} </li>
                      })}
                    </ul>

                  </div>
                </div>
              </div>
           
              ))
            }

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
