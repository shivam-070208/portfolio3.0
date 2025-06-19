import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative snap-start w-screen h-screen flex items-center justify-center overflow-hidden bg-transparent text-[var(--color-fg)] z-[0]"
    >
      {/* Hero Text Left-Aligned */}
      <div
      
        className="absolute h-fit w-fit overflow-hidden top-1/3 left-10 sm:left-20 max-w-xl "
      >

        <motion.h1   initial={{ x: -80, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1, }}
       viewport={{margin:'-30%'}}
        transition={{ duration: 1.4 }} className="text-3xl sm:text-5xl font-bold leading-tight text-[var(--color-accent)]">
          Hey, I’m Shivam<br />
          I build fullstack <span className="text-[var(--color-herosecondary)]">Experiences</span>
        </motion.h1>
        <p className="mt-2 w-fit h-fit overflow-hidden text-lg sm:text-xl  text-[var(--color-herosecondary)] font-semibold  max-w-md sm:ml-12">
       Merging design, performance, and real-time interactivity to deliver immersive apps.
      </p>
      </div>

      {/* CTA Button Bottom */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 px-8 py-3 font-semibold rounded-full text-white text-base shadow-md transition-all animate-pulse hover:scale-105"
        style={{
          backgroundColor: "var(--color-accent)",
          boxShadow: "0 0 20px var(--color-shadow)",
        }}
      >
        Explore Projects
      </motion.a>

      {/* Floating Title Top Left */}
    

      {/* Optional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-fg)]/50 text-sm"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
};

export default Home;
