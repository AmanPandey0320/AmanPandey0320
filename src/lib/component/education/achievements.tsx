import Image from "next/image";
import { AchievementsData } from "@/lib/types/EducationData"

export default function AchievementsView({ acv }: { acv: AchievementsData }) {
    return (
        // <div className={`${styles.eduWrapperBox}`} >
        //     <Grid2 direction={"column"} sx={{ padding: "16px" }} container>
        //         <Grid2 direction={"row"} spacing={2} alignItems={"center"} container>
        //             <Grid2>
        //                 <div style={{ width: "64px", height: "64px" }}>
        //                     <Image src={acv.img} style={{ borderRadius: "32px" }} alt={acv.title} layout="responsive" />
        //                 </div>
        //             </Grid2>
        //             <Grid2>
        //                 <h4 className={`${styles.eduInstituteHeading}`} >
        //                     {acv.title}
        //                 </h4>
        //                 <p className={`${styles.achivementIssuedby}`}>
        //                     {acv.issuesBy}
        //                 </p>
        //                 <Grid2 direction={"row"} sx={{ alignItems: 'center', marginTop: "8px" }} container>
        //                     <Grid2 direction={"row"} sx={{ alignItems: 'center',marginRight:"16px" }} container>
        //                         <Icon color="info" style={{ fontSize: "medium" }}>
        //                             <CalendarTodayIcon style={{ fontSize: "medium" }}/>
        //                         </Icon>
        //                         <span style={{ fontSize: "small", color: "#4b5563" }}>
        //                             Issued:{acv.issued}
        //                         </span>
        //                     </Grid2>
        //                     {acv.expires && <Grid2 direction={"row"} sx={{ alignItems: 'center' }} container>
        //                         <Icon color="info" style={{ fontSize: "medium" }}>
        //                             <AccessTimeIcon style={{ fontSize: "medium" }}/>
        //                         </Icon>
        //                         <span style={{ fontSize: "small", color: "#4b5563" }}>
        //                             Expires:{acv.expires}
        //                         </span>
        //                     </Grid2>}
        //                 </Grid2>
        //             </Grid2>

        //         </Grid2>
        //         <Grid2>
        //             <p style={{color:"#4b5563"}}>{acv.summary}</p>
        //         </Grid2>
        //     </Grid2>
        // </div>
        <div className="flex flex-row gap-2 rounded rounded-s-full shadow bg-gray-50 dark:bg-gray-800">
            <div className="rounded-s-full p-2" >
                <div className="h-16 w-16 rounded-full shadow-md">
                    <Image src={acv.img} className="h-16 w-16 rounded-full" alt={acv.title} />
                </div>
            </div>
            <div className="flex flex-col p-2 rounded-e" >
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100" >{acv.title}</h3>
                <p className="text-normal font-thin text-gray-600 dark:text-gray-300">{acv.issuesBy}</p>
                <div className="flex flex-row gap-2 rounded-e">
                    <span className="text-xs text-gray-400 font-thin dark:text-gray-500">Issued:{acv.issued}</span>
                    {
                        acv.expires && <span className="text-xs text-gray-400 font-thin">Expires:{acv.expires}</span>
                    }
                </div>
            </div>
        </div>
    );
}