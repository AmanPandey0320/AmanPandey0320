import Image from "next/image";
import { AchievementsData } from "@/lib/types/EducationData"

export default function AchievementsView({ acv }: { acv: AchievementsData }) {
    return (
        <div className="flex flex-row gap-2 rounded sm:rounded-s-full shadow bg-gray-50 dark:bg-gray-800">
            <div className="rounded-s-full p-2 hidden sm:block" >
                <div className="h-16 w-16 rounded-full shadow-md bg-gray-50">
                    <Image src={acv.img} className="h-16 w-16 rounded-full" alt={acv.title} />
                </div>
            </div>
            <div className="flex flex-col p-2 rounded-e" >
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100" >{acv.title}</h3>
                <p className="text-normal font-thin text-gray-600 dark:text-gray-300">{acv.issuesBy}</p>
                <div className="flex flex-row gap-2 rounded-e">
                    <span className="text-xs text-gray-400 font-thin dark:text-gray-500">Issued:{acv.issued}</span>
                    {
                        acv.expires && <span className="text-xs text-gray-400 font-thin">Expires:{acv.expires}</span>
                    }
                </div>
            </div>
        </div>
    );
}