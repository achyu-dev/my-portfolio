import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/hellofinal.png';
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
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-5">
                <div className="flex flex-col items-center lg:items-start lg:hidden">
                    <motion.h1 
                    variants={container(0.1)}
                    initial="hidden"
                    animate="visible"
                    className="pb-2 lg:pb-5 text-5xl font-thin tracking-tight mt-6 lg:mt-12 lg:text-9xl">
                        Achyuth S S
                    </motion.h1>
                </div>
                <div className="flex justify-center">
                    <motion.img 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    src={profilePic} alt="Achyuth SS" height="600px" width="600px" className="flex justify-center mt-2 lg:mt-0"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0.1)}
                    initial="hidden"
                    animate="visible"
                    className="pb-8 hidden lg:block text-6xl font-thin tracking-tight lg:mt-10 lg:text-6xl">
                        Achyuth S S
                    </motion.h1>
                    <motion.span 
                    variants={container(0.6)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-600 
                    to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent pb-4 w-full lg:pb-2 lg:text-left mt-2 text-center">
                        Undergraduate Student
                    </motion.span>
                    <motion.p
                    variants={container(1.1)}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl my-1 max-w-xl py-4 tracking-tighter w-full lg:py-2 lg:mt-4">
                        <p className="text-4xl">About Me</p> <br></br>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
        </div>    
    </div>
  );
}

export default Hero;
