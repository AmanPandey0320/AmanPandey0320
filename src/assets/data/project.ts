import typeboxImage from "@/assets/images/projects/type_box.png";
import formsImage from "@/assets/images/projects/forms.png";
import keyfortImage from "@/assets/images/projects/keyfort.png";
import balancifyImage from "@/assets/images/projects/balancify.webp";
import classRoomImage from "@/assets/images/projects/classRoom.png";
import nitjsrImage from "@/assets/images/projects/nitjsr.png";
import jsonParsorImage from "@/assets/images/projects/jsonparsor.png";
import santhaliImage from "@/assets/images/projects/santhali.png";

export const PROJECTS = [
    {
        name: "Keyfort",
        summary: "An OAuth 2.0 authorization server that implements role-based access control, ensures secure authentication and authorization, supports the PKCE flow, enforces robust password policies, provides brute force attack protection, and features an interactive user interface",
        techStack: ["NextJS", "Spring boot", "PostGreSQL"],
        type: "Full-Stack",
        demo: null,
        image:keyfortImage,
        repo: "https://github.com/AmanPandey0320/keyfort-ui"
    },
    {
        name: "TypeBox",
        summary: "A SaaS file management MVP rapidly developed within a 24-hour hackathon, featuring seamless folder navigation, support for remote and local cloud storage, and intuitive file uploading and downloading—all delivered through a highly interactive and user-friendly interface",
        techStack: ["NextJS", "Spring boot", "MySQL", "tailwind-css"],
        type: "Full-Stack",
        demo: null,
        image:typeboxImage,
        repo: "https://github.com/AmanPandey0320/typebox"
    },
    {
        name: "Balancify",
        summary: "An application load balancer built entirely from scratch without relying on any third-party libraries, utilizing modern load balancing algorithms and offering the capability to configure distinct server pools for different route paths",
        techStack: ["Java"],
        type: "Backend",
        demo: null,
        image:balancifyImage,
        repo: "https://github.com/AmanPandey0320/balancify"
    },
    {
        name: "JSON-Parsor",
        summary: "A JSON parser developed to deeply understand the core concepts of tokenization and object parsing, implemented entirely without using any third-party libraries",
        techStack: ["Java"],
        type: "Utility",
        image:jsonParsorImage,
        demo: null,
        repo: "https://github.com/AmanPandey0320/JSON-Parser"
    },
    {
        name: "Santhali-NLP-Modal",
        summary: "An NLP model designed to facilitate translation of the Santhali tribal language into English or other official languages. It supports accurate translation of words as well as the grammatical structure of sentences to ensure meaningful and context-aware language conversion",
        techStack: ["Python", "PyTorch", "NLP"],
        type: "Deep Learning",
        image:santhaliImage,
        demo: null,
        repo: "https://github.com/AmanPandey0320/santhali-model"
    },
    {
        name: "NIT JSR Website",
        summary: "The official website of NIT Jamshedpur. It is live since 2022, with 10000+ daily visits, serving as a key portal for academic, administration, and recruitment information related to the institute.",
        techStack: ["ReactJS", "Node.js", "MySQL", "Docker", "NGINX"],
        type: "Full-Stack",
        image:nitjsrImage,
        demo: "https://nitjsr.ac.in/",
        repo: null
    },
    {
        name: "Elite Classroom",
        summary: "Developed during the COVID pandemic to facilitate remote learning in colleges and schools, this platform includes class-wise group chat, live classes, and comprehensive management of students, assignments, and grades",
        techStack: ["Node.js", "MySQL", "Docker", "AWS"],
        type: "Backend",
        demo: null,
        image:classRoomImage,
        repo: "https://github.com/pcon-code-tribe/Elite-Classroom-Backend"
    },
    {
        name: "Forms",
        summary: "A Google Forms-like application designed to create and host surveys and questionnaires with user-friendly features for easy data collection and management",
        techStack: ["Node.js", "MySQL", "ReactJS","Material-UI"],
        type: "Full-Stack",
        demo: null,
        image:formsImage,
        repo: "https://github.com/pcon-code-tribe/Elite-Classroom-Backend"
    }

]