import skillsData from "@/assets/data/skillsData";
import { MdCheckCircle, MdDevicesOther } from "react-icons/md";

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen p-16 pt-24 flex flex-col gap-2 bg-gray-200" >
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
                {"Knowledge base"}
            </h1>
            <span className="w-20 mx-auto border-b-4 border-blue-600 py-2"></span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-8">
                {
                    skillsData.skills.map((sk, i) => {
                        return (<div key={`${sk.id}-${i}`} className="flex flex-col gap-4 bg-gray-50 p-4 rounded shadow">
                            <div className="flex flex-row gap-2 items-center text-xl">
                                <span className="text-blue-600 bg-blue-600/10 p-3 rounded-full">
                                    <sk.icon/>
                                </span>
                                <span className="font-semibold">
                                    {sk.title}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 px-3">
                                {
                                    sk.detail.map((dt,j) => (<div key={`${sk.id}_${i}_${j}`} className="flex flex-row gap-2 items-center">
                                        <span className="text-lg text-green-600">
                                            <MdCheckCircle />
                                        </span>
                                        <span className="text-md">
                                            {dt}
                                        </span>
                                    </div>))
                                }
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    )
}