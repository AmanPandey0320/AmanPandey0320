import globalStyle from "@/component/styles.module.scss";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import { education } from "../style";

export default function Projects(){
    return(
        <Box id="education" className={`${globalStyle.boxStyle} ${globalStyle.bgColorGrey}`} component={"section"}>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} container spacing={4}>
                <Grid2 >
                    <Typography sx={education.sectionHeaderText} variant="h2">
                        {`Projects`}
                    </Typography>
                    <div style={education.sectionHeaderUnderline} >

                    </div>
                </Grid2>
            </Grid2>
        </Box>
    )
}