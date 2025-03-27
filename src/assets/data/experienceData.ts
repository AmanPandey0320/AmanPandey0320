import helm from "@/assets/icons/helm.svg";
import java from "@/assets/icons/java.svg";
import docker from "@/assets/icons/docker.svg";
import kubernetes from "@/assets/icons/kubernetes.svg";
import springBoot from "@/assets/icons/spring-boot.svg";
import oracleImg from "@/assets/images/oracle.png";
import { BusinessCenterOutlined } from "@mui/icons-material";

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
        }
    ]
}