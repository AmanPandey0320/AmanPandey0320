import { Box, Grid2, Icon, Typography } from "@mui/material";
import { about } from "./style";
import sweImg from "@/assets/images/about.png";
import Image from "next/image";
import styles from "./styles.module.scss";
import aboutData from "@/assets/data/aboutData";
import Link from "next/link";

export default function About() {
    return (
        <Box
            id="about"
            component={"section"}
            sx={about.boxStyle}
        >
            <Grid2 direction={"column"} spacing={{ xs: 4, lg: 6 }} container>
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
                                <Image className={`${styles.sweImage}`} src={sweImg} alt="Software Engineer" />
                            </div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 8, lg: 6 }} >
                            <Grid2 spacing={1} direction={"column"} container>
                                <Grid2>
                                    <Typography style={about.sweText} variant="h3">
                                        {"Software Engineer & Problem Solver"}
                                    </Typography>
                                    <>
                                        {
                                            aboutData.intro.map((text, idx) => {
                                                return (
                                                    <p key={`intro_txt_${idx}`} className={`${styles.sweText}`} >
                                                        {`${text}`}
                                                    </p>
                                                )
                                            })
                                        }
                                    </>
                                </Grid2>
                                <Grid2>
                                    <Grid2 container direction={"row"} wrap="wrap">
                                        {
                                            aboutData.parameter.filter((data) => data.enabled).map((data, idx) => {
                                                return (
                                                    <Grid2 spacing={2} sx={{ paddingY: '0.5rem' }} key={`parameter_${data.id}_${idx}`} size={{ xs: 6 }}>
                                                        <Grid2 direction={"row"} spacing={2} sx={{ alignItems: "center" }} container>
                                                            <Grid2>
                                                                <div className={`${styles.sweIcon}`}>
                                                                    <Icon>
                                                                        <data.icon />
                                                                    </Icon>
                                                                </div>
                                                            </Grid2>
                                                            <Grid2>
                                                                <Typography sx={{ fontWeight: 700 }}>
                                                                    {data.title}
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#4b5563' }}>
                                                                    {data.detail}
                                                                </Typography>
                                                            </Grid2>
                                                        </Grid2>
                                                    </Grid2>
                                                )
                                            })
                                        }
                                    </Grid2>
                                </Grid2>
                                <Grid2>
                                    <br/>
                                    <Grid2 direction={"row"} spacing={1} container>
                                        <Grid2>
                                            <Link style={{ textDecoration: 'none' }} href={"#project"} passHref>
                                                <Typography sx={about.filledBlueLink}>
                                                    {`Browse Projects`}
                                                </Typography>
                                            </Link>
                                        </Grid2>
                                        <Grid2>
                                            <Link style={{ textDecoration: 'none' }} href={aboutData.resume} legacyBehavior passHref>
                                                <a target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                                    <Typography sx={about.outlineBlueLink}>
                                                        {`Download Resume`}
                                                    </Typography>
                                                </a>
                                            </Link>
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