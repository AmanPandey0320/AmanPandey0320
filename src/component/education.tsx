import { Box, Grid2, Icon, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { SchoolOutlined } from "@mui/icons-material";
import { education } from "./style";

export default function Education() {
    return (
        <Box id="education" className={`${styles.boxStyle} ${styles.bgColorGrey}`} component={"section"}>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} container spacing={3}>
                <Grid2 >
                    <Typography sx={education.sectionHeaderText} variant="h2">
                        {`Education`}
                    </Typography>
                    <div style={education.sectionHeaderUnderline} >

                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.sweText}`}>
                        {`My academic background and professional certifications that form the foundation of my technical expertise.`}
                    </p>
                </Grid2>
                <Grid2>
                    <Grid2 spacing={1} direction={"row"} sx={{ justifyContent:'space-between' }} container>

                        <Grid2 size={{ sm: 12, md: 6 }} id="cources">
                            <Grid2 direction={"column"} container>
                                <Grid2>
                                    <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                        <Grid2>
                                            <div className={styles.sweIcon}>
                                                <Icon>
                                                    <SchoolOutlined />
                                                </Icon>
                                            </div>

                                        </Grid2>
                                        <Grid2>
                                            <Typography>
                                                {"Formal Education"}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={{ sm: 12, md: 6 }} id="certificates">
                            <Grid2 direction={"column"} container>
                                <Grid2>
                                    <Grid2 direction={"row"} spacing={1} container>
                                        <Grid2>
                                            <div className={styles.sweIcon}>
                                                <Icon>
                                                    <SchoolOutlined />
                                                </Icon>
                                            </div>

                                        </Grid2>
                                        <Grid2>
                                            <Typography>
                                                {"Formal Education"}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>

        </Box>
    )
}