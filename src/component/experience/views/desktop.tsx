import { color } from "@/component/style";
import { BusinessCenterOutlined } from "@mui/icons-material";
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

export default function DesktopView(){
    return(
        <Box>
            <Timeline position="alternate">
                <TimelineItem >
                    <TimelineOppositeContent sx={{m: 'auto 0'}} align="left" variant="body2" color="textSecondary" >
                        <p className={`${styles.timelineContentHeader}`}>
                            {"Associate Software Developer"}
                        </p>
                        <p className={`${styles.timelineContentCompanyName}`}>
                            {"Oracle India Pvt. Ltd."}
                        </p>
                        <p className={`${styles.timelineContentDuration}`}>
                            {"Aug 2023 - present"}
                        </p>
                        <ul className={`${styles.timelineExperienceDetail}`} >
                            <li>
                            {"Spearheaded and executed comprehensive benchmarking strategies to evaluate the performance of the product, identifying key areas for optimization and ensuring alignment with industry standards and performance targets."}
                            </li>
                            <li>
                                {"Enabled multiple admin access in IAM, enhancing role-based management and control over user permissions. Implemented comprehensive logging of critical user events, ensuring improved tracking and auditability of activities. Developed and configured key metrics pegging, enabling efficient monitoring and analysis of user interactions and system usage"}
                            </li>
                            <li>
                                {"Implemented TLSv1.3 based communication between microservices, configuring a specific set of allowed ciphers while eliminating deprecated ones previously used by default"}
                            </li>
                            <li>
                                {"Resolved issues with API gateway to enhance responsiveness and mitigate D-DOS vulnerabilities, achieving a 20x improvement in response time"}
                            </li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot sx={{background:color.blue}} >
                            <BusinessCenterOutlined sx={{color: color.white}} />
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={`${styles.timelineContentBox}`} >
                            <Grid2 direction={"column"} container spacing={1}>
                                <Grid2>
                                    <Image className={`${styles.timelineContentImage}`} alt="oracle" src={oracle}/>
                                </Grid2>
                                <Grid2>
                                    <p className={`${styles.timelineContentText}`}>
                                        {"Working on cutting-edge cloud native applications and leading a team of talented engineers to deliver high-quality software solutions for 5G-Core network."}
                                    </p>
                                </Grid2>
                            </Grid2>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}