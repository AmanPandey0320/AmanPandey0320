import oracleImg from "@/assets/images/oracle.png";
import oracleRedImg from "@/assets/images/oracle_red.png";
import geHealthcare from "@/assets/images/ge_healthcare.png";
import { FaBriefcase, FaBug, FaTv } from "react-icons/fa6";
import { SiHelm, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";




export default {
    "header": "Professional Experience",
    intro: "My professional path blends collaboration with top industry experts and pioneering startups.",
    experiences: [
        {
            id:"oracle_2023",
            title:"Associate Software Developer",
            company:"Oracle India Pvt. Ltd.",
            duration:"Aug 2023 - Present",
            image: oracleImg,
            summary:"Working on cutting-edge cloud native applications and leading a team of talented engineers to deliver high-quality software solutions for 5G-Core network.",
            dotIcon: FaBriefcase,
            details:[
                "Spearheaded and executed comprehensive benchmarking strategies to evaluate the performance of the product, identifying key areas for optimization and ensuring alignment with industry standards and performance targets.",
                "Enabled multiple admin access in IAM, enhancing role-based management and control over user permissions. Implemented comprehensive logging of critical user events, ensuring improved tracking and auditability of activities. Developed and configured key metrics pegging, enabling efficient monitoring and analysis of user interactions and system usage",
                "Implemented TLSv1.3 based communication between microservices, configuring a specific set of allowed ciphers while eliminating deprecated ones previously used by default",
                "Resolved issues with API gateway to enhance responsiveness and mitigate D-DOS vulnerabilities, achieving a 20x improvement in response time"
            ],
            techStackUsed:[
                {
                    id:"java",
                    text:"Java",
                    icon: FaJava
                },
                {
                    id:"spring_boot",
                    text:"Spring Boot",
                    icon: SiSpringboot
                },
                {
                    id:"sql",
                    text:"MySQL",
                    icon:SiMysql
                },
                {
                    id:"reactjs",
                    text:"ReactJS",
                    icon:FaReact
                },
                {
                    id:"javascript",
                    text:"JavaScript",
                    icon:SiJavascript
                },
                {
                    id:"git",
                    text:"Git",
                    icon:SiGit,
                },
                {
                    id:"docker",
                    text:"Docker",
                    icon: SiDocker
                },
                {
                    id:"kubernetes",
                    text:"Kubernetes",
                    icon: SiKubernetes
                },
                {
                    id:"Helm",
                    text:"Helm",
                    icon: SiHelm
                }
            ]
        },
        {
            id:"intern_oracle_2023",
            title:"Product Intern",
            company:"Oracle India Pvt. Ltd.",
            duration:"Jan 2023 - June 2023",
            image: oracleRedImg,
            summary:"As an intern, I primarily focused on learning new technologies, performing testing tasks, and contributing to development efforts to support the team.",
            dotIcon: FaBug,
            details:[
                "Optimized docker image size by 30% through custom JRE build implementation instead of JDK, resulting in resource savings",
                "Refactored codebase to integrate with Spring Boot 3.1 across project components, enhancing security by addressing critical vulnerabilities",
                "Conducted comprehensive testing, including LDAP and SAML integrations, in both HTTP and HTTPS environments"
            ],
            techStackUsed:[
                {
                    id:"java",
                    text:"Java",
                    icon: FaJava
                },
                {
                    id:"spring_boot",
                    text:"Spring Boot",
                    icon: SiSpringboot
                }
            ]
        },
        {
            id:"intern_ge_healthcare_2022",
            title:"EID Intern",
            company:"GE Healthcare",
            duration:"May 2022 - July 2022",
            image: geHealthcare,
            summary:"Worked with a team develop and maintain cutting-edge medical software solutions, ensuring high performance, reliability, and compliance with healthcare standards. They collaborate with cross-functional teams to innovate and enhance diagnostic, imaging, and patient care technologies.",
            dotIcon: FaTv,
            details:[
                "Engineered an automated system for real-time detection of network proxies, reducing operational time for field engineers by 25%",
                "Implemented data center lookups and TCP/IP fingerprint test to detect client-side proxies",
                "Automated IP address retrieval based on Autonomous System Numbers (ASNs), achieving a 20-fold increase in speed and significant cost savings for the company"
            ],
            techStackUsed:[
                {
                    id:"bash",
                    text:"Bash",
                    icon:SiGnubash
                },
                {
                    id:"typescript",
                    text:"TypeScript",
                    icon:SiTypescript
                },
                {
                    id:"sql",
                    text:"MySQL",
                    icon: SiMysql
                }
            ]
        },
        
    ]
}