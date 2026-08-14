import { FaAws, FaDocker, FaGithub, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiLinux,
  SiPostgresql,
  SiPytest,
  SiPytorch,
  SiSelenium,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const technologyGroups = [
  {
    title: "Languages",
    layout: "md:col-start-1 md:row-start-1",
    technologies: [
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-300",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Frameworks & APIs",
    layout: "md:col-start-2 md:row-start-1",
    technologies: [
      {
        name: "React",
        icon: RiReactjsLine,
        color: "text-cyan-400",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "text-emerald-400",
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "text-slate-200",
      },
    ],
  },
  {
    title: "Data, Cloud & Tooling",
    layout:
      "md:col-start-1 md:row-span-2 md:row-start-2 xl:col-start-3 xl:row-start-1",
    technologies: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-sky-400",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "text-blue-400",
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "text-yellow-200",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-slate-300",
      },
      {
        name: "Azure",
        icon: VscAzure,
        color: "text-sky-400",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "text-orange-400",
      },
    ],
  },
  {
    title: "Testing",
    layout: "md:col-start-2 md:row-start-2 xl:col-start-1",
    technologies: [
      {
        name: "Selenium",
        icon: SiSelenium,
        color: "text-green-400",
      },
      {
        name: "Pytest",
        icon: SiPytest,
        color: "text-blue-300",
      },
    ],
  },
  {
    title: "Machine Learning",
    layout: "md:col-start-2 md:row-start-3 xl:row-start-2",
    technologies: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        color: "text-red-400",
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "text-orange-400",
      },
    ],
  },
];

const Tech = () => {
  return (
    <section
      id="tech"
      className="border-b border-slate-800/60 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            Stack
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-slate-100 sm:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {technologyGroups.map((group) => (
            <div
              key={group.title}
              className={`
                relative
                w-full
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
                ${group.layout}
                ${
                  group.title === "Machine Learning"
                    ? "max-md:mx-auto max-md:max-w-md"
                    : ""
                }
              `}
            >
              {/* subtle blue glass highlight */}
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
                <h3 className="mb-6 text-center text-base font-medium tracking-wide text-slate-300 sm:text-lg">
                  {group.title}
                </h3>

                <div
                  className={`grid grid-cols-2 gap-3 sm:gap-4 ${
                    group.title === "Machine Learning"
                      ? "md:grid-cols-3"
                      : "sm:grid-cols-3"
                  }`}
                >
                  {group.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <div
                        key={technology.name}
                        className="
                          group
                          flex
                          min-w-0
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          rounded-xl
                          border
                          border-slate-700/50
                          bg-slate-800/35
                          px-2
                          py-5
                          shadow-sm
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-sky-500/30
                          hover:bg-slate-800/65
                          hover:shadow-md
                          hover:shadow-sky-950/20
                          sm:px-3
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          className={`text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl ${technology.color}`}
                        />

                        <span className="w-full truncate text-center text-xs text-slate-400 transition-colors group-hover:text-slate-200 sm:text-sm">
                          {technology.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;