import React from 'react'

function About() {
  return (
    <div name="about" className=" w-full bg-white mt-24">
        <div className=" flex flex-col 
        justify-center mx-auto max-w-screen-lg p-10 w-full h-full">
            <div className="mb-5">
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                    About
                </p>
            </div>

            <p className="text-xl mt-20">
            Greetings! I'm Akintola Olamilekan, a backend developer deeply immersed in the world of technology. 
            Despite my initial academic pursuit in Marketing, my curiosity led me to the realm of backend development, where I discovered my true calling.
            </p>

            <br />

            <p className='text-xl'>
            I embarked on my programming journey with the C language, 
            exploring its low-level intricacies and implementing personal projects focused on data structures and algorithms. 
            Transitioning to Python felt like a natural progression, 
            and I'm currently expanding my horizons with JavaScript.
            </p>

            <br />

            <p className='text-xl'>
            I specialize in backend development, leveraging frameworks like Flask and Django.
             In a collaborative project, I played a pivotal role as a backend architect, overseeing the design and implementation of the database schema. MySQL served as our chosen database management system, 
            ensuring robust relationships between tables.
            </p>

            <br />

            <p className='text-xl'>
            What fuels my enthusiasm is the process of architecting solutions that seamlessly power the backend of applications. 
            I find fulfillment in optimizing for performance and scalability,
             ensuring that technology not only works but works exceptionally well.
            </p>

            <br />

            <p className='text-xl'>
            Away from the keyboard, you'll find me passionately supporting Manchester United in football and immersing myself in the intricacies of video game worlds.

            Thank you for exploring my profile. Let's connect and explore how we can create meaningful solutions together!
            </p>
            
        </div>
    </div>
  )
}

export default About