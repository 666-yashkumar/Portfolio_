 import React from 'react'
 import Navbar from './Components/Navbar'
 import Home from './Components/Home'
 import About from './Components/About'
 import Cursor from './Components/Cursor'
 import Skills from './Components/Skills'
 import Project from './Components/Project'
 import Contact from './Components/Contact'
 const App = () => {

   return (
     <>
     
     <div className='h-screen w-full text-white '>

      <Cursor />
      <Navbar /> 
      
      <div id="home"><Home /></div>

      <div id="about"><About /></div>

      <div id="skills"><Skills /></div>
      
      <div id="Project"><Project /></div>

      <div id="contact"><Contact /> </div>
      </div>
     </>
   )
 }
 
 export default App
 