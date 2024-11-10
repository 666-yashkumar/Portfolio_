import React from "react";
import Img2 from "../Image/img2.jpg";
import Img3 from "../Image/img3.jpg";
import resumePdf from "../Image/Resu.pdf";

const About = () => {
  return (
    <>
      <div className="about  h-[100vh]  pt-10" style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${Img3})`,
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="heading m-4 pl-6">
          <h1 className="text-[4vw] font-bold underline text-violet-500  ">About Me</h1>
        </div>
        <div className="content flex justify-between items-center gap-10 px-10">
            <div className="left flex-shrink-0 ">
                <img className="h-[50vh] w-[40vh] object-cover rounded-full shadow-custom" src={Img2} alt="" />
            </div>
            <div className="right  px-6 "  >
                 
                <p className="text-xl text-gray-200 font-serif ">I am an enthusiastic and dedicated web development professional who has recently embarked on my career journey. With a solid foundation in both front-end and back-end technologies, I have cultivated my skills in HTML, CSS, JavaScript, and React.</p>

                <button className="resume bg-gray-500 text-xl font-mono text-white py-2 px-4 rounded-md mt-8 hover:bg-gray-600 hover:scale-105 duration-300">
                <a href={resumePdf} download="Yash_Resume.pdf" className="flex items-center justify-center">
                  My Resume
                  </a>
                  </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
