"use client"

import { useEffect, useState } from "react";
import MobileView from "./views/mobile";
import DesktopView from "./views/desktop";
import Link from "next/link";
import aboutData from "@/assets/data/aboutData";

export default function ExperienceView() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
            <div className="flex flex-row justify-center mt-6">
                <Link href={aboutData.resume} target="_blank" rel="noopener noreferrer" className="no-underline">
                    <span className="inline-block px-6 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                        Download Full Resume
                    </span>
                </Link>
            </div>
        </>
    );
}