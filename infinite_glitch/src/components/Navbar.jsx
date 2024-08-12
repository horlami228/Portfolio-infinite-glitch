import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import motion from Framer Motion
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const menuItems = [
    {
      id: 1,
      item: "home",
      link: "home"
    },
    {
      id: 2,
      item: "portfolio",
      link: "portfolio"
    },
    {
      id: 3,
      item: "experience",
      link: "experience"
    },
    {
      id: 4,
      item: "about",
      link: "about"
    },
    {
      id: 5,
      item: "certifications",
      link: "certifications"
    },
    {
      id: 6,
      item: "contact",
      link: "contact"
    }
  ];
  
  
  return (
    <div className="flex justify-between items-center w-full h-20 fixed mx-auto pr-5 z-50 bg-white mb-20"> {/* Updated z-index to 50 */}
      <div>
        <Link to='home' smooth='true' duration={500} className="text-5xl font-signature pl-10 cursor-pointer">
          infinite glitch
        </Link>
      </div>

      <ul className="hidden md:flex space-x-5">
        {menuItems.map(({ id, item, link }) => (
          <li key={id} className="capitalize font-medium px-4 text-infiniteBlack hover:text-infiniteDarkGray hover:scale-105 duration-200 cursor-pointer">
            <Link to={link} smooth='true' duration={500}>{item}</Link>
          </li>
        ))}
      </ul>

      <div tabIndex={0} style={{ outline: 'none' }} onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-infiniteBlack">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {nav ? <FaTimes size={35} style={{ outline: 'none' }} /> : <FaBars size={35} style={{ outline: 'none' }} />}
        </motion.div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-start absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-infiniteGray">
          {menuItems.map(({ id, item, link }) => (
            <li key={id} className="capitalize text-3xl pl-10 my-4 text-infiniteBlack cursor-pointer">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
