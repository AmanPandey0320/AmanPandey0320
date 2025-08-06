import { Grid2, Icon } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { AchievementsData } from "@/lib/types/EducationData"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function AchievementsView({ acv }: { acv: AchievementsData }) {
    return (
        <div className={`${styles.eduWrapperBox}`} >
            <Grid2 direction={"column"} sx={{ padding: "16px" }} container>
                <Grid2 direction={"row"} spacing={2} alignItems={"center"} container>
                    <Grid2>
                        <div style={{ width: "64px", height: "64px" }}>
                            <Image src={acv.img} style={{ borderRadius: "32px" }} alt={acv.title} layout="responsive" />
                        </div>
                    </Grid2>
                    <Grid2>
                        <h4 className={`${styles.eduInstituteHeading}`} >
                            {acv.title}
                        </h4>
                        <p className={`${styles.achivementIssuedby}`}>
                            {acv.issuesBy}
                        </p>
                        <Grid2 direction={"row"} sx={{ alignItems: 'center', marginTop: "8px" }} container>
                            <Grid2 direction={"row"} sx={{ alignItems: 'center',marginRight:"16px" }} container>
                                <Icon color="info" style={{ fontSize: "medium" }}>
                                    <CalendarTodayIcon style={{ fontSize: "medium" }}/>
                                </Icon>
                                <span style={{ fontSize: "small", color: "#4b5563" }}>
                                    Issued:{acv.issued}
                                </span>
                            </Grid2>
                            {acv.expires && <Grid2 direction={"row"} sx={{ alignItems: 'center' }} container>
                                <Icon color="info" style={{ fontSize: "medium" }}>
                                    <AccessTimeIcon style={{ fontSize: "medium" }}/>
                                </Icon>
                                <span style={{ fontSize: "small", color: "#4b5563" }}>
                                    Expires:{acv.expires}
                                </span>
                            </Grid2>}
                        </Grid2>
                    </Grid2>

                </Grid2>
                <Grid2>
                    <p style={{color:"#4b5563"}}>{acv.summary}</p>
                </Grid2>
            </Grid2>
        </div>
    );
}