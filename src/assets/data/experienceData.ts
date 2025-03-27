import helm from "@/assets/icons/helm.svg";
import java from "@/assets/icons/java.svg";
import docker from "@/assets/icons/docker.svg";
import kubernetes from "@/assets/icons/kubernetes.svg";
import springBoot from "@/assets/icons/spring-boot.svg";
import git from "@/assets/icons/git.svg";
import mysql from "@/assets/icons/mysql.svg";
import python from "@/assets/icons/python.svg";
import bash from "@/assets/icons/bash.png";
import oracleImg from "@/assets/images/oracle.png";
import oracleRedImg from "@/assets/images/oracle_red.png";
import geHealthcare from "@/assets/images/ge_healthcare.png";
import { BugReportOutlined, BusinessCenterOutlined, TvOutlined } from "@mui/icons-material";

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
            dotIcon: BusinessCenterOutlined,
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
                    icon: java
                },
                {
                    id:"spring_boot",
                    text:"Spring Boot",
                    icon: springBoot
                },
                {
                    id:"sql",
                    text:"MySQL",
                    icon:mysql
                },
                {
                    id:"git",
                    text:"Git",
                    icon:git,
                },
                {
                    id:"docker",
                    text:"Docker",
                    icon: docker
                },
                {
                    id:"kubernetes",
                    text:"Kubernetes",
                    icon: kubernetes
                },
                {
                    id:"Helm",
                    text:"Helm",
                    icon: helm
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
            dotIcon: BugReportOutlined,
            details:[
                "Optimized docker image size by 30% through custom JRE build implementation instead of JDK, resulting in resource savings",
                "Refactored codebase to integrate with Spring Boot 3.1 across project components, enhancing security by addressing critical vulnerabilities",
                "Conducted comprehensive testing, including LDAP and SAML integrations, in both HTTP and HTTPS environments"
            ],
            techStackUsed:[
                {
                    id:"java",
                    text:"Java",
                    icon: java
                },
                {
                    id:"spring_boot",
                    text:"Spring Boot",
                    icon: springBoot
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
            dotIcon: TvOutlined,
            details:[
                "Engineered an automated system for real-time detection of network proxies, reducing operational time for field engineers by 25%",
                "Implemented data center lookups and TCP/IP fingerprint test to detect client-side proxies",
                "Automated IP address retrieval based on Autonomous System Numbers (ASNs), achieving a 20-fold increase in speed and significant cost savings for the company"
            ],
            techStackUsed:[
                {
                    id:"bash",
                    text:"Bash",
                    icon:bash
                },
                {
                    id:"python",
                    text:"Python",
                    icon:python
                },
                {
                    id:"sql",
                    text:"MySQL",
                    icon:mysql
                }
            ]
        },
        
    ]
}