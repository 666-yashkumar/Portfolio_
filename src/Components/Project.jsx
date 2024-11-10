import React from "react";
import Ochi from '../Image/Ochi.png'
import Sun from '../Image/Sun.png'
import Amor from '../Image/Amor.png'
import { FaLongArrowAltRight, FaArrowAltCircleLeft } from "react-icons/fa";
 

const Project = () => {
  return (
    <>
      <div className="project-section h-[100vh] w-full bg-gray-600  ">
        <h2 className="px-4 underline decoration-orange-300 py-2 text-[5vw] font-bold bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent mb-10   ">
          PROJECTS </h2>
       

           <div className="flex items-center justify-center gap-20">
           <div className="proj h-[55vh] w-[18vw] border-2 border-red-500 rounded-lg  top-[80px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
            <div className="h-full w-full text-center ">
              <div className="img w-[80%] h-[28vh] overflow-hidden bg-black mx-auto mt-2 rounded-xl "><img className="h-[30vh] w-[50vh]" src={Ochi} alt="Description" /></div>
              <a href="https://ochi-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl text-black underline py-2">The Ochi</h1>
              
                <p className="text-sm text-white hover:underline">
                Ochi is an app designed to help users block distracting websites and apps.
                </p>
              </a>
              {/* <div className="text-white text-[3vw] mx-[40%] hover:text-black cursor-pointer ">
               
                <FaLongArrowAltRight />
              </div> */}
            </div>
          </div> 
           <div className="proj h-[55vh] w-[18vw]  border-2 border-red-500 rounded-lg  top-0 left-[450px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
          <div className="h-full w-full text-center ">
              <div className="img w-[80%] h-[28vh] bg-black mx-auto mt-2 rounded-xl overflow-hidden"> <img className="h-[30vh] w-[50vh]" src={Amor} alt="Description" /></div>

             

              <a href=" https://amora-five.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl text-black underline py-2">Amora</h1>
              
                <p className="text-sm text-white hover:underline">
                Amora is an Learning app clone designed to help users .
                </p>
              </a>
               
            </div>
          </div>
          <div className="proj h-[55vh] w-[18vw]  border-2 border-red-500 rounded-lg  top-[80px] left-[900px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
          <div className="h-full w-full text-center ">
              <div className="img w-[80%] h-[28vh] bg-black mx-auto mt-2 rounded-xl overflow-hidden "><img className="h-[30vh] w-[50vh]" src={Sun} alt="Description" /> </div>

              <a href=" https://sun-down-cyan.vercel.app/" target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl text-black underline">SunDown</h1>
              
                <p className="text-sm text-white hover:underline">
                SunDown is a fully responsive and creatively   website, optimized for seamless user experiences .
                </p>
              </a>
              {/* <div className="text-white text-[3vw] mx-[40%] hover:text-black cursor-pointer ">
               
                <FaLongArrowAltRight />
              </div> */}
            </div>
          </div>
           </div>




        
        
      </div>
    </>
  );
};

export default Project;


   {/* <div className="proj h-[55vh] w-[18vw]  border-2 border-red-500 rounded-lg absolute top-[80px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
            <div className="h-full w-full  ">
              <div className="img w-[80%] h-[30vh] bg-black mx-auto mt-2 rounded-xl "></div>
              <h1 className="text-xl text-white underline">3d Slider</h1>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                nisi.
              </p>
              <div className="text-white text-[3vw] mx-[40%] hover:text-black cursor-pointer ">
               
                <FaLongArrowAltRight />
              </div>
            </div>
          </div> */}
          {/* <div className="proj h-[55vh] w-[18vw]  border-2 border-red-500 rounded-lg absolute top-0 left-[450px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
          <div className="h-full w-full  ">
              <div className="img w-[80%] h-[30vh] bg-black mx-auto mt-2 rounded-xl "></div>
              <h1 className="text-xl text-white underline">3d Slider</h1>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                nisi.
              </p>
              <div className="text-white text-[3vw] mx-[40%] hover:text-black cursor-pointer ">
               
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="proj h-[55vh] w-[18vw]  border-2 border-red-500 rounded-lg absolute top-[80px] left-[900px] bg-slate-500 bg-opacity-50 hover:scale-105 duration-300 hover:bg-opacity-70">
          <div className="h-full w-full  ">
              <div className="img w-[80%] h-[30vh] bg-black mx-auto mt-2 rounded-xl "></div>
              <h1 className="text-xl text-white underline">3d Slider</h1>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                nisi.
              </p>
              <div className="text-white text-[3vw] mx-[40%] hover:text-black cursor-pointer ">
               
                <FaLongArrowAltRight />
              </div>
            </div>
          </div> */}