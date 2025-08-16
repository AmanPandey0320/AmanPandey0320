import { color } from "@/lib/component/style";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import { Box, Grid2 } from "@mui/material";
import Image from "next/image";
import experienceData from "@/assets/data/experienceData";

export default function DesktopView() {
    return (
        <Box>
            <Timeline position="alternate">
                {
                    experienceData.experiences.map((exp, idx) => {
                        return (
                            <TimelineItem key={`${exp.id}_${idx}`}>
                                <TimelineOppositeContent sx={{ m: 'auto 0' }} align="left" variant="body2" color="textSecondary" >
                                    <p className="text-gray-900 text-xl font-semibold dark:text-gray-100">
                                        {exp.title}
                                    </p>
                                    <p className="text-blue-600 text-lg font-semibold dark:text-gray-300">
                                        {exp.company}
                                    </p>
                                    <p className="text-gray-600 text-sm dark:text-gray-500">
                                        {exp.duration}
                                    </p>
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
                                    <br/>
                                    <Grid2 direction={"row"} justifyContent={idx%2 == 0?"end":"start"} spacing={1} container>
                                        {
                                            exp.techStackUsed.reverse().map((tech, tsIdx) => {
                                                return (
                                                    <Grid2 key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`} >
                                                        <tech.icon className="text-gray-700 dark:text-gray-400" size={24}/>
                                                    </Grid2>
                                                )
                                            })
                                        }
                                    </Grid2>
                                    <div style={{minHeight:'4rem'}} >
                                        
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ background: color.blue, padding:"8px" }} >
                                        <exp.dotIcon className="text-white" size={16} />
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
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
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </Box>
    )
}