import Link from "next/link";
import Image from "next/image";
import img from "@/assets/images/img.jpeg";
import { FaDev, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
    return (
        <section id="home" className="min-h-screen bg-gradient-to-b from-blue-200 dark:from-transparent via-transparent to-transparent p-8 md:px-16 pt-32" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <span className="text-6xl font-semibold text-blue-600 dark:text-gray-200">{"Hello, I'm"}</span>
                    <span className="text-6xl font-semibold text-blue-600 dark:text-gray-200">{"Aman Kr Pandey"}</span>
                    <span className="text-2xl font-semibold text-blue-600 dark:text-gray-200">{"Full Stack Sofware Engineer"}</span>
                    <span className="text-justify pt-2 dark:text-gray-400">
                        {"I'm a Software Developer with a passion for building scalable, high-performance applications. I strive to optimize systems for efficiency, security, tackling complex problems and continuously learning new technologies. I take pride in building solutions that makes an impact."}
                    </span>
                    <span className="text-justify pt-2 dark:text-gray-400">
                        {"Let’s build something amazing together!"}
                    </span>
                    <div>
                        <br />
                    </div>
                    <div className="flex flex-row gap-2">
                        <a href="#connect" className="bg-blue-600 p-3 px-5 flex items-center rounded text-white font-semibold hover:cursor-pointer hover:bg-blue-700 transition-all duration-200">
                            {"Let's Connect"}
                        </a>
                        <a href="https://bit.ly/47ukLgz" target="_blank" className="p-2 flex items-center px-4 rounded border border-t-1 border-gray-900 text-gray-900 hover:border-blue-600 hover:text-blue-600 font-semibold hover:cursor-pointer transition-all duration-200 dark:border-gray-300 dark:text-gray-300 dark:hover:border-gray-100 dark:hover:text-gray-100">
                            {"Get Resume"}
                        </a>
                    </div>
                    <div className="flex flex-row gap-2 pt-2">
                        <Link target="_blank" href={"https://www.linkedin.com/in/amanpandey09/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link target="_blank" href={"https://github.com/AmanPandey0320"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                            <FaGithub size={24} />
                        </Link>
                        <Link target="_blank" href={"https://x.com/_a_m_a_n_pandey/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                            <FaSquareXTwitter size={24} />
                        </Link>
                        <Link target="_blank" href={"https://dev.to/_a_m_a_n_pandey/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                            <FaDev size={24} />
                        </Link>

                    </div>
                </div>
                <div className="w-full">
                    <div className="m-auto hidden md:block p-1 border border-4 border-blue-600 rounded-full w-fit">
                        <Image className="h-full w-full md:h-64 md:w-64 xl:h-96 xl:w-96 rounded-full" alt="img" src={img} />
                    </div>
                </div>
            </div>
        </section>
    )
}