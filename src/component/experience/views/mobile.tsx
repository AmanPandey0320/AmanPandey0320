import { Box, Divider, Grid2 } from "@mui/material";
import styles from "./styles.module.scss";
import oracle from "@/assets/images/oracle.png";
import Image from "next/image";

export default function MobileView() {
    return (
        <Box sx={{ padding: '0.5rem' }}>
            <Grid2 direction={"column"} container>
                <Grid2>
                    <div className={`${styles.timelineContentBox}`} >
                        <Grid2 direction={"column"} container spacing={1}>
                            <Grid2>
                                <Image className={`${styles.timelineContentImage}`} alt="oracle" src={oracle} />
                            </Grid2>
                            <Grid2>
                                <p className={`${styles.timelineContentText}`}>
                                    {"Working on cutting-edge cloud native applications and leading a team of talented engineers to deliver high-quality software solutions for 5G-Core network."}
                                </p>
                            </Grid2>
                        </Grid2>
                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.timelineContentHeader}`}>
                        {"Associate Software Developer"}
                    </p>
                </Grid2>
                <Grid2>
                    <Grid2 direction={"row"} sx={{ justifyContent: 'space-between' }} container>
                        <Grid2>
                            <span className={`${styles.timelineContentCompanyName}`}>
                                {"Oracle India Pvt. Ltd."}
                            </span>

                        </Grid2>
                        <Grid2>
                            <span className={`${styles.timelineContentDuration}`}>
                                {"Aug 2023 - present"}
                            </span>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2>
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

                </Grid2>
                <Grid2>
                    <Divider />
                </Grid2>
            </Grid2>
        </Box>
    )
}