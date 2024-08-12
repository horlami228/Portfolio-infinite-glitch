import React from 'react';
import infinite_glitch from '../assets/images/infiniteglitch.png';
import veenote from '../assets/images/veenote.png';
import post_scheduler from '../assets/images/post_scheduler.png';
import shepherds from '../assets/images/shepherds_field.png';
import base_converter from '../assets/images/base_converter.png';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; 
import './Portfolio.css'; // Ensure you import the CSS file

export const portfolios = [
  {
    id: 1,
    Image_src: shepherds,
    title: "Shepherd's Field",
    description: "Shepherd's Field is a custom referral program application that I developed as the sole backend developer, in collaboration with a frontend engineer. This private project features a tiered subscription system with Gold, Silver, and Platinum levels, where users earn 85% of the referral fee based on their level and the referee’s subscription level. The platform supports instant withdrawals and is actively used in a real-world scenario. While the source code is not publicly available, the API documentation can be accessed via Swagger for review.",
    technologies: ["Node.js", "React", "Express.js", "PostgreSQL", "Sequelize", "Third-party APIs", "RabbitMQ", "Swagger",  "Git & Github", "Heroku"],
    Livelink: "https://www.shepherdsfieldpartners.com",
    tags: ["Referral Program", "Subscription Management", "Backend Development", "Tiered Rewards", "Custom Solution", "Client Project", "collaboration" ],
    date: "May 2024",
    SwaggerApi: "https://likeministry-263a5ceda564.herokuapp.com/api-docs",
  },
  
  {
    id: 2,
    Image_src: veenote,
    title: "Veenote",
    description: "Veenote is a voice enabled note taking application; it allows users to take notes by speaking into their microphones, it transcribes the speech to text and saves the note to the database. It was built with Next.js, Express, MongoDB and Amazon Transcribe.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "Mongoose", "Amazon Transcribe", "Web Socket", "Git & Github"],
    Livelink: "https://drive.google.com/file/d/1IuGVNYiMDrU0FATsIwCgTQieVIBOf1Zo/view?usp=sharing",
    GithubLink: "https://github.com/horlami228/veenote",
    tags: ["Web App", "Voice Recognition", "Note Taking", "Full Stack Development"],
    date: "January 2023",
    architectureDiagram: "https://drive.google.com/file/d/1qrs_RIHUuQMIYozRtQ0ZMEY9yAoMcAfU/view?usp=sharing",
    googleSlides: "https://docs.google.com/presentation/d/1x4Ab_Js6_lC_bUoCV0f-VkBmVHJT_QU1swsIvl7QIiY/edit?usp=sharing",
    designDocument: "https://drive.google.com/file/d/12iELx4aHiCI3zTJnDpe1f8MMb2eEUGES/view?usp=sharing",
    SwaggerApi: "https://app.swaggerhub.com/apis/AKINTOLAOLAMILEKAN51/Veenote/1.0.0"
  },
  {
    id: 3,
    Image_src: post_scheduler,
    title: "Post Scheduler",
    description: "An automated post scheduler that leverages LinkedIn and Twitter APIs to publish updates. Its standout feature is the integration of generative AI to create tailored post captions for each platform. Built with Node.js, TypeScript, and Express.js, this tool streamlines social media management with intelligent content generation.",
    technologies: ["Node.js", "TypeScript", "Prisma", "MongoDB", "Google Gemini", "Express.js", "Git & Github", "Heroku"],
    Livelink: "https://cheduler-a18b33ae5de6.herokuapp.com",
    GithubLink: "https://github.com/horlami228/Post-scheduler",
    SwaggerApi: "https://cheduler-a18b33ae5de6.herokuapp.com/api-docs",
    tags: ["Web App", "Social Media", "automation", "AI", "Backend Development"],
    date: "July 2024",
  },
  {
    id: 4,
    Image_src: infinite_glitch,
    title: "Infinite Glitch",
    description: "Welcome to my digital realm! This portfolio is not just a collection of code; it's a journey through the landscapes of my backend development prowess. Crafted with React and styled with Tailwind CSS, this static and responsive website showcases and encapsulates the essence of who I am as a backend developer.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git & Github", "Vercel"],
    Livelink: "https://portfolio-infinite-glitch.vercel.app",
    GithubLink: "https://github.com/horlami228/Portfolio-infinite-glitch",
    tags: ["Portfolio", "Static Site", "Responsive Design", "Frontend Development"],
    date: "March 2024",
  },
  {
    id: 5,
    Image_src: base_converter,
    title: "Base Converter",
    description: "A command-line utility tool for converting numbers between various bases including binary, octal, decimal, and hexadecimal. Built using C programming language, this tool provides a straightforward way to perform base conversions directly from your terminal. For installation and usage instructions, please refer to the README file provided. ",
    technologies: ["C Programming Language"],
    tags: ["Command-line tool", "low-level programming", "linux"],
    GithubLink: "https://github.com/horlami228/Base_converter",
    date: "November 2022"
  },
];

function Portfolio() {
  return (
    <div name="portfolio" className="bg-white w-full min-h-screen pt-20">
      <div className="mx-auto p-10 w-full max-w-screen-lg flex flex-col justify-center h-full">
        <div className='mb-10'>
          <p className="text-4xl inline border-b-4 border-b-gray-600 font-bold">Portfolio</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20 px-5 sm:px-0 project-container">
        
          {portfolios.map(({ id, Image_src, title, description, technologies, Livelink, GithubLink, tags, date }) => (
            <div className="portfolio-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col" key={id}>
              <Link to={`/portfolio/${id}`} className="relative">
                <img src={Image_src} alt={`${title} project screenshot`} className="w-full object-cover h-48 md:h-64" />
                <div className="overlay">
                  <div className="overlay-text">Click to view more details</div>
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <p className='text-2xl md:text-3xl font-bold mb-2'>{title}</p>
                <p className="flex-grow">{description}</p>
                <div className="text-lg font-semibold mt-4">Technologies used:</div>
                <ul className="flex flex-wrap mb-4">
                  {technologies.map((tech, index) => (
                    <li key={index} className='mr-2 mb-1 px-2 py-1 bg-gray-200 rounded-full'>{tech}</li>
                  ))}
                </ul>
                <div className="text-sm text-gray-600 mb-2">Tags: {tags.join(", ")}</div>
                <div className="text-sm text-gray-600 mb-2">Date: {date}</div>
                <div className="flex justify-between p-2 mt-auto space-x-4">
                  {Livelink && (
                    <a href={Livelink} target='_blank' rel='noopener noreferrer'>
                      <button className="px-6 py-3 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-md hover:bg-opacity-90 w-full">Live/Demo</button>
                    </a>
                  )}
                 {GithubLink && (
                    <a href={GithubLink} target='_blank' rel='noopener noreferrer'>
                      <button className="bg-gradient-github text-white flex items-center justify-center">
                        <FaGithub size={20} /> {/* GitHub icon */}
                      </button>
                    </a>
                  )}
                </div>
                <button className="details-button" onClick={() => window.location.href = `/portfolio/${id}`}>View Details</button>
              </div>
            </div>
            
          ))}
        
        </div>
      </div>
      
    </div>
  );
}

export default Portfolio;
