import { Box, Divider, Grid2 } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import experienceData from "@/assets/data/experienceData";

export default function MobileView() {
    return (
        <Box sx={{}}>
            <Grid2 direction={"column"} container>
                {
                    experienceData.experiences.map((exp, idx) => {
                        return (
                            <Grid2 key={`${exp.id}_${idx}`}>
                                <Grid2 direction={"column"} container>
                                    <Grid2>
                                        <div className={`p-2 shadow-md rounded bg-white dark:bg-white/[0.05]`} >
                                            <Grid2 direction={"column"} container spacing={1}>
                                                <Grid2>
                                                    <Image className={`h-[12rem] rounded`} alt="oracle" src={exp.image} />
                                                </Grid2>
                                                <Grid2>
                                                    <p className={`text-gray-700 dark:text-gray-400 text-sm py-2`}>
                                                        {exp.summary}
                                                    </p>
                                                </Grid2>
                                            </Grid2>
                                        </div>
                                    </Grid2>
                                    <Grid2>
                                        <p className="text-gray-900 text-xl pt-2 font-semibold dark:text-gray-100">
                                            {exp.title}
                                        </p>
                                    </Grid2>
                                    <Grid2>
                                        <div className="flex flex-row justify-between items-center">
                                            <span className="text-blue-600 text-lg font-semibold dark:text-gray-300">
                                                {exp.company}
                                            </span>
                                            <span className="text-gray-600 text-sm dark:text-gray-500">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </Grid2>
                                    <Grid2>
                                        <ul className={`list-disc list-outside text-gray-700 dark:text-gray-400 text-justify pt-4`} >
                                            {
                                                exp.details.map((detail, dtIdx) => {
                                                    return (
                                                        <li key={`${exp.id}_${idx}_detail_${dtIdx}`} >
                                                            {detail}
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                        <br />
                                        <Grid2 direction={"row-reverse"} spacing={1} container>
                                            {
                                                exp.techStackUsed.reverse().map((tech, tsIdx) => {
                                                    return (
                                                        <Grid2 key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`} >
                                                            <tech.icon className="text-gray-700 dark:text-gray-400" size={24} />
                                                        </Grid2>
                                                    )
                                                })
                                            }
                                        </Grid2>
                                    </Grid2>
                                    <Grid2>
                                        <br />
                                        <Divider />
                                        <div style={{ minHeight: '2rem' }} >

                                        </div>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        )
                    })
                }
            </Grid2>
        </Box>
    )
}