import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="mr-5 text-lg font-medium text-blue-800 hover:text-gray-900 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="tech"
          smooth={true}
          duration={500}
          className="mr-5 text-lg font-medium text-blue-800 hover:text-gray-900 cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="mr-5 text-lg font-medium text-blue-800 hover:text-gray-900 cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="blogs"
          smooth={true}
          duration={500}
          className="mr-5 text-lg font-medium text-blue-800 hover:text-gray-900 cursor-pointer"
        >
          Blogs
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="mr-5 text-lg font-medium text-blue-800 hover:text-gray-900 cursor-pointer px-4"
        >
          Contact
        </Link>
      </div>
      <div className="m-8 w-14 flex items-center justify-center gap-5 text-2xl">
        <a
          href="https://www.linkedin.com/in/achyuthss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/achyu-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <div className="relative group">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt />
          </a>
          <span className="absolute bottom-full mb-2 hidden w-auto bg-gray-800 text-white text-sm font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300">
            Resume
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
