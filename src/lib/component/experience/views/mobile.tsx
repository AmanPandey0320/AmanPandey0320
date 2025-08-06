import { Box, Divider, Grid2 } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import experienceData from "@/assets/data/experienceData";

export default function MobileView() {
    return (
        <Box sx={{ padding: '0.5rem' }}>
            <Grid2 direction={"column"} container>
                {
                    experienceData.experiences.map((exp, idx) => {
                        return (
                            <Grid2 key={`${exp.id}_${idx}`}>
                                <Grid2 direction={"column"} container>
                                    <Grid2>
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
                                    </Grid2>
                                    <Grid2>
                                        <p className={`${styles.timelineContentHeader}`}>
                                            {exp.title}
                                        </p>
                                    </Grid2>
                                    <Grid2>
                                        <Grid2 direction={"row"} sx={{ justifyContent: 'space-between' }} container>
                                            <Grid2>
                                                <span className={`${styles.timelineContentCompanyName}`}>
                                                    {exp.company}
                                                </span>

                                            </Grid2>
                                            <Grid2>
                                                <span className={`${styles.timelineContentDuration}`}>
                                                    {exp.duration}
                                                </span>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                    <Grid2>
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
                                        <br />
                                        <Grid2 direction={"row-reverse"} spacing={1} container>
                                            {
                                                exp.techStackUsed.reverse().map((tech, tsIdx) => {
                                                    return (
                                                        <Grid2 key={`${exp.id}_${idx}_ts_${tech.id}_${tsIdx}`} >
                                                            <Image style={{ height: '2rem', width: '2rem' }} alt={tech.text} src={tech.icon} />
                                                        </Grid2>
                                                    )
                                                })
                                            }
                                        </Grid2>
                                    </Grid2>
                                    <Grid2>
                                        <br/>
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