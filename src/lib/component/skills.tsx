import skillsData from "@/assets/data/skillsData";
import { MdCheckCircle } from "react-icons/md";
import Page from "../layout/page";

export default function Skills() {
    return (
        <Page title="Skills & Knowledge" id="skills" className="bg-gray-100 dark:bg-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-8">
                {
                    skillsData.skills.map((sk, i) => {
                        return (<div key={`${sk.id}-${i}`} className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow">
                            <div className="flex flex-row gap-2 items-center text-xl">
                                <span className="text-blue-600 dark:text-gray-200 bg-blue-600/10 dark:bg-gray-100/10 p-3 rounded-full">
                                    <sk.icon />
                                </span>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">
                                    {sk.title}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 px-3">
                                {
                                    sk.detail.map((dt, j) => (<div key={`${sk.id}_${i}_${j}`} className="flex flex-row gap-2 items-center">
                                        <span className="text-lg text-green-600 dark:text-gray-300">
                                            <MdCheckCircle />
                                        </span>
                                        <span className="text-md text-gray-600 dark:text-gray-400">
                                            {dt}
                                        </span>
                                    </div>))
                                }
                            </div>
                        </div>)
                    })
                }
            </div>
        </Page>
    )
}