import Link from "next/link";
import Image from "next/image";
import img from "@/assets/images/img.jpeg";
import { FaDev, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import WordCloud from "../layout/wordCloud";

export default function About() {
    return (
        <section id="about" className="min-h-screen p-16 pt-32 flex flex-col gap-2" >
            <h1 className="text-center text-4xl font-bold text-gray-800">
                {"About Me"}
            </h1>
            <span className="w-20 mx-auto border-b-4 border-blue-600 py-2"></span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <WordCloud/>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}