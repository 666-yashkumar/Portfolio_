import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGithub, FaJs,FaBootstrap} from "react-icons/fa"; // Font Awesome icons
import { SiTailwindcss, SiMongodb } from "react-icons/si"; // Simple Iconimport "../index.css";
import { motion } from "framer-motion";
const skills = [
  { icon: <FaHtml5 className="text-red-500 w-12 h-12" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />, label: "CSS" },
  { icon: <FaReact className="text-blue-500 w-12 h-12" />, label: "React" },
  { icon: <FaJs className="text-blue-500 w-12 h-12" />, label: "JavaScript" },
  { icon: <FaNodeJs className="text-green-500 w-12 h-12" />, label: "Node.js" },
  { icon: <FaGithub className="text-gray-500 w-12 h-12" />, label: "GitHub" },
  { icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />, label: "Tailwind CSS",},
  { icon: <SiMongodb className="text-green-500 w-12 h-12" />, label: "MongoDB"},

];

const Skills = () => {
  return (
    <div className="skills-section py-10 h-[100vh] w-full bg-black overflow-hidden">
      <div className="container icons  ">
        <h2 className="text-[4vw] font-bold mb-8 pl-20  underline   ">My Skills</h2>
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-20 ">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card flex items-center p-4 border-2 rounded-lg border-none cursor-pointer bg-gray-300 bg-opacity-20 hover:bg-gray-600 duration-300 hover:scale-105 ">
              {skill.icon}
              <p className="pl-4 text-xl font-bold">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container moving flex pt-10  z-10 ">
        <motion.div initial={{ x: "0" }} animate={{ x: "-100%"}}  transition={{ease: "linear",duration: 30, repeat: Infinity,  repeatType: "loop"}}
        className="flex   whitespace-nowrap ">
          <h2 className="text-4xl font-bold mb-8 px-5 flex gap-10 border-b-2 border-gray-500 border-t-2 ">
            <span className="font-bold">Next.js</span>
            <span className="font-sans"> GSAP</span>
            <span className="font-serif">Express.js</span>
            <span className="font-extralight">three.js</span>
            <span className="font-italic">React-three-fiber</span>
            <span className="font-semibold">framer-motion</span>
          </h2>
          <h2 className="text-4xl font-bold mb-8 px-5 flex gap-10 border-b-2 border-gray-500 border-t-2  ">
            <span className="font-bold">Next.js</span>
            <span className="font-sans"> GSAP</span>
            <span className="font-serif">Express.js</span>
            <span className="font-extralight">three.js</span>
            <span className="font-italic">React-three-fiber</span>
            <span className="font-semibold">framer-motion</span>
          </h2> 
          <h2 className="text-4xl font-bold mb-8 px-5 flex gap-10 border-b-2 border-gray-500 border-t-2 ">
            <span className="font-bold">Next.js</span>
            <span className="font-sans"> GSAP</span>
            <span className="font-serif">Express.js</span>
            <span className="font-extralight">three.js</span>
            <span className="font-italic">React-three-fiber</span>
            <span className="font-semibold">framer-motion</span>
          </h2>
          
        </motion.div>
        
      </div>
     
    </div>
  );
};

export default Skills;
