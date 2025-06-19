import React from 'react'
import { motion } from 'motion/react'
const Project = () => {
  return (
  < section id='projects' className='min-h-screen w-screen  snap-start'>
    <motion.div initial={{scale:0.5}} whileInView={{scale:1.0}} viewport={{margin:'-10%'}} transition={{duration:0.9}} className=' w-screen min-h-screen'></motion.div>
  </section>
  )
}

export default Project
