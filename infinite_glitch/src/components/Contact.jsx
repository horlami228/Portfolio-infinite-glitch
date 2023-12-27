import React from 'react'

function Contact() {
  return (
    <div name='contact' className="bg-white w-full mt-24">
        <div className="flex flex-col justify-center 
        mx-auto max-w-screen-lg w-full h-full p-10 mt-20">
            <div className='pb-8'>
                <p className='text-4xl inline border-b-4 
                border-gray-600 font-bold'>Contact</p>
                <p className='py-6'>Get in touch with me</p>
            </div>
            
            <div className='flex justify-center items-center'>
              <form action="https://getform.io/f/70a17dac-4a4a-4543-9150-63f00510d44e" method="post" className="flex flex-col w-full md:w-1/2">
                <input type="text" name='name'
                placeholder='Enter Your Name' className="p-2 border-2 rounded-md text-black focus:outline-none"/>

                <input type="text" name='email'
                placeholder='Enter Your Email' className=" my-5 p-2 border-2 rounded-md text-black focus:outline-none"/>

                <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your Message'
                className="p-2 border-2 rounded-md text-black focus:outline-none"></textarea>

                <button className="
                  mx-auto rounded-md bg-gradient-to-r from-infiniteBlue to-infiniteBlack
                  py-3 px-6 my-8 text-white font-medium cursor-pointer items-center hover:scale-110 duration-300">
                  Let's Talk
                </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact