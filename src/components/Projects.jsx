import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-slate-800/60 py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            Selected Work
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-slate-100 sm:text-5xl">
            Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            A selection of things I've built while exploring software systems,
            machine learning, networking, and developer tooling.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-700/50
                bg-slate-900/40
                p-5
                shadow-lg
                shadow-slate-950/10
                backdrop-blur-md
                transition-colors
                duration-300
                hover:border-slate-600/70
                hover:bg-slate-800/45
                sm:p-6
              "
            >
              {/* Soft blue glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-24
                  bg-gradient-to-b
                  from-sky-500/[0.06]
                  to-transparent
                "
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between">
                  <span className="font-mono text-sm text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="
                        rounded-full
                        border
                        border-slate-700/60
                        bg-slate-800/40
                        p-2
                        text-slate-400
                        transition-all
                        duration-200
                        hover:border-sky-500/50
                        hover:bg-slate-800/70
                        hover:text-sky-300
                      "
                    >
                      <FiArrowUpRight className="text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-slate-700/60
                        bg-slate-800/45
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-300
                        transition-colors
                        duration-200
                        group-hover:border-slate-600/80
                        group-hover:bg-slate-800/70
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 sm:text-base">
            More experiments, contributions, and unfinished ideas live on GitHub.
          </p>

          <motion.a
            href="https://github.com/achyu-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700/60
              bg-slate-900/40
              px-5
              py-2.5
              text-sm
              text-slate-300
              backdrop-blur-md
              transition-colors
              hover:border-sky-500/40
              hover:bg-slate-800/60
              hover:text-sky-300
            "
          >
            View GitHub
            <FiArrowUpRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;