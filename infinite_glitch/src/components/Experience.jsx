import React from 'react';

function Experience() {
  const jobExperiences = [
    {
      id: 1,
      company: "Shepherd's Field",
      role: "Backend Developer",
      duration: "May 2024 - Present",
      technologies: [
        "JavaScript/TypeScript", 
        "Express.js", 
        "PostgreSQL", 
        "Sequelize", 
        "RabbitMQ", 
        "Heroku", 
        "Git/GitHub",
        "Payment Gateway Integration", 
        "Location API", 
        "Email Service API"
      ],
      description: "Shepherd's Field is a real-world project focused on creating a referral program web application with real finance integration for both payments and payouts. I was responsible for designing and developing the backend architecture, collaborating closely with a project manager, front-end developer, and the business that owns the project.",
      challenges: [
        "Integrating the payment gateway service for the first time, which required understanding callback and webhook mechanisms. Successfully implemented these to ensure smooth transaction handling.",
        "Developing a sophisticated referral and subscription reward system with varying percentages for rewards. The client’s requirements involved complex logic to ensure no loopholes in the reward distribution process. This included breaking down the problem into manageable pieces and integrating them into a robust system."
      ],
      solutions: [
        "Detailed API documentation to assist the front-end team in utilizing backend services effectively.",
        "Implemented a modular approach to develop and test the complex reward logic. This involved breaking down the reward system into smaller, manageable components, and integrating them to create a seamless, sophisticated reward system. Rigorous testing was conducted to identify and eliminate potential loopholes, ensuring the system's reliability and security."
      ],
      keyContributions: [
        "Developed a robust and scalable backend architecture using Express.js, PostgreSQL, and Sequelize, ensuring system reliability and performance.",
        "Integrated RabbitMQ for efficient message queuing, enhancing the system’s ability to manage concurrent tasks.",
        "Set up CI/CD pipelines on Heroku for streamlined deployment processes and continuous delivery.",
        "Configured GitHub Actions to automate testing, maintaining code quality by ensuring all tests pass before merging.",
        "Ensured code quality and maintainability through consistent naming conventions, comprehensive unit testing, and code styling with ESLint.",
        "Delivered clear and concise API documentation and well-commented code to facilitate future development and collaboration."
      ],
      impact: "My contributions were integral to bringing the client’s vision to life, enabling the application to achieve its goals through well-structured code and effective team collaboration."
    },
    {
      id: 2,
      company: "HNG Internship",
      role: "Backend Developer Intern",
      duration: "July 2024 - August 2024",
      technologies: [
        "JavaScript/TypeScript", 
        "NestJS", 
        "Git/GitHub", 
        "CI/CD"
      ],
      description: "During my time at the HNG Internship, I participated in the backend track, where I worked on a remote bingo application project. Despite not completing the internship, the experience was invaluable in developing my skills and understanding of real-world development practices.",
      challenges: [
        "Learning a new framework (NestJS) from scratch in a short period and applying it to the project.",
        "Adhering to strict GitHub collaboration guidelines, including creating detailed issues and following pull request conventions."
      ],
      solutions: [
        "Spent three days studying NestJS fundamentals through documentation, tutorials, and practice, which allowed me to confidently use it in the project.",
        "Successfully worked on the update job post endpoint for the bingo application, ensuring all CI/CD tests passed before merging."
      ],
      keyContributions: [
        "Explored and utilized NestJS for the project, leading to a deeper understanding and ongoing use of the framework.",
        "Implemented the update job post endpoint while adhering to best practices for code quality and collaboration.",
        "Gained valuable experience in handling tickets from the project manager and working in a collaborative remote environment."
      ],
      impact: "Although I did not complete the internship, the skills and experiences gained were instrumental in shaping my approach to backend development and GitHub collaboration."
    },
    {
      id: 3,
      company: "Lagos State Real Estate Regulatory Authority (LASRERA)",
      role: "Compliance and Enforcement Officer",
      duration: "May 2023 – April 2024",
      description: "As a Compliance and Enforcement Officer at LASRERA, I was responsible for ensuring adherence to real estate regulations and standards within Lagos State. My role involved conducting fieldwork to connect with real estate practitioners, monitoring compliance, and recording data to support regulatory activities.",
      responsibilities: [
        "Conducted field visits to engage with real estate practitioners and assess compliance with state regulations.",
        "Assisted in the development and implementation of regulatory policies and procedures to enhance industry standards.",
        "Recorded and analyzed data in Excel to support compliance monitoring and reporting efforts.",
        "Collaborated with team members to address non-compliance issues and provide recommendations for corrective actions."
      ]
    }
    
    
  ];

  return (
    <div name="experience" className="min-h-screen pt-24 bg-gray-100 w-full px-4 sm:px-0">
      <div className="mx-auto max-w-screen-lg">
        <div className='mb-8 sm:mb-16'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-gray-600 pb-2 mb-4">
            Work Experience
          </h2>
        </div>
        <div>
          {jobExperiences.map(({ id, company, role, duration, technologies, description, challenges, solutions, keyContributions, impact, responsibilities }) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{role} at {company}</h3>
              <p className="text-sm sm:text-md text-gray-600 mb-4">{duration}</p>
              {technologies && (
                <p className="text-sm sm:text-md text-gray-800 mb-4"><strong>Technologies:</strong> {technologies.join(', ')}</p>
              )}
              {description && (
                <p className="text-sm sm:text-md text-gray-800 mb-4"><strong>Description:</strong> {description}</p>
              )}
              {challenges && solutions && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Challenges & Solutions</h4>
                  <ul className="list-disc pl-5 text-gray-800 mb-2">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="text-sm sm:text-base mb-1"><strong>Challenge:</strong> {challenge}</li>
                    ))}
                    {solutions.map((solution, index) => (
                      <li key={index} className="text-sm sm:text-base mb-1"><strong>Solution:</strong> {solution}</li>
                    ))}
                  </ul>
                </div>
              )}
              {keyContributions && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Key Contributions</h4>
                  <ul className="list-disc pl-5 text-gray-800 mb-2">
                    {keyContributions.map((contribution, index) => (
                      <li key={index} className="text-sm sm:text-base mb-1">{contribution}</li>
                    ))}
                  </ul>
                </div>
              )}
              {impact && (
                <p className="text-sm sm:text-md text-gray-800 mb-4"><strong>Impact:</strong> {impact}</p>
              )}
              {responsibilities && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 text-gray-800">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-sm sm:text-base mb-1">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
