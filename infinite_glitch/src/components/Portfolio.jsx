import React from 'react';
import infinite_glitch from '../assets/images/infiniteglitch.png';
import veenote from '../assets/images/veenote.png';

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      Image_src: veenote,
      title: "Veenote",
      description: "Veenote is a voice enabled note taking application; it allows users to take notes by speaking into their microphones, it transcribes the speech to text and saves the note to the database. It was built with Next.js, Express, MongoDB and Amazon Transcribe.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Amazon Transcribe", "Git & Github"],
      Livelink: "https://drive.google.com/file/d/1IuGVNYiMDrU0FATsIwCgTQieVIBOf1Zo/view?usp=sharing",
      GithubLink: "https://github.com/horlami228/veenote",
    },
    {
      id: 2,
      Image_src: infinite_glitch,
      title: "Infinite Glitch",
      description: "Welcome to my digital realm! This portfolio is not just a collection of code; it's a journey through the landscapes of my backend development prowess. Crafted with React and styled with Tailwind CSS, this static and responsive website showcases and encapsulates the essence of who I am as a backend developer.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git & Github", "Vercel"],
      Livelink: "https://portfolio-infinite-glitch.vercel.app",
      GithubLink: "https://github.com/horlami228/Portfolio-infinite-glitch"
    },
  ];

  return (
    <div name="portfolio" className="bg-white w-full mt-10">
      <div className="mx-auto p-10 w-full max-w-screen-lg flex flex-col justify-center h-full">
        <div className='mb-10'>
          <p className="text-4xl inline border-b-4 border-b-gray-600 font-bold">Portfolio</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-5 sm:px-0">
          {portfolios.map(({ id, Image_src, title, description, technologies, Livelink, GithubLink }) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col" key={id}>
              <img src={Image_src} alt={`${title} project screenshot`} className="w-full object-cover h-48 md:h-64"/>
              <div className="p-4 flex flex-col flex-grow">
                <p className='text-2xl md:text-3xl font-bold mb-2'>{title}</p>
                <p className="flex-grow">{description}</p>
                <div className="text-lg font-semibold mt-4">Technologies used:</div>
                <ul className="flex flex-wrap mb-4">
                  {technologies.map((tech, index) => (
                    <li key={index} className='mr-2 mb-1 px-2 py-1 bg-gray-200 rounded-full'>{tech}</li>
                  ))}
                </ul>
                <div className="flex justify-between p-2 mt-auto space-x-4">
                  <a href={Livelink} target='_blank' rel='noopener noreferrer'>
                    <button className="px-6 py-3 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-md hover:bg-opacity-90 w-full">Live/Demo</button>
                  </a>
                  <a href={GithubLink} target='_blank' rel='noopener noreferrer'>
                    <button className="px-6 py-3 text-sm text-white bg-gradient-to-r from-green-500 to-green-800 rounded-md hover:bg-opacity-90 w-full">Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
