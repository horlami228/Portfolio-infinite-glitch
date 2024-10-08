import React, {useEffect, useRef} from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import HeroPic from '../assets/images/olamilekan2.jpg';
import { Link } from 'react-scroll';
import { Typed } from 'react-typed';
import './Home.css';

function Home() {
  const isSmallScreen = window.innerWidth < 768;

  const typedRef = useRef(null);
  const strings = [
    '🚀 Back-End Developer with a passion for innovation',
    '🔍 Tech Enthusiast always exploring the latest trends',
    '💡 Problem Solver turning ideas into reality',
    '👨‍💻 Code Craftsman with a knack for clean, efficient solutions',
    '🌟 Dedicated to building the future of technology',
    '⚽ Fan of Manchester United, always cheering for the Red Devils!',
    '🌍 Embracing a lifestyle of continuous learning and growth',
    '🏃 Fitness enthusiast who loves staying active and healthy',
    '🎨 Passionate about design and aesthetics, with an eye for detail',
    '📚 Avid reader who enjoys delving into tech and fiction alike',
    '🌱 Believer in sustainability and making a positive impact on the world',
    '💻 Always coding with a cup of coffee by my side ☕',
    '🎬 Lover of movies and series, always up for a Netflix binge',
  ];

    // Function to calculate speed based on string length
    const calculateSpeed = (length) => {
      // Adjust these multipliers as needed
      const baseTypeSpeed = 50;
      const baseBackSpeed = 30;
      const lengthFactor = 30; // Increase for more sensitivity to length
  
      return {
        typeSpeed: baseTypeSpeed - Math.min(length, 100) / lengthFactor,
        backSpeed: baseBackSpeed - Math.min(length, 100) / lengthFactor
      };
    };

  useEffect(() => {
    if (typedRef.current) {
      // Find the length of the longest string
      const maxLength = Math.max(...strings.map(str => str.length));
      
      // Calculate speeds based on the maximum length
      const { typeSpeed, backSpeed } = calculateSpeed(maxLength);

      const typed = new Typed(typedRef.current, {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        // fadeOut: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        fadeOutDelay: 500,
        attr: null,
        bindInputFocusEvents: false,

      });

      return () => {
        typed.destroy();
      };
    }
  }, [strings]);

  return (
    
    <div name="home" className="min-h-screen w-full bg-white flex justify-center items-center px-4 pt-16">
      
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-screen-lg">
        <div className='flex flex-col justify-center items-center text-center h-full'>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 md:mb-7 mt-12 md:mt-0">
            I'm Akintola Olamilekan
          </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Backend Developer specializing in creating secure and high-performing web applications
          </h3>
          <p className="text-gray-900 py-4 max-w-md text-lg md:text-xl">
            I design efficient APIs, work with various frameworks, and ensure seamless frontend-backend communication.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold">
            <span ref={typedRef}></span>
          </h3>
          <p className="text-gray-900 py-4 max-w-md text-xl md:text-2xl">
            I'm dedicated to materializing digital ideas.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="portfolio" // Link to the "portfolio" section
              smooth={true}
              duration={500}
              offset={-70} // Adjust based on your header height
              className="group flex justify-center items-center w-fit rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack py-2 px-3 text-white font-medium cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <IoIosArrowForward size={25} />
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="image-container mt-10 md:mt-0 md:ml-10 w-full max-w-xs md:max-w-sm flex justify-center">
          <img src={HeroPic} alt="Akintola Olamilekan" 
          className="rounded-lg shadow-lg object-cover w-full h-auto" 
          style={{
            borderRadius: '50px',
            width: '135%',
            maxWidth: isSmallScreen ? '100%' : '999px',
            height: 'auto'
          }}/>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div name="home" className="min-h-screen w-full bg-white flex flex-col md:flex-row justify-center items-center px-4 py-12">
  //     <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-screen-lg space-y-8 md:space-y-0 md:space-x-10">
  //       <div className='flex flex-col justify-center items-center text-center md:text-left'>
  //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
  //           I'm Akintola Olamilekan
  //         </h1>
  //         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
  //           Backend Developer specializing in creating secure and high-performing web applications
  //         </h2>
  //         <p className="text-gray-700 py-4 max-w-md text-lg md:text-xl mb-6">
  //           I design efficient APIs, work with various frameworks, and ensure seamless frontend-backend communication.
  //         </p>
  //         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
  //           <span ref={typedRef}></span>
  //         </h2>
  //         <p className="text-gray-700 py-4 max-w-md text-lg md:text-xl mb-8">
  //           I'm dedicated to materializing digital ideas.
  //         </p>
  //         <motion.div
  //           whileHover={{ scale: 1.05 }}
  //           whileTap={{ scale: 0.95 }}
  //           transition={{ duration: 0.3 }}
  //         >
  //           <Link
  //             to="portfolio" // Link to the "portfolio" section
  //             smooth={true}
  //             duration={500}
  //             offset={-70} // Adjust based on your header height
  //             className="group flex justify-center items-center w-fit rounded-md bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-4 text-white font-medium cursor-pointer"
  //           >
  //             Portfolio
  //             <span className="group-hover:rotate-90 duration-300 ml-2">
  //               <IoIosArrowForward size={25} />
  //             </span>
  //           </Link>
  //         </motion.div>
  //       </div>
  //       <div className="w-full max-w-xs md:max-w-md flex justify-center">
  //         <img src={HeroPic} alt="Akintola Olamilekan" 
  //           className="rounded-lg shadow-lg object-cover w-full h-auto" 
  //           style={{ borderRadius: '15px' }}/>
  //       </div>
  //     </div>
  //   </div>
  // );

}

export default Home;
