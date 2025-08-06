import { Box, Grid2, Typography } from "@mui/material";
import styles from "../styles.module.scss";
import { experience } from "../style";
import experienceData from "@/assets/data/experienceData";
import ExperienceView from "./experience";

export default function Experience() {
    return (
        <Box className={`${styles.boxStyle} ${styles.bgColorExperience}`} component={"section"} id="experience">
            <Grid2 sx={{ alignItems: 'center' }} spacing={3} direction={"column"} container>
                <Grid2>
                    <Typography sx={experience.sectionHeaderText} variant="h2">
                        {`${experienceData.header}`}
                    </Typography>
                    <div style={experience.sectionHeaderUnderline} >

                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.sweText}`}>
                        {`${experienceData.intro}`}
                    </p>
                </Grid2>
                <Grid2>
                    <ExperienceView/>
                </Grid2>
            </Grid2>
        </Box>
    )
}