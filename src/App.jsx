import { useEffect, useRef, useState } from "react"
import { loadmodel } from "./threejssetup/modelloading"
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Home from "./components/Home";
import Project from "./components/Project";
import './App.css'

function App() {
const canvaref = useRef(null)
const [darkMode, setDarkMode] = useState(true);
useEffect(()=>{
if(!(canvaref &&canvaref.current)) return
  loadmodel({elm:canvaref.current})
},[canvaref])

  return (
    <div className="">
       <motion.div animate={{ width:darkMode?'200%':'0%', height:darkMode?'200%':'0%' }} className="div bg-black rounded-full fixed -top-60 -left-60 -z-10" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.canvas animate={{filter:'blur(0px)'}} transition={{duration:2}} className="w-screen  blur-2xl fixed h-screen -z-1" ref={canvaref}></motion.canvas>
     <Home />
    <Project />
    </div>
  )
}

export default App
