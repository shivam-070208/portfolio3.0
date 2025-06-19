import React from "react";
import { motion } from "motion/react";
const Project = () => {
  return (
    <section id="projects" className="min-h-screen w-screen  snap-start">
      <motion.div className=" w-screen min-h-screen ">
        <div className="w-full h-screen  md:pl-30 px-3 md:pr-10 pt-20 flex flex-col">
          <div className="relative h-fit overflow-hidden">
            {" "}
            <motion.span
              initial={{ y: 40, rotateZ: -10 }}
              whileInView={{ y: 0, rotateZ: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[max(50px,7vw)] block text-stroke-white  uppercase font-serif text-transparent"
            >
              Project
            </motion.span>
          </div>
          <p className="w-full max-w-md text-xl h-fit self-end mt-20  text-[var(--color-primary)]">
            {"I love to build Creative Fullstack web with Emerging Experience."
              .split("")
              .map((item, i) => (
                <span
                  key={i}
                  className="h-fit py-[0.6px]  overflow-hidden inline-block  font-semibold text-[18.5px]"
                >
                  <motion.span
                    initial={{ y: 26 }}
                    whileInView={{ y: 0 }}
                    viewport={{ margin: "-20px" }}
                    transition={{ delay: 0.01 * i }}
                    className="block"
                  >
                    {" "}
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                </span>
              ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, 0, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-sm sm:text-base tracking-widest self-end  uppercase"
          >
            Scroll to View
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
