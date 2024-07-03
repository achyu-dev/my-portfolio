import logo from "../assets/logowithoutbg.png";
import { FaGithub, FaLinkedin, FaTwitterSquare, FaFileAlt } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 w-14 flex items-center justify-center gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/achyuthss/" title="Linkedln">
          <FaLinkedin />
        </a>
        <a href="https://github.com/achyu-dev" title="GitHub">
          <FaGithub />
        </a>
        <div className="relative group">
          <a href="https://www.overleaf.com/read/grjqbtwdhnqq#e4f5b6" title="Resume">
            <FaFileAlt />
          </a>
          <span className="absolute bottom-full mb-2 hidden w-auto bg-gray-800 text-white text-sm font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300">
            Resume
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
