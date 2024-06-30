import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-5">
      <h1 className="my-20 text-center text-5xl">
        About <span className="text-neutral-600">Me</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-full lg:p-8">
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x:100}}
          transition={{duration:0.4}}
          className="flex items-center justify-center">
            <div className="flex justify-center">
              <p className="text-center">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
