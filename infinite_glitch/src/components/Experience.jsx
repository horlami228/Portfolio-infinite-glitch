import React from 'react';

function Experience() {
  const jobExperiences = [
    {
      id: 1,
      company: "Lagos State Ministry Of Housing, Nigeria",
      role: "Backend Developer/Database Administrator",
      duration: "February 2023 – March 2024",
      responsibilities: [
        "Utilized test-driven development methodology to write unit tests for critical system components, leading to a 40% reduction in production defects post-launch.",
        "Improved database indexing and caching mechanisms to reduce query times by 40%, resulting in a 50% decrease in overall system response latency.",
        "Collaborated with cross-functional teams to integrate automated testing processes into the CI/CD pipeline, resulting in a 60% faster feedback loop for developers.",
        "Enacted database backup and recovery procedures to ensure data integrity and minimize the risk of data loss, resulting in a 30% reduction in potential downtime during system failure."
      ]
    },
    {
      id: 2,
      company: "Samto Tech Nigeria",
      role: "Junior Database Engineer",
      duration: "November 2021 – August 2022",
      responsibilities: [
        "Worked closely with teams from various departments on database design and modeling projects, contributing to the successful implementation of a new database structure that boosted data retrieval speed by 30%.",
        "Executed data import and transformation processes for a variety of databases, resulting in a 20% increase in data accuracy and efficiency levels.",
        "Implemented data cleansing and normalization processes across multiple database systems, resulting in a 20% reduction in duplicate records and improving data accuracy by 15%.",
        "Assisted in the implementation of database optimization techniques under the guidance of senior engineers, contributing to a 25% improvement in system efficiency and performance."
      ]
    },
    {
      id: 3,
      company: "LUTA",
      role: "Backend Development Intern",
      duration: "March 2021 – May 2021",
      responsibilities: [
        "Assisted in developing and maintaining RESTful APIs that serve as the backbone for frontend applications.",
        "Participated in the routine maintenance of database systems and implemented performance-enhancing measures.",
        "Supported the integration of new technologies into the existing backend framework to improve system scalability and efficiency.",
        "Engaged in code review processes with senior developers to learn best practices and ensure high-quality code standards."
      ]
    }
  ];

  return (
    <div name="experience" className="bg-white w-full mx-auto p-4 sm:p-10 mt-10">
      <div className="mx-auto max-w-screen-lg">
        <div className='mb-8 sm:mb-20'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-gray-600">Work Experience</h2>
        </div>
        <div>
          {jobExperiences.map(({ id, company, role, duration, responsibilities }) => (
            <div key={id} className="mb-4 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold">{role} at {company}</h3>
              <p className="text-sm sm:text-md text-gray-600">{duration}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-800">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm sm:text-base">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
