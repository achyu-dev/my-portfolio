import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="my-20 text-center text-5xl"
        >
          Experience
        </motion.h1>
        <div className="mx-24 px-12 max-w-5xl">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col lg:justify-center lg:flex-row"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2 }}
                className="w-full lg:w-1/4"
              ></motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.2 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="text-2xl mb-2 font-semibold">
                  {experience.role}
                  <br />
                  <span className="text-lg text-blue-400">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-sm text-neutral-400">
                  {experience.duration}
                </p>
                <p className="mb-4 text-neutral-400 text-left lg:text-left">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
