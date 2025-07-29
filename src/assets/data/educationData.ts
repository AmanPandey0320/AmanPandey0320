import nitjsrImg from "@/assets/images/nitjsr.png";
import oracleSq from "@/assets/images/oracle_red_sq.jpg";
import hsmsImage from "@/assets/images/hsms.jpg";


export default {
    id: "education",
    heading: "Education",
    title: "My academic background and professional certifications that form the foundation of my technical expertise.",
    formal: [
        {
            id: "nitjsr_2019_23",
            degree: "Bachelor of Technology",
            course: "Computer Science and Technology",
            marks: "CGPA: 8.29/10",
            img: nitjsrImg,
            duration: "2019 - 2023",
            name: "NIT Jamshedpur",
            summary: "Achieved honors distinction through rigorous study and application of fundamental computer science principles across diverse areas",
            subjects: ["DBMS", "Operating System", "Cloud Computing", "DSA", "Computer Network", "Web Technology", "AI"]
        },
        {
            id: "hsms_2016_18",
            degree: "Secondary School Certificate",
            course: "Class 12 (Science)",
            marks: "Percentage: 92%",
            img: hsmsImage,
            duration: "2016 - 2018",
            name: "HemSheela Model School",
            summary: "Completed secondary education with a focus on science, laying a strong foundation in mathematics and computers.",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
        }
    ],
    achievements: [
        {
            id: "cgiu_2025",
            title: "CNCC SPOT Award for CY-2025",
            issued: "July-2025",
            issuesBy: "Oracle, Communication Global Industry Unit",
            summary: "Recognized for outstanding contribution for CY-2025",
            img: oracleSq
        },
        {
            id: "cgiu_2024",
            title: "CNCC SPOT Award for CY-2024",
            issued: "July-2024",
            issuesBy: "Oracle, Communication Global Industry Unit",
            summary: "Recognized for outstanding contribution for CY-2024",
            img: oracleSq
        },
        {
            id: "nitjst_2023",
            title: "1st Runner Up in Hack-de-Science",
            issued: "Mar-2022",
            issuesBy: "National Institute of Technology, Jamshedpur",
            summary: "1st runner up in 24 hour hackathon organized by NIT Jamshedpur for creating a multi tenant application for managing hiring processes of multiple companies, over dedicated and shared cloud architecture.",
            img: nitjsrImg
        },

    ]
}