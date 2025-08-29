import { FaBolt, FaBookOpen, FaRegFaceSmile, FaBriefcase, FaCertificate } from "react-icons/fa6";

function getTimeElapsedFromAugust2023(): string {
    const startDate = new Date(2023, 7);
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if(years == 0){
        return `${months} month`;
    }
  
    return `${years}+ year`;
  }


export default  {
    resume:"https://bit.ly/47ukLgz",
    devTo:"https://dev.to/search/feed_content?per_page=15&page=0&user_id=1034031&class_name=Article&sort_by=published_at&sort_direction=desc&approved=",
    intro: [
        `Hello! I'm Aman Kr Pandey, a passionate Software Engineer with ${getTimeElapsedFromAugust2023()} of experience in building web applications and solving complex problems that drive real-world impact.`,

        `I specialize in full-stack development, building everything from dynamic frontends with React and Android to scalable backends using Node.js, Django, or Spring Boot. I also have experience deploying applications in cloud environments, leveraging Kubernetes for container orchestration and efficient scaling.`,

        `Beyond coding, I actively participate in hackathons and coding challenges, write technical blogs, mentor junior developers, and explore emerging tech trends.`
    ],
    parameter:[
        {
            id: "experience",
            title: "Experience",
            detail: "1+ year",
            icon: FaBriefcase,
            enabled: true
        },
        {
            id: "projects",
            title: "Projects",
            detail: "5+ Projects",
            icon: FaBookOpen,
            enabled: true
        },
        {
            id: "clients",
            title: "Satisfied Clients",
            detail: "2+ Happy Clients",
            icon: FaRegFaceSmile,
            enabled: false
        },
        {
            id: "certificates",
            title: "Certificates",
            detail: "5+ Certifications",
            icon: FaCertificate,
            enabled: true
        },
        {
            id: "delivery",
            title: "Fast Delivery",
            detail: "On-Time",
            icon: FaBolt,
            enabled: true
        }
    ]
}