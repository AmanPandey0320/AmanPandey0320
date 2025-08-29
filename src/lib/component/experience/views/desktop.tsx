import Image from "next/image";
import experienceData from "@/assets/data/experienceData";
import { color } from "@/lib/component/style";

export default function DesktopView() {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-12">
                {experienceData.experiences.map((exp, idx) => (
                    <div key={`${exp.id}_${idx}`} className="flex flex-row items-stretch gap-6">
                        {/* Timeline Left (Details) */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <p className="text-gray-900 text-xl font-semibold dark:text-gray-100">{exp.title}</p>
                                <p className="text-blue-600 text-lg font-semibold dark:text-gray-300">{exp.company}</p>
                                <p className="text-gray-600 text-sm dark:text-gray-500">{exp.duration}</p>
                                <ul className="list-disc list-outside text-gray-700 dark:text-gray-400 text-justify pt-4 pl-5">
                                    {exp.details.map((detail, dtIdx) => (
                                        <li key={`${exp.id}_${idx}_detail_${dtIdx}`}>{detail}</li>
                                    ))}
                                </ul>
                                <div className={`flex flex-row gap-2 mt-4 ${idx%2 === 0 ? 'justify-end' : 'justify-start'}`}> 
                                    {exp.techStackUsed.slice().reverse().map((tech, tsIdx) => (
                                        <span key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`}>
                                            <tech.icon className="text-gray-700 dark:text-gray-400" size={24} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ minHeight: "4rem" }}></div>
                        </div>
                        {/* Timeline Center (Dot & Line) */}
                        <div className="flex flex-col items-center">
                            <div className="w-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
                            <div
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    background: color.blue,
                                    padding: "8px",
                                    margin: "0.5rem 0"
                                }}
                            >
                                <exp.dotIcon className="text-white" size={16} />
                            </div>
                            <div className="w-1 bg-gray-300 dark:bg-gray-700 flex-1"></div>
                        </div>
                        {/* Timeline Right (Image & Summary) */}
                        <div className="flex-1">
                            <div className="p-2 shadow-md rounded bg-white dark:bg-white/[0.05]">
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <Image className="h-48 w-full object-cover rounded" alt="oracle" src={exp.image} />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-400 text-sm py-2">{exp.summary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}