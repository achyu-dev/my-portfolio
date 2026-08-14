import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/achyuhero.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-10 lg:pb-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-5">
          <div className="flex flex-col items-center lg:items-start lg:hidden">
            <motion.h1
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="mt-2 pb-2 text-center text-4xl font-thin tracking-tight sm:text-5xl"
            >
              Achyuth
            </motion.h1>
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              src={profilePic}
              alt="Achyuth SS"
              height="400px"
              width="400px"
              className="mt-2 h-auto w-full max-w-sm object-contain lg:mt-0"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="pb-8 hidden lg:block text-6xl font-thin tracking-tight lg:mt-10 lg:text-6xl"
            >
              Achyuth
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-2 w-full bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text pb-4 text-center text-2xl tracking-tight text-transparent sm:text-3xl lg:pb-2 lg:text-left"
            >
              Analyst - Software Engineer at KPMG India
            </motion.span>
            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="my-1 w-full max-w-xl py-4 text-base leading-relaxed tracking-tight sm:text-lg lg:mt-4 lg:py-2 lg:text-xl"
            >
              {HERO_CONTENT}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
