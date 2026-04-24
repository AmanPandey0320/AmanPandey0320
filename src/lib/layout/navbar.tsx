"use client"
import { NavBarItems } from "@/assets/data/navData";
import { ThemeToggleButton } from "../context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuTerminal } from "react-icons/lu";

export default function NavBar() {
    const pathname = usePathname();
    if (pathname === '/terminal') return null;

    return (
    <header className="fixed top-0 z-9999 bg-white h-16 w-full flex flex-row font-(family-name:--font-roboto) justify-between items-center px-6 shadow-md/15 dark:bg-black/95 relative">
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
                <Link
                    href="/terminal"
                    className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded border border-green-500/60 text-green-500 hover:bg-green-500/10 font-mono text-sm font-semibold transition-colors"
                    title="Open terminal mode"
                >
                    <LuTerminal className="text-base" /> terminal
                </Link>
                <ThemeToggleButton/>
            </div>
        </header>
    )

}