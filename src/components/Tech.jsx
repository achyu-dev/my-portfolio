import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-25">
        <h1 className="my-20 text-center text-5xl">My Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-pink-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKotlin className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPytorch className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-black-400"/>
            </div>
        </div>
    </div>
  )
}

export default Tech



