import { useEffect, useRef } from "react"
import { loadmodel } from "./threejssetup/modelloading"
import Navbar from "./components/Navbar";

import './App.css'

function App() {
const canvaref = useRef(null)
useEffect(()=>{
if(!(canvaref &&canvaref.current)) return
  loadmodel({elm:canvaref.current})
},[canvaref])

  return (
    <div className="">
      <Navbar />
      <canvas className="w-screen fixed h-screen " ref={canvaref}></canvas>
      <div className="w-screen h-screen div1 bg-amber-300"></div>
      <div className="w-screen div2 h-screen"></div>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
    </div>
  )
}

export default App
