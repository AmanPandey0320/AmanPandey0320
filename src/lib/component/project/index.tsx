import { PROJECTS } from "@/assets/data/project";
import Page from "@/lib/layout/page";
import Image from "next/image";

export default function Projects() {
    return (
        <Page id="projects" title="Projects" className="bg-gray-100 dark:bg-gray-900">
            <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {
                    PROJECTS.map((prj, i) => (
                        <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg shadow-gray-300 dark:shadow-gray-900 flex flex-col gap-2 h-full" key={i}>
                            <div className="flex flex-col gap-2 flex-grow">
                                <div className="h-32 rounded-md relative">
                                    <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-200 text-xs text-gray-800 font-semibold z-99">{prj.type}</span>
                                    <div className="h-32 w-full z-49 bg-black/50 absolute top-0 left-0" ></div>
                                    <Image className="h-32 rounded-md" src={prj.image} alt={prj.name} />
                                </div>
                                <div className="flex flex-row justify-between gap-1">
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{prj.name}</h2>
                                    {
                                        prj.demo && <a href={prj.demo} target="_blank" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 dark:text-gray-300 hover:dark:text-gray-100">
                                            View
                                        </a>
                                    }
                                    {
                                        prj.repo && <a href={prj.repo} target="_blank" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 dark:text-gray-300 hover:dark:text-gray-100">
                                            Code
                                        </a>
                                    }
                                </div>
                                <p className="text-sm text-gray-700 text-justify dark:text-gray-400">{prj.summary}</p>
                            </div>
                            <div className="mt-auto flex flex-row gap-1 flex-wrap">
                                {
                                    prj.techStack.map((tech, j) => (
                                        <span key={j} className="text-xs text-blue-600 bg-blue-600/10 px-2 py-1 font-semibold dark:text-gray-300 dark:bg-gray-700 rounded-full">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </Page>
    )
}