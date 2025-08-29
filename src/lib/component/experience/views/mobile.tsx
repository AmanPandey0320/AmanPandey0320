
import Image from "next/image";
import experienceData from "@/assets/data/experienceData";

export default function MobileView() {
    return (
        <div className="w-full flex flex-col gap-8">
            {experienceData.experiences.map((exp, idx) => (
                <div key={`${exp.id}_${idx}`} className="flex flex-col gap-4">
                    <div className="p-2 shadow-md rounded bg-white dark:bg-white/[0.05] flex flex-col gap-2">
                        <Image className="h-48 w-full object-cover rounded" alt="oracle" src={exp.image} />
                        <p className="text-gray-700 dark:text-gray-400 text-sm py-2">{exp.summary}</p>
                    </div>
                    <p className="text-gray-900 text-xl pt-2 font-semibold dark:text-gray-100">{exp.title}</p>
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-blue-600 text-lg font-semibold dark:text-gray-300">{exp.company}</span>
                        <span className="text-gray-600 text-sm dark:text-gray-500">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-outside text-gray-700 dark:text-gray-400 text-justify pt-4 pl-5">
                        {exp.details.map((detail, dtIdx) => (
                            <li key={`${exp.id}_${idx}_detail_${dtIdx}`}>{detail}</li>
                        ))}
                    </ul>
                    <div className="flex flex-row-reverse gap-2 mt-2">
                        {exp.techStackUsed.slice().reverse().map((tech, tsIdx) => (
                            <span key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`}>
                                <tech.icon className="text-gray-700 dark:text-gray-400" size={24} />
                            </span>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <div style={{ minHeight: "2rem" }}></div>
                </div>
            ))}
        </div>
    );
}