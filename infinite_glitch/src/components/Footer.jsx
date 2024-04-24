import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const SocialLink = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} className='ml-2'/>
        </>
      ),
      href: 'https://www.linkedin.com/in/akintola-olamilekan',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} className='ml-2'/>
        </>
      ),
      href: 'https://github.com/horlami228',
    },
    {
      id: 3,
      child: (
        <>
          Twitter <FaXTwitter size={25} className='ml-2'/>
        </>
      ),
      href: 'https://twitter.com/lazy_codding',
    },
    {
      id: 4,
      child: (
        <>
          Email <MdEmail size={25} className='ml-2'/>
        </>
      ),
      href: 'mailto:akintolaolamilekan51@gmail.com',
    },
  ];

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <footer className="bg-gray-800 text-white text-center py-4 md:py-8">
      <div className="flex justify-center items-center space-x-4 md:space-x-6 px-4">
        {/* Social Media Links */}
        {SocialLink.map(({ id, child, href }) => (
          <a key={id} href={href} target='_blank' rel='noreferrer' className="hover:text-gray-300 transition-colors duration-200">
            {child}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm md:text-base">
        &copy; {currentYear} Akintola Olamilekan. All Rights Reserved. Designed by Akintola Olamilekan
      </p>
    </footer>
  );
}

export default Footer;
