import React from 'react'
import Img4 from '../Image/img4.jpg'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
   <div className="contact-section h-[100vh] bg-black w-full flex">
  <div className="bg flex gap-10">
    <div className="bg-left h-full bg-zinc-800 ">
      <div className="box h-[100vh] w-[24vw] border-t-[3vw] border-b-[3vw] border-zinc-900 flex flex-col justify-between items-center">
        <h1 className='text-white text-5xl font-bold pt-10 flex flex-col justify-center items-center '>Contact <span className='text-blue-500 font-bold'>Me!</span></h1>
          
            <div className="social-icons flex pt-[56vh] gap-6 pb-6 ">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-3xl hover:text-blue-500 cursor-pointer" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-3xl hover:text-gray-500 cursor-pointer" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-3xl hover:text-blue-400 cursor-pointer" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-3xl hover:text-pink-500 cursor-pointer" />
      </a>
            </div>
      </div>
    </div>
    
    <div
      className="bg-right h-[80vh] w-[70vw] pt-20"
      style={{
        backgroundImage: `url(${Img4})`,
        backgroundSize: 'fill',
        backgroundPosition: 'center',
      }}
    >
      <div className="form-section  relative   h-[70vh] w-[70vw]   flex items-center justify-center">
        {/* Contact Form */}
        <div className="relative bg-gray-500 bg-opacity-50  p-5 rounded-lg shadow-lg w-[70%]">
          

          <form className="space-y-2 text-black"
            action="https://formspree.io/f/xdkongvg"
            method="POST">
            <div className='name'>
              <label htmlFor="name" className="block text-white text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 mt-1 border text-white border-none rounded-md  bg-gray-500 bg-opacity-50  "
                placeholder="Your Name"
                name="name"
                required
              />
            </div>

            <div className='email'>
              <label htmlFor="email" className="block text-white text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-1 border text-white border-none rounded-md  bg-gray-500 bg-opacity-50 "
                placeholder="Your Email"
                name="email"
                required
              />
            </div>

            <div className='textbox'>
              <label htmlFor="message" className="block text-white text-lg font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 mt-1 border text-white border-none rounded-md  bg-gray-500 bg-opacity-50"
                placeholder="Your Message"
                required
                name="message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact
