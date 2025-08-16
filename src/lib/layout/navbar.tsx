"use client"
import { NavBarItems } from "@/assets/data/navData";
import { ThemeToggleButton } from "../context/ThemeContext";
import Link from "next/link";

export default function NavBar() {

    return (
        <header className="fixed top-0 z-9999 bg-white h-16 w-screen flex flex-row font-(family-name:--font-roboto) justify-between items-center px-6 shadow-md/15 dark:bg-black/95">
            <div>
                <h1 className="font-bold text-2xl font-(family-name:--font-heading) text-gray-700 dark:text-gray-200">{"/aman's canvas"}</h1>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-row gap-4 items-center hidden md:flex">
                    {
                        NavBarItems.map(i => <Link className="text-gray-700 font-semibold hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" key={i.id} href={`#${i.id}`}>
                            {i.text}
                        </Link>)
                    }
                </div>
                <ThemeToggleButton/>
            </div>
        </header>
    )

}