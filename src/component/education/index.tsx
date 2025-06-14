import { Box, Grid2, Icon, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { SchoolOutlined, VerifiedOutlined } from "@mui/icons-material";
import { education } from "../style";
import educationData from "@/assets/data/educationData";
import FormalEducationView from "./formal";

export default function Education() {
    return (
        <Box id="education" className={`${styles.boxStyle} ${styles.bgColorGrey}`} component={"section"}>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} container spacing={4}>
                <Grid2 >
                    <Typography sx={education.sectionHeaderText} variant="h2">
                        {`${educationData.heading}`}
                    </Typography>
                    <div style={education.sectionHeaderUnderline} >

                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.sweText}`}>
                        {`${educationData.title}`}
                    </p>
                    <br />
                </Grid2>
            </Grid2>
            <Grid2 spacing={4} direction={"row"} container>

                <Grid2 size={{ sm: 12, md: 6 }} id="cources">
                    <Grid2 spacing={3} direction={"column"} container>
                        <Grid2>
                            <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                <Grid2>
                                    <div className={styles.eduIcon}>
                                        <Icon fontSize="large">
                                            <SchoolOutlined fontSize="large" />
                                        </Icon>
                                    </div>

                                </Grid2>
                                <Grid2>
                                    <Typography sx={education.subHeadingText} component={"h3"}>
                                        {"Formal Education"}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        {
                            educationData.formal.map(edu => {
                                return (
                                    <Grid2 key={edu.id}>
                                        <FormalEducationView edu={edu}/>
                                    </Grid2>
                                )
                            })
                        }
                    </Grid2>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 6 }} id="certificates">
                    <Grid2 direction={"column"} container>
                        <Grid2>
                            <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                <Grid2>
                                    <div className={styles.eduIcon}>
                                        <Icon fontSize="large">
                                            <VerifiedOutlined fontSize="large" />
                                        </Icon>
                                    </div>

                                </Grid2>
                                <Grid2>
                                    <Typography sx={education.subHeadingText} component={"h3"}>
                                        {"Achivements & Certificates"}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}