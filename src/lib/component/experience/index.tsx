import Page from "@/lib/layout/page";
import ExperienceView from "./experience";

export default function Experience() {
    return (
        <Page id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-900">
            <div className="pt-16">
                <ExperienceView />
            </div>
        </Page>
        // <section id="experience" className="min-h-screen p-8 md:px-16 pt-24 flex flex-col gap-2 bg-gray-50 dark:bg-gray-900" >
        //     <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
        //         {"Experience"}
        //     </h1>
        //     <span className="w-20 mx-auto border-b-4 border-blue-600 py-2"></span>
        //     <div className="pt-16">
        //         <ExperienceView />
        //     </div>
        // </section>
    )
}