"use client"

import { useMediaQuery } from "@mui/material";
import MobileView from "./views/mobile";
import DesktopView from "./views/desktop";

export default function ExperienceView() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
        </>
    )
}