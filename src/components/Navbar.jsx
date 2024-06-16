import logo from "../assets/logowithoutbg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14.5" src={logo} alt="logo" height="100px" width="100px"/>
      </div>
    <div className="m-8 flex items-center justify-center gap-5 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaTwitterSquare />
      <FaInstagram />

  </div>
    </nav>
  
    
  )
}

export default Navbar