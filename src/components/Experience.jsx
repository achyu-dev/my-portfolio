import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-slate-800/60 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            Career
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-slate-100 sm:text-5xl">
            Experience
          </h2>
        </motion.div>

        <div className="relative ml-2 border-l border-slate-700/70 pl-5 sm:ml-4 sm:pl-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="relative mb-7 last:mb-0 sm:mb-9"
            >
              {/* Timeline dot */}
              <span
                className="
                  absolute
                  -left-[26px]
                  top-7
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-slate-950
                  bg-sky-400
                  shadow-[0_0_14px_rgba(56,189,248,0.45)]
                  sm:-left-[39px]
                "
              />

              <motion.div
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-700/50
                  bg-slate-900/40
                  p-4
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
                {/* Soft blue highlight */}
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

                <div className="relative z-10">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <h3 className="break-words text-lg font-semibold text-slate-100 sm:text-xl">
                        {experience.role}
                      </h3>

                      {experience.focus && (
                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {experience.focus}
                        </p>
                      )}

                      <p className="mt-2 break-words text-sm font-medium text-sky-400 sm:text-base">
                        {experience.company}
                      </p>
                    </div>

                    <span
                      className="
                        w-fit
                        shrink-0
                        rounded-full
                        border
                        border-slate-700/60
                        bg-slate-800/50
                        px-3
                        py-1
                        font-mono
                        text-xs
                        text-slate-400
                        sm:text-sm
                      "
                    >
                      {experience.duration}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          max-w-full
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
                          sm:text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;