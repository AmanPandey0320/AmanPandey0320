import { FaUserGraduate } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import educationData from "@/assets/data/educationData";
import FormalEducationView from "./formal";
import AchievementsView from "./achievements";

export default function Education() {
    return (
        <section id="education" className="min-h-screen p-8 md:px-16 pt-32 flex flex-col gap-2 dark:bg-gray-900" >
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
                {"Education"}
            </h1>
            <span className="w-20 mx-auto border-b-4 border-blue-600 py-2"></span>
            <div className="pt-8 sm:pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <span className="text-blue-600 dark:bg-white/[0.075] dark:text-gray-300 bg-blue-600/10 p-4 rounded-full" >
                                <FaUserGraduate />
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-gray-200">
                                {"Formal Education"}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                educationData.formal.map((edu, idx) => <FormalEducationView key={idx} edu={edu} />)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2 text-xl">
                            <span className="text-blue-600 bg-blue-600/10 p-4 rounded-full" >
                                <GrAchievement />
                            </span>
                            <span className="font-semibold">
                                {"Achievements"}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                educationData.achievements.map((a,i) => <AchievementsView key={i} acv={a}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}