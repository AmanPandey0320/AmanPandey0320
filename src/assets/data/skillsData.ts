import { FaDatabase } from "react-icons/fa6";

import { MdCloudQueue, MdDevicesOther,MdOutlineConstruction,MdOutlineDns, MdOutlineGppGood  } from "react-icons/md";

export default {
    intro: "I leverage a diverse range of technologies to design, develop, and deliver high-quality software solutions tailored to meet complex requirements.",
    skills:[
        {
            "id":"frontend_dev",
            "title":"Front-End Development",
            "icon": MdDevicesOther,
            "detail":[
                "React.js & Redux",
                "Android & Flutter",
                "Javascript(ES6+) & Typescript",
                "Material UI & Bootstrap",
                "Responsive Webdesign"
            ]
        },
        {
            "id":"backend_dev",
            "title":"Back-End Development",
            "icon": MdOutlineDns,
            "detail":[
                "Node.JS & Express",
                "Java & Spring Boot",
                "Python & Django",
                "RESTFul API Design",
                "Web Socket & GraphQL"
            ]
        },
        {
            "id":"dbms_dev",
            "title":"Database Management",
            "icon": FaDatabase ,
            "detail":[
                "NoSQL & Mongo",
                "MySQL",
                "PostgreSQL",
                "Firestore",
                "Database Optimization"
            ]
        },
        {
            "id":"automation_dev",
            "title":"DevOps & Cloud",
            "icon": MdCloudQueue,
            "detail":[
                "CI/CD pipeline",
                "AWS & Firebase",
                "Docker, K8s and Helm",
                "Git & Github/Gitlab",
                "Netlify & Vercel"
            ]
        },
        {
            "id":"test_dev",
            "title":"Testing & QA",
            "icon": MdOutlineGppGood,
            "detail":[
                "JUnit & Mockito",
                "Selenium",
                "JMeter",
                "Mocha",
                "Automation Testing" 
            ]
        },
        {
            "id":"tools_dev",
            "title":"Tools & Methodologies",
            "icon": MdOutlineConstruction ,
            "detail":[
                "Agile & Scrum",
                "JIRA & Confluence",
                "Figma & Adobe XD",
                "VS Code & IntelliJ",
                "System Design & Clean Code"
            ]
        },
    ]
}