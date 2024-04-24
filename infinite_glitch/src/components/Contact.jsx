import React from 'react';

function Contact() {
  return (
    <div name='contact' className="bg-white w-full mt-10">
      <div className="flex flex-col justify-center mx-auto max-w-screen-lg w-full h-full p-10 mt-20">
        <div className='pb-8'>
          <p className='text-4xl inline border-b-4 border-gray-600 font-bold'>Contact</p>
          <p className='py-6'>Get in touch with me</p>
        </div>
        
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/70a17dac-4a4a-4543-9150-63f00510d44e" method="post" className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" name='name' id="name"
            placeholder='Enter Your Name' className="p-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name='email' id="email"
            placeholder='Enter Your Email' className="my-5 p-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"
            placeholder='Enter your Message'
            className="p-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            <button type="submit" className="
              mx-auto rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack
              py-3 px-6 my-8 text-white font-medium cursor-pointer items-center hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
