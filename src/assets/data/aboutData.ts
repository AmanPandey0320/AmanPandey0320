import { ElectricBoltOutlined, ImportContactsOutlined, SentimentSatisfiedAltOutlined, WorkOutlineOutlined, WorkspacePremiumOutlined } from "@mui/icons-material";

function getTimeElapsedFromAugust2023(): string {
    const startDate = new Date(2023, 7);
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    return `${years} years ${months} months`;
  }


export default  {
    resume:"https://drive.google.com/file/d/1uirRJ5QezwiehiPljJcwHolEb_MVjE6K/view?usp=sharing",
    intro: [
        `Hello! I'm Aman Kr Pandey, a passionate Software Engineer with ${getTimeElapsedFromAugust2023()} of experience in building web applications and solving complex problems that drive real-world impact.`,

        `I specialize in full-stack development, building everything from dynamic frontends with React and Android to scalable backends using Node.js, Django, or Spring Boot. I also have experience deploying applications in cloud environments, leveraging Kubernetes for container orchestration and efficient scaling.`,

        `Beyond coding, I actively participate in hackathons and coding challenges, write technical blogs, mentor junior developers, and explore emerging tech trends.`
    ],
    parameter:[
        {
            "id":"experience",
            "title":"Experience",
            "detail":"1+ year",
            "icon": WorkOutlineOutlined,
            "enabled": true
        },
        {
            "id": "projects",
            "title":"Projects",
            "detail":"5+ Projects",
            "icon": ImportContactsOutlined,
            "enabled": true
        },
        {
            "id":"clients",
            "title":"Satisfied Clients",
            "detail":"2+ Happy Clients",
            "icon": SentimentSatisfiedAltOutlined,
            "enabled": false
        },
        {
            "id":"certificates",
            "title":"Certificates",
            "detail":"5+ Certifications",
            "icon": WorkspacePremiumOutlined,
            "enabled": true
        },
        {
            "id":"delivery",
            "title":"Fast Delivery",
            "detail":"On-Time",
            "icon": ElectricBoltOutlined,
            "enabled": true
        }
    ]
}