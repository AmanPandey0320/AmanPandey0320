import { color } from "@/component/style";
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
import styles from "./styles.module.scss";
import oracle from "@/assets/images/oracle.png";
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
                                    <p className={`${styles.timelineContentHeader}`}>
                                        {exp.title}
                                    </p>
                                    <p className={`${styles.timelineContentCompanyName}`}>
                                        {exp.company}
                                    </p>
                                    <p className={`${styles.timelineContentDuration}`}>
                                        {exp.duration}
                                    </p>
                                    <ul className={`${styles.timelineExperienceDetail}`} >
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
                                    <Grid2 direction={"row-reverse"} spacing={1} container>
                                        {
                                            exp.techStackUsed.reverse().map((tech, tsIdx) => {
                                                return (
                                                    <Grid2 key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`} >
                                                        <Image style={{height:'2rem',width:'2rem'}} alt={tech.text} src={tech.icon}/>
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
                                    <TimelineDot sx={{ background: color.blue }} >
                                        <exp.dotIcon sx={{ color: color.white }} />
                                    </TimelineDot>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className={`${styles.timelineContentBox}`} >
                                        <Grid2 direction={"column"} container spacing={1}>
                                            <Grid2>
                                                <Image className={`${styles.timelineContentImage}`} alt="oracle" src={exp.image} />
                                            </Grid2>
                                            <Grid2>
                                                <p className={`${styles.timelineContentText}`}>
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