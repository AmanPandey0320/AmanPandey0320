import { Box, Grid2, Icon, Paper, Typography } from "@mui/material";
import styles from "./styles.module.scss"
import { skills } from "./style";
import skillsData from "@/assets/data/skillsData";
import { CheckCircle } from "@mui/icons-material";

export default function Skills() {
    return (
        <Box id="skills" className={`${styles.boxStyle} ${styles.bgColorGrey}`} component={"section"}>
            <Grid2 container sx={{ alignItems: 'center' }} spacing={3} direction={"column"}>
                <Grid2>
                    <Typography sx={skills.sectionHeaderText} variant="h2">
                        {`Technical Skills`}
                    </Typography>
                    <div style={skills.sectionHeaderUnderline} >

                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.sweText}`}>
                        {`${skillsData.intro}`}
                    </p>
                </Grid2>
                <Grid2>

                    <Grid2 direction={"row"} wrap="wrap" spacing={{ lg: 3, sm: 2, xs: 1 }} container>
                        {
                            skillsData.skills.map((data, idx) => {
                                return (
                                    <Grid2 size={{ lg: 4, sm: 6, xs: 12 }} key={`skill_${data.id}_${idx}`} >
                                        <Paper sx={skills.paperStyle}>
                                            <Grid2 direction={"column"} spacing={1} container>
                                                <Grid2>
                                                    <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                                        <Grid2>
                                                            <div className={styles.sweIcon}>
                                                                <Icon>
                                                                    <data.icon />
                                                                </Icon>
                                                            </div>
                                                        </Grid2>
                                                        <Grid2>
                                                            <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.25rem', lineHeight: '1.75rem' }} >
                                                                {`${data.title}`}
                                                            </Typography>
                                                        </Grid2>
                                                    </Grid2>
                                                </Grid2>
                                                <Grid2>
                                                    <br />
                                                </Grid2>
                                                {
                                                    data.detail.map((skill, dtIdx) => {
                                                        return (
                                                            <Grid2 key={`skill_${data.id}_${idx}_${dtIdx}`}>
                                                                <Grid2 direction={"row"} spacing={1} container>
                                                                    <Grid2>
                                                                        <Icon fontSize="small" sx={{ color: '#21c45d' }} >
                                                                            <CheckCircle fontSize="small" />
                                                                        </Icon>
                                                                    </Grid2>
                                                                    <Grid2><Typography>
                                                                        {`${skill}`}
                                                                    </Typography></Grid2>
                                                                </Grid2>
                                                            </Grid2>
                                                        )
                                                    })
                                                }
                                            </Grid2>
                                        </Paper>
                                    </Grid2>
                                )
                            })
                        }
                    </Grid2>

                </Grid2>
            </Grid2>
        </Box>
    )
}