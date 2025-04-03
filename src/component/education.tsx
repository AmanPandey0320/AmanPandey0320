import { Box, Grid2, Icon, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Done, SchoolOutlined, VerifiedOutlined } from "@mui/icons-material";
import { education } from "./style";
import Image from "next/image";
import nitjsrImg from "@/assets/images/nitjsr.png";

export default function Education() {
    return (
        <Box id="education" className={`${styles.boxStyle} ${styles.bgColorGrey}`} component={"section"}>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} container spacing={4}>
                <Grid2 >
                    <Typography sx={education.sectionHeaderText} variant="h2">
                        {`Education`}
                    </Typography>
                    <div style={education.sectionHeaderUnderline} >

                    </div>
                </Grid2>
                <Grid2>
                    <p className={`${styles.sweText}`}>
                        {`My academic background and professional certifications that form the foundation of my technical expertise.`}
                    </p>
                    <br />
                </Grid2>
            </Grid2>
            <Grid2 spacing={1} direction={"row"} container>

                <Grid2 size={{ sm: 12, md: 6 }} id="cources">
                    <Grid2 direction={"column"} container>
                        <Grid2>
                            <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                <Grid2>
                                    <div className={styles.eduIcon}>
                                        <Icon fontSize="large">
                                            <SchoolOutlined fontSize="large" />
                                        </Icon>
                                    </div>

                                </Grid2>
                                <Grid2>
                                    <Typography sx={education.subHeadingText} component={"h3"}>
                                        {"Formal Education"}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2>
                            <div className={`${styles.eduWrapperBox}`} >
                                <Grid2 direction={"row"} container>
                                    <Grid2 component={"div"} className={`${styles.eduInstitute}`} size={4} >
                                        <div className={`${styles.eduInstituteIcon}`}>
                                            <Image className={`${styles.eduInstituteImg}`} src={nitjsrImg} alt="nitjsr" />
                                        </div>
                                        <h4 className={`${styles.eduInstituteHeading}`} >
                                            {`NIT Jamshedpur`}
                                        </h4>
                                        <p className={`${styles.eduInstituteDuration}`}>
                                            {`2019-23`}
                                        </p>

                                    </Grid2>
                                    <Grid2 component={"div"} className={`${styles.eduDetailWrapper}`} size={8}>
                                        <Grid2 direction={"column"} container>
                                            <Grid2>
                                                <Grid2 direction={"row"} sx={{ justifyContent: "space-between", alignItems: 'center' }} container>
                                                    <Grid2 className={`${styles.eduDetailDegree}`} component={"span"} >
                                                        {"B.Tech"}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.greenBG}`} component={"span"} >
                                                        {"CGPA: 8.29/10"}
                                                    </Grid2>
                                                </Grid2>
                                                <p className={`${styles.eduInstituteCourse}`}>
                                                    {`Computer Science and Technology`}
                                                </p>
                                            </Grid2>
                                            <Grid2>
                                                <p>
                                                    {`Achieved honors distinction through rigorous study and application of fundamental computer science principles across diverse areas.`}
                                                </p>
                                            </Grid2>
                                            <Grid2>
                                                <p className={`${styles.eduKeyCourcesHead}`} >
                                                    {"Key Cources:"}
                                                </p>
                                                <Grid2 direction={"row"} wrap="wrap" spacing={1} container>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`DBMS`}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`Operating System`}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`Cloud Computing`}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`DSA`}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`Computer Networks`}
                                                    </Grid2>
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`Web Technologies`}
                                                    </Grid2>
                                
                                                    <Grid2 className={`${styles.eduDetailDegreeSmallBold} ${styles.blueBG}`} component={"span"} >
                                                        {`AI`}
                                                    </Grid2>
                                                </Grid2>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </div>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 6 }} id="certificates">
                    <Grid2 direction={"column"} container>
                        <Grid2>
                            <Grid2 direction={"row"} spacing={1} sx={{ alignItems: 'center' }} container>
                                <Grid2>
                                    <div className={styles.eduIcon}>
                                        <Icon fontSize="large">
                                            <VerifiedOutlined fontSize="large" />
                                        </Icon>
                                    </div>

                                </Grid2>
                                <Grid2>
                                    <Typography sx={education.subHeadingText} component={"h3"}>
                                        {"Achivements & Certificates"}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}