import { useState } from "react";
import {
  FaBars,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const navigation = [
  { label: "Projects", target: "projects" },
  { label: "Technologies", target: "tech" },
  { label: "Experience", target: "experience" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (target) => {
    setIsMenuOpen(false);

    requestAnimationFrame(() => {
      const section = document.getElementById(target);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <nav className="mb-10 py-4 sm:mb-14 lg:mb-20 lg:py-6">
      <div className="flex w-full items-center justify-between lg:hidden">
        <div className="flex items-center gap-5 text-xl text-neutral-300">
          <a
            href="https://www.linkedin.com/in/achyuthss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-orange-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/achyu-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-orange-300"
          >
            <FaGithub />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume"
            className="transition-colors hover:text-orange-300"
          >
            <FaFileAlt />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-black/40 px-3 py-2 text-sm font-medium text-orange-300 transition-colors hover:border-orange-300 hover:text-white"
        >
          <span>Menu</span>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } mt-4 flex-col overflow-hidden rounded-xl border border-neutral-800 bg-black/80 p-2 shadow-xl backdrop-blur-sm lg:hidden`}
      >
        {navigation.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-4 py-3 text-sm font-medium text-orange-300 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              {item.label}
            </a>
          ) : (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-orange-300 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              {item.label}
            </button>
          ),
        )}
      </div>

      <div className="hidden items-center justify-between lg:flex">
        <div className="flex items-center gap-5">
          {navigation.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-orange-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <ScrollLink
                key={item.target}
                to={item.target}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg font-medium text-orange-300 transition-colors hover:text-white"
              >
                {item.label}
              </ScrollLink>
            ),
          )}
        </div>

        <div className="flex items-center justify-center gap-5 text-2xl">
          <a
            href="https://www.linkedin.com/in/achyuthss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/achyu-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume"
          >
            <FaFileAlt />
          </a>
          <a
            href="https://leetcode.com/u/achyu-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
            className="text-amber-400 transition-colors hover:text-orange-300"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://codeforces.com/profile/router6512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces profile"
            className="text-blue-400 transition-colors hover:text-orange-300"
          >
            <SiCodeforces />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
