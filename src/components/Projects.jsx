import { PROJECTS } from "../constants";
import {motion} from "framer-motion";


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.6}}

      className="my-20 text-center text-5xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration: 1.2}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500">
                    {tech}
                  </span>
                ))}
              </div>
              <br/>
              More Projects can be found my GitHbu profile and on my CVs
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Projects
