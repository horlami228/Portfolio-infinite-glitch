// Footer.js
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
            <React.Fragment>
                LinkedIn <FaLinkedin size={25} className='ml-2'/>
            </React.Fragment> 
            ),
            href: 'https://www.linkedin.com/in/akintola-olamilekan',
        },

        {
            id: 2,
            child: (
                <React.Fragment>
                    GitHub <FaGithub size={25} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'https://github.com/horlami228',
        },

        {
            id: 3,
            child: (
                <React.Fragment>
                    Twitter <FaXTwitter size={25} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'https://twitter.com/lazy_codding',
        },

        {
            id: 4,
            child: (
                <React.Fragment>
                    Email <MdEmail size={25} className='ml-2'/> 
                </React.Fragment>
            ),
            href: 'mailto:akintolaolamilekan51@gmail.com',
        },

        {
            id: 5,
            child: (
                <React.Fragment>
                    Resume <IoDocumentSharp size={25} className='ml-2'/> 
                </React.Fragment>
            ),
            href: '/react.jpg',
            download: false
        },
    ]

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
      
    useEffect(() => {
      // Update the current year when the component mounts
      setCurrentYear(new Date().getFullYear());
    }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <footer className="bg-gray-800 text-white text-center py-8">
      <div className="flex justify-center space-x-6 w-full">
        {/* Social Media Links */}
        {SocialLink.map(({id, child, href, download}) => (
            <a key={id} href={href} download={download} target='_blank' rel='noreferrer'> {child}</a>
        ))}
      </div>

      <p className="mt-4">&copy; {currentYear} Akintola Olamilekan. All Rights Reserved. Designed by Akintola Olamilekan</p>
    </footer>
  );
}

export default Footer;
