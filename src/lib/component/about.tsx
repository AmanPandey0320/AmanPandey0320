import Page from "../layout/page";
import WordCloud from "../layout/wordCloud";
import { PiBriefcaseDuotone, PiCodeDuotone, PiProjectorScreenChartDuotone, PiTimerDuotone } from "react-icons/pi";

export default function About() {
    return (
        <Page title="About Me" id="about" className="dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-8">
                <div>
                    <WordCloud />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="px-2 text-lg text-gray-900 font-semibold dark:text-gray-300">{"Software Engineer & Problem Solver"}</p>
                    <p className="text-justify px-2 text-gray-700 dark:text-gray-400" >{`Hello! I'm Aman Kr Pandey, a passionate Software Engineer with 2+ year of experience in software engineering and solving complex problems that drive real-world impact. I specialize in full-stack development, building everything from dynamic frontends with React and Android to scalable backends using Node.js, or Spring Boot deployed with variety of technologies such as kubernetes, Docker, CI/CD over cloud or on-prem machines. I also have experience deploying applications in cloud environments with a very efficient and reliable system designed to with stand your peak business hours. Beyond coding, I actively participate in hackathons and coding challenges, write technical blogs, mentor junior developers, and explore emerging tech trends like Gen AI or cyber security.`}</p>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-blue-600 text-2xl bg-blue-600/10 p-3 rounded-full">
                                <PiBriefcaseDuotone />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold dark:text-gray-400">{"Experience"}</span>
                                <span className="text-gray-600 text-xs dark:text-gray-500">{"2+ YOE"}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-blue-600 text-2xl bg-blue-600/10 p-3 rounded-full">
                                <PiProjectorScreenChartDuotone />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold dark:text-gray-400">{"Project"}</span>
                                <span className="text-gray-600 text-xs dark:text-gray-500">{"5+ projects"}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-blue-600 text-2xl bg-blue-600/10 p-3 rounded-full">
                                <PiCodeDuotone />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold dark:text-gray-400">{"Hands on code"}</span>
                                <span className="text-gray-600 text-xs dark:text-gray-500">{"75-90% "}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-blue-600 text-2xl bg-blue-600/10 p-3 rounded-full">
                                <PiTimerDuotone />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold dark:text-gray-400">{"Delivery"}</span>
                                <span className="text-gray-600 text-xs dark:text-gray-500">{"On-time"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}