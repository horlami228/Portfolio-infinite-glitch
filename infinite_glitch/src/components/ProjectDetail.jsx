import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolios } from './Portfolio'; // Adjust the path as necessary
import './ProjectDetail.css';
import { IoArrowBack } from 'react-icons/io5'
import { FaGithub } from 'react-icons/fa'; 

function ProjectDetail() {
  let { id } = useParams();
  const project = portfolios.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white w-full min-h-screen pt-20">
      <div className="mx-auto p-10 w-full max-w-screen-lg flex flex-col justify-center h-full">


       <div className="flex items-center mb-10">
          {/* Back button */}
          <button onClick={() => window.history.back()} className="back-button flex items-center text-blue-500 font-semibold text-lg md:text-md sm:text-sm">
            <IoArrowBack className="mr-2" /> Back
          </button>
          <p className="text-4xl inline border-b-4 border-gray-600 font-bold ml-5">{project.title}</p>
        </div>

        <div className="mb-6">
          <img src={project.Image_src} alt={`${project.title} project screenshot`} className="w-full object-cover h-48 md:h-64 mb-4 rounded-md shadow-lg"/>
          <p className="text-lg">{project.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
          <ul className="flex flex-wrap mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index} className='mr-2 mb-1 px-2 py-1 bg-gray-200 rounded-full'>{tech}</li>
            ))}
          </ul>
        </div>


      {/* Conditionally render Diagrams and Documentation section */}
        {(project.architectureDiagram || project.systemDesignDiagram || project.googleSlides || project.designDocument) && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Diagrams and Documentation</h2>
            <ul className="list-disc list-inside">
              {project.architectureDiagram && (
                <li><a href={project.architectureDiagram} target="_blank" rel="noopener noreferrer" className="list-item-link">Database Architectural Diagram</a></li>
              )}
              {project.systemDesignDiagram && (
                <li><a href={project.systemDesignDiagram} target="_blank" rel="noopener noreferrer" className="list-item-link">System Design Diagram</a></li>
              )}
              {project.googleSlides && (
                <li><a href={project.googleSlides} target="_blank" rel="noopener noreferrer" className="list-item-link">Google Slides Presentation</a></li>
              )}
              {project.designDocument && (
                <li><a href={project.designDocument} target="_blank" rel="noopener noreferrer" className="list-item-link">Design Document</a></li>
              )}
            </ul>
          </div>
        )}


        {/* Conditionally render Additional Links section */}
      {(project.testFolder || project.SwaggerApi) && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Additional Links</h2>
            <ul className="list-disc list-inside">
              {project.testFolder && (
                <li><a href={project.testFolder} target="_blank" rel="noopener noreferrer" className="list-item-link">Test Folder on GitHub</a></li>
              )}
              {project.SwaggerApi && (
                <li><a href={project.SwaggerApi} target="_blank" rel="noopener noreferrer" className="list-item-link">Swagger API Page</a></li>
              )}
            </ul>
          </div>
        )}



      {/* Conditionally render Testing Methodologies section */}
        {project.testing && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Testing Methodologies</h2>
            <p>{project.testing}</p>
          </div>
        )}

        {/* Conditionally render Performance Metrics section */}
        {project.performanceMetrics && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Performance Metrics</h2>
            <p>{project.performanceMetrics}</p>
          </div>
        )}

        {/* Conditionally render Security Measures section */}
        {project.securityMeasures && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Security Measures</h2>
            <p>{project.securityMeasures}</p>
          </div>
        )}

        {/* Conditionally render Scalability Strategies section */}
        {project.scalabilityStrategies && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Scalability Strategies</h2>
            <p>{project.scalabilityStrategies}</p>
          </div>
        )}

        {/* Conditionally render Lessons Learned section */}
        {project.lessonsLearned && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Lessons Learned</h2>
            <p>{project.lessonsLearned}</p>
          </div>
        )}

        {/* Conditionally render Future Enhancements section */}
        {project.futureEnhancements && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Future Enhancements</h2>
            <p>{project.futureEnhancements}</p>
          </div>
        )}



      <div className="button-container flex space-x-4">
        {project.Livelink && (
          <a href={project.Livelink} target='_blank' rel='noopener noreferrer'>
            <button className="px-6 py-3 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-md hover:bg-opacity-90">
              Live/Demo
            </button>
          </a>
        )}
        {project.GithubLink && (
          <a href={project.GithubLink} target='_blank' rel='noopener noreferrer'>
            <button className="bg-gradient-github text-white flex items-center justify-center">
              <FaGithub size={20} /> {/* GitHub icon */}
            </button>
          </a>
        )}
      </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
