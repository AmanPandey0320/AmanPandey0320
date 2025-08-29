import { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    title: string;
    className?: string;
    id: string
}

export default function Page({ children = null, title, className = "", id }: PageProps) {
    return (<section id={id} className={`xl:min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 pt-24 flex flex-col gap-2 box-border ${className}`} >
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
            {title}
        </h1>
        <span className="w-20 mx-auto border-b-4 border-blue-600 py-2"></span>
        {
            children && <>{children}</>
        }
    </section>)
}