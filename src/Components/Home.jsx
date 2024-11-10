import React, { useState, useEffect } from "react";
import Img1 from "../Image/Img1.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    const [rotate, setRotate] = useState(0);
    const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
  
        // Calculate the angle for the line (rotate the line)
        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;
  
        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
  
        // Calculate the small offset for the pupil movement (move pupil)
        const offsetX = (deltaX / window.innerWidth) * 20; // Adjust 20 to control movement intensity
        const offsetY = (deltaY / window.innerHeight) * 20; // Adjust 20 to control movement intensity
  
        setPupilOffset({ x: offsetX, y: offsetY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (
    <>
       <div className="relative w-full h-screen bg-black -z-20 overflow-hidden">
       
        {/* Eyes Background */}
        <div className="eyes absolute inset-0 opacity-90 -z-10">
          {" "}
          {/* Added opacity and z-index */}
          <div className="w-full h-full overflow-hidden flex justify-center items-center">
          <div
              className="bg-img  relative w-3/4 h-3/4  bg-cover bg-center overflow-hidden "
              style={{
                backgroundImage: `url(${Img1})`,
                opacity: "0.9", // Set the background image
              }}
            >
              <div className="eyep absolute flex gap-9 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                {/* First Eye */}
                <div className="eye flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
                  <div
                    className="eyeb relative w-2/3 h-2/3 rounded-full bg-zinc-900"
                    style={{
                      transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, // Apply small movement to the pupil
                    }}
                  >
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                      }}
                      className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                </div>

                {/* Second Eye */}
                <div className="eye flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
                  <div
                    className="eyeb relative w-2/3 h-2/3 rounded-full bg-zinc-900"
                    style={{
                      transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, // Apply small movement to the pupil
                    }}
                  >
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                      }}
                      className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  <div className="icons relative w-full  cursor-pointer">
  {/* Social Media Links */}
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 p-4 cursor-pointer">
    {/* GitHub */}
    <a
      href="https://github.com/666-yashkumar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-500 transition-colors "
    >
      <FaGithub size={30} className="cursor-pointer" />
    </a>
    {/* Instagram */}
    <a
      href="https://www.instagram.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-500 transition-colors "
    >
      <FaInstagram size={30} className="cursor-pointer" />
    </a>
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-700 transition-colors "
    >
      <FaLinkedin size={30} className="cursor-pointer" />
    </a>
    {/* Twitter */}
    <a
      href="https://twitter.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-colors "
    >
      <FaTwitter size={30} className="cursor-pointer" />
    </a>
  </div>
</div>

        <div className="home  inset-0 z-10 pt-[20vh] pl-6 ">
          <div className="home-left-content flex flex-col  justify-center   h-screen leading-[0.8]">
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-[6vw] font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent leading-tight ">
              Hello I'm
            </motion.h1>

            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className=" leading-tighter">
              <span className="bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent  text-[6vw] font-bold">
                YASH KUMAR
              </span>
            </motion.h1>

            <motion.h1 initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-[4vw] font-semibold bg-gradient-to-r from-zinc-500 to-gray-500 bg-clip-text text-transparent leading-tight ">
              I'm a Full-Stack Developer
            </motion.h1>
          </div>
        </div>

       


      </div>
    </>
  );
};

export default Home;
