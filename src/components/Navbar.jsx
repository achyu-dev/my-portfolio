import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 w-14 flex items-center justify-center gap-5 text-2xl">
        <Link to="/linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
        <Link to="/github" title="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <div className="relative group">
          <Link to="/resume" title="Resume" target="_blank" rel="noopener noreferrer">
            <FaFileAlt />
          </Link>
          <span className="absolute bottom-full mb-2 hidden w-auto bg-gray-800 text-white text-sm font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300">
            Resume
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;