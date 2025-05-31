import { Grid2 } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import EducationData from "@/lib/types/EducationData"

export default function FormalEducationView({ edu }: {edu:EducationData}) {
    return (
        <div className={`${styles.eduWrapperBox}`} >
            <Grid2 direction={"row"} container>
                <Grid2 component={"div"} className={`${styles.eduInstitute}`} size={{ xs: 12, lg: 4 }} >
                    <div className={`${styles.eduInstituteIcon}`}>
                        <Image className={`${styles.eduInstituteImg}`} src={edu.img} alt={edu.name} />
                    </div>
                    <h4 className={`${styles.eduInstituteHeading}`} >
                        {edu.name}
                    </h4>
                    <p className={`${styles.eduInstituteDuration}`}>
                        {edu.duration}
                    </p>

                </Grid2>
                <Grid2 component={"div"} className={`${styles.eduDetailWrapper}`} size={{ xs: 12, lg: 8 }}>
                    <Grid2 direction={"column"} container>
                        <Grid2>
                            <Grid2 direction={"row"} sx={{ justifyContent: "space-between", alignItems: 'center' }} container>
                                <Grid2>
                                    <Grid2 direction={"column"} container>
                                        <Grid2 className={`${styles.eduDetailDegree}`} component={"span"} >
                                            {edu.degree}
                                        </Grid2>
                                        <Grid2>
                                            <p className={`${styles.eduInstituteCourse}`}>
                                                {edu.course}
                                            </p>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                                <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.greenBG}`} component={"span"} >
                                    {edu.marks}
                                </Grid2>
                            </Grid2>

                        </Grid2>
                        <Grid2>
                            <p>
                                {edu.summary}
                            </p>
                        </Grid2>
                        <Grid2>
                            <p className={`${styles.eduKeyCourcesHead}`} >
                                {"Key Cources:"}
                            </p>
                            <Grid2 direction={"row"} wrap="wrap" spacing={1} container>
                                {
                                    edu.subjects.map((sub: String) => {
                                        return (<Grid2 key={`${edu.id}_sub_${sub}`} className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                            {sub}
                                        </Grid2>)
                                    })
                                }

                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    )
}