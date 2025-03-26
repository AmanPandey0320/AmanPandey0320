import { color } from "@/component/style";
import { BusinessCenterOutlined } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Grid2, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import oracle from "@/assets/images/oracle.png";
import Image from "next/image";

export default function DesktopView(){
    return(
        <Box>
            <Timeline position="alternate">
                <TimelineItem >
                    <TimelineOppositeContent sx={{m: 'auto 0'}} align="right" variant="body2" color="textSecondary" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit esse quidem in cumque nulla soluta natus reiciendis eos culpa laudantium amet sapiente beatae pariatur quos ducimus, laborum nostrum ab.
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