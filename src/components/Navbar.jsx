// src/components/Navbar.jsx

import { motion, scale, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({darkMode,setDarkMode}) => {
  const [shownav, sshownav] = useState(false);
  const [navanimate,snavanimate] = useState(false)
  const {scrollY} = useScroll()
  const [hover, shover] = useState(null);
  const navItem = [
    "home",
   
    "projects",
    "skills",
    "experience",
    "contact",
  ];
  useMotionValueEvent(scrollY,'change',(latest)=>{
  if(latest>10){
    snavanimate(true)
  }else snavanimate(false)
  })
  // Dark mode toggle state
  

  
  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.querySelector('body').classList.add("dark");
      } else {
         document.querySelector('body').classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <motion.nav animate={{width:navanimate?'90%':'100%',borderRadius:navanimate?'30px':'0px',boxShadow:navanimate?'1px 1px 1px var(--color-shadow)':'none',transform:`translateX(${navanimate?'5%':'0%'})`}} className="fixed w-full top-0     z-100 backdrop-blur-sm flex items-center justify-between sm:px-5 px-3 py-4 bg-transparent  ">
    
      <div className="flex items-center ">
        <span className="text-lg sm:text-3xl font-extrabold text-transparent text-stroke-white tracking-widest ">
          Shivam Gupta{" "}
        </span>
      </div>
      <div className="hidden lg:flex  ">
        {navItem.map((item, i) => (
          <a
            href={`#${item}`}
            key={item}
            onMouseEnter={() => shover(i)}
            onMouseLeave={() => shover(null)}
            className=" uppercase text-md  flex justify-center relative font-bold text-transparent text-stroke-white px-3 py-1"
          >
            {item}
            {hover === i && (
              <motion.div
                layoutId="hovered-span"
                key={i}
                className="w-full h-full  bg-spanfollow  rounded absolute top-0 -z-1 "
              />
            )}
          </a>
        ))}
      </div>

    <div className="flex gap-1">
      <button
        onClick={handleToggleDarkMode}
        className="mx-2 flex items-center justify-center text-white dark:text-yellow-400 focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path
              stroke="black"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              fill="black"
            />
          </svg>
        )}
      </button>

      <div
        className="flex flex-col justify-center items-center gap-[1.0px] lg:hidden"
        onClick={() => sshownav(!shownav)}
      >
        {[1, 0,-1].map((item, idx) => (
          <motion.div
            key={idx}
            transition={{ duration: 0.9}}
            initial={{opacity:`${shownav ?1 : 0}`}}
            animate={{
              transform: `rotateZ(${(shownav ? 70 : 0) * item}deg)`,
              opacity: `${shownav ? 1 * Math.abs(item) : 1}`,
            }}
            className="w-6  origin-center  h-[3px]  z-100 cursor-pointer bg-[var(--color-herosecondary)]"
          />
        ))}
      </div>
      </div>
      <motion.div   animate={{
              transform: `translateY(${(shownav ? 0:120)}%)`,
            }} className="lg:hidden flex flex-col gap-2 w-screen h-screen fixed justify-center items-center top-0 left-0 bg-black dark:bg-black -">
         {navItem.map((item) => (
          <a
            href={`#${item}`}
            key={item}
            className=" uppercase text-md flex justify-center relative font-bold text-transparent text-stroke-white px-3 py-1"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};
export default Navbar;
