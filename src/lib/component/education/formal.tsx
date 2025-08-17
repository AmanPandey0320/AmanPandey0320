import EducationData from "@/lib/types/EducationData";
import Image from "next/image";

export default function FormalEducationView({ edu }: { edu: EducationData }) {
    return (
        <div className="grid grid-cols-10 rounded shadow">
            <div className="col-span-4 flex flex-col bg-blue-500 dark:bg-gray-800 items-center justify-center p-8 rounded-s">
                <div className="p-2 bg-gray-50 rounded-full">
                    <Image
                        className={`h-16 w-16 rounded-full `}
                        src={typeof edu.img === 'string' ? edu.img : edu.img}
                        alt={edu.name}
                        width={100}
                        height={100}
                        priority={true}
                    />
                </div>
                <span className="text-gray-50 font-semibold">{edu.name}</span>
                <span className="text-gray-200 dark:text-gray-300 font-medium text-xs">{edu.duration}</span>
            </div>
            <div className="col-span-6 flex flex-col bg-white dark:bg-white/[0.1] rounded-e py-2 px-3 justify-between">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {edu.degree}
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                                {edu.course}
                            </span>
                        </div>
                        <span className="bg-green-600/10 dark:bg-white/[0.125] dark:text-gray-100 py-2 px-4 rounded-full text-xs text-green-700 font-semibold">
                            {edu.marks}
                        </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-400 text-justify">
                        {edu.summary}
                    </p>
                </div>
                <div className="flex flex-row gap-1 flex-wrap">
                    {edu.subjects.map((s, i) => <span className="text-xs bg-blue-600/10 dark:bg-white/[0.125] text-blue-600 dark:text-gray-400 font-thin py-1 px-2 rounded-full" key={i}>{s}</span>)}
                </div>
            </div>
        </div>
    )
}