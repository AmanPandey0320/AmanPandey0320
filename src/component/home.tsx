import { Box, Button, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import { home } from "./style";
import Image from "next/image";
import img from "@/assets/images/img.jpeg";

export default function Home() {
    return (
        <Box
            id="home"
            sx={home.boxStyle}
        >
            <Grid2 direction={"row"} sx={{ paddingTop: '8rem' }} spacing={{xs:6, lg:1}} container>
                <Grid2 size={{ lg: 7, md: 6, xs: 12 }}>
                    <Grid2 direction={"column"} container>
                        <Grid2>
                            <Typography
                                variant="h1"
                                sx={home.helloStyle}
                            >
                                {`Hello, I'm`}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography
                                variant="h1"
                                sx={home.nameStyle}
                            >
                                {`Aman Kr Pandey`}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography
                                variant="h2"
                                sx={home.positionStyle}
                            >
                                {`Full Stack Software Developer`}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <p
                                style={home.introTextStyle}
                            >
                                {`I'm a Software Developer with a passion for building scalable, high-performance applications.   I strive to optimize systems for efficiency, security, tackling complex problems and continuously learning new technologies. I take pride in building solutions that make an impact.`}
                            </p>
                            <p style={home.introTextStyle}>
                                {`Let’s create something amazing together!`}
                            </p>
                        </Grid2>
                        <Grid2>
                            <Grid2 direction={"row"} spacing={3} container>
                                <Grid2>
                                    <Link style={{ textDecoration: 'none' }} href={"#contact"} passHref>
                                        <Typography sx={home.filledBlueLink}>
                                            {`Let's Connect`}
                                        </Typography>
                                    </Link>
                                </Grid2>

                                <Grid2>
                                    <Link style={{ textDecoration: 'none' }} href={"#contact"} passHref>
                                        <Typography sx={home.outlinedTransparentLink}>
                                            {`View Projects`}
                                        </Typography>
                                    </Link>
                                </Grid2>

                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ lg: 5, md: 6, xs: 12 }}>
                    <Box sx={home.imageStyle} >
                        <Image style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: home.imageStyle.borderRadius
                        }} alt="aman's image" src={img} />
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}