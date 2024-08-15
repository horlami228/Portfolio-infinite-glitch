import React from 'react';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "B.sc Marketing",
      issuer: "University of Ilorin",
      description: "Bachelor's degree in Marketing, with a focus on consumer behavior, market research, and strategic marketing planning."
    },
    {
      id: 2,
      title: "Certified Full-Stack Software Engineer",
      issuer: "ALX_SE NIGERIA",
      description: "Certification that validates proficiency in full-stack software development, including front-end and back-end technologies.",
      verificationLink: "https://intranet.alxswe.com/certificates/TBRLSPE23m"
    },
    {
      id: 3,
      title: "HNG Internship Certificate",
      issuer: "HNG Internship",
      description: "Certificate of completion for the HNG Internship program up to stage 5, which focused on real-world software development practices.",
      verificationLink: "https://certgo.app/c-05adeee3"
    }
  ];

  return (
    <div name="certifications" className="bg-white w-full min-h-screen pt-20 pb-20 flex items-center px-4 sm:px-0">
      <div className="mx-auto max-w-screen-lg">
        <div className='mb-10'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 border-gray-600">Education/Certifications</h2>
        </div>
        <div className="space-y-8">
          {certifications.map(({ id, title, issuer, description, verificationLink }) => (
            <div key={id}>
              <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
              <p className="text-sm sm:text-md text-gray-600">{issuer}</p>
              <p className="mt-2 text-gray-800">{description}</p>
              {verificationLink && verificationLink.trim() !== '' && (
                <p className="mt-2 text-blue-500">
                  <a href={verificationLink} target="_blank" rel="noopener noreferrer">Verify Certificate</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
