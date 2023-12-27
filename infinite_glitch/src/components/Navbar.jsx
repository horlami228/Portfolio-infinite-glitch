import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

function Navbar() {
  // This component is for the Navbar

  const [nav, setNav] = useState(false);
  console.log(nav)

  const menuItems = [
    {
      id: 1,
      item: "home",
      link: "#"
    },
    {
      id: 2,
      item: "about",
      link: "#"
    },
    {
      id: 3,
      item: "portfolio",
      link: "#"
    },
    {
      id: 4,
      item: "experience",
      link: "#"
    },
    {
      id: 5,
      item: "contact",
      link: "#"
    }
  ]
  
  return (

      <div className="flex justify-between 
      items-center w-full h-20 fixed mx-auto pr-5 z-10 bg-white">
          {/* Logo */}
        <div>
          <Link to='home' smooth duration={500} className="text-5xl font-signature pl-10 cursor-pointer">
            infinite glitch
          </Link>
        </div>


          {/*Menu on large screen */}
        <ul className="hidden md:flex space-x-5">
          {menuItems.map(({id, item, link}) => (
            <li key={id} className="capitalize font-medium px-4 text-infiniteBlack
             hover:text-infiniteDarkGray hover:scale-105 duration-200 cursor-pointer">
              <Link to={item} smooth duration={500}>{item}</Link>
            </li>
          ))}
        </ul>

          {/* Menu on small screen*/}
        <div tabIndex={0}  style={{ outline: 'none' }} onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-infiniteBlack">
          {nav ? <FaTimes size={35} style={{ outline: 'none' }} /> : <FaBars size={35} style={{ outline: 'none' }}/>}
        </div>

        {nav && (
        <ul className="flex flex-col justify-center items-start
          absolute top-0 left-0 w-full 
          h-screen bg-gradient-to-b from-white to-infiniteGray
          ">
          {menuItems.map(({id, item, link}) => (
            <li key={id} className="capitalize text-3xl pl-10 my-4 text-infiniteBlack cursor-pointer
            ">
              <Link onClick={() => setNav(!nav)} to={item} smooth duration={500}>{item}</Link>
            </li>
          ))}
        </ul>
        )}

      </div>

  )
}

export default Navbar