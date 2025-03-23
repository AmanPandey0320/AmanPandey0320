import { Box, Grid2, Typography } from "@mui/material";
import { about } from "./style";
import sweImg from "@/assets/images/about.png";
import Image from "next/image";

export default function About() {
    return (
        <Box
            id="about"
            component={"section"}
            sx={about.boxStyle}
        >
            <Grid2 direction={"column"} container>
                <Grid2>
                    <Typography sx={about.sectionHeaderText} variant="h2">
                        {`About Me`}
                    </Typography>
                    <div style={about.sectionHeaderUnderline} >
                    </div>
                </Grid2>
                <Grid2>
                    <Grid2 direction={"row"} spacing={1} container>
                        <Grid2 size={{ xs: 12, md: 4, lg: 6 }} >
                            <div style={{ textAlign: 'center' }}>
                                <Image style={about.sweImageStyle} src={sweImg} alt="Software Engineer" />
                            </div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 8, lg: 6 }} >

                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}