"use client"

import { Grid2, Typography, useMediaQuery } from "@mui/material";
import MobileView from "./views/mobile";
import DesktopView from "./views/desktop";
import Link from "next/link";
import aboutData from "@/assets/data/aboutData";
import { about } from "../style";

export default function ExperienceView() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
            <Grid2 direction={"row"} justifyContent={"space-around"} container>
                <Grid2>
                    <Link style={{ textDecoration: 'none' }} href={aboutData.resume} legacyBehavior passHref>
                        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Typography sx={about.outlineBlueLink}>
                                {`Download Full Resume`}
                            </Typography>
                        </a>
                    </Link>
                </Grid2>
            </Grid2>
        </>
    )
}