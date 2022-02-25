/**
 *
 */
const profile = {
  image: {
    s: "https://bit.ly/3mSGCWR",
  },
  avatar: {
    s: "https://bit.ly/3zogvwf",
  },
};
/**
 *
 */
const education = [
  {
    key: "B.Tech",
    exam: "B.Tech(Hons.) in Computer Science and Engineering",
    school: "National Institute of Technology, Jamshedpur",
    start: "08-2019",
    to: "present",
    result: {
      cb: true,
      res: "CGPA: 8.35",
      till: 5,
      sup: "th",
      type: "semester",
    },
  },
  {
    key: "Class-12",
    exam: "All India Senior School Certificate Examination 2018,CBSE",
    school: "Hem Sheela Model School, Durgapur",
    start: "05-2016",
    to: "05-2018",
    result: {
      cb: false,
      res: "Result: 92%",
    },
  },
  {
    key: "Class-10",
    exam: "All India Secondary School Examination 2016, CBSE",
    school: "S.K.S Public School, Mangalpur",
    start: "04-2014",
    to: "04-2016",
    result: {
      cb: false,
      res: "CGPA: 9.8",
    },
  },
];

const skills = [
  {
    show: true,
    key: "SKILL002",
    name: "C++",
    image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  {
    show: true,
    key: "SKILL004",
    name: "CSS",
    image: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    show: true,
    key: "SKILL005",
    name: "JavaScript",
    image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    show: true,
    key: "SKILL006",
    name: "ReactJS",
    image: "https://img.icons8.com/plasticine/100/000000/react.png",
  },
  {
    show: false,
    key: "SKILL008",
    name: "ElectronJS",
    image:
      "https://www.pikpng.com/pngl/m/446-4460428_electron-js-logo-png-clipart.png",
  },
  {
    show: true,
    key: "SKILL007",
    name: "Node.JS",
    image: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    show: true,
    key: "SKILL009",
    name: "Typesctipt",
    image: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    show: true,
    key: "SKILL010",
    name: "Data Structure and Algorithm",
    image:
      "https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-flowchart-infographic-and-chart-xnimrodx-lineal-gradient-xnimrodx.png",
  },
  {
    show: true,
    key: "SKILL013",
    name: "Git",
    image: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    show: true,
    key: "SKILL015",
    name: "MySQL",
    image: "https://img.icons8.com/fluency/48/000000/mysql-logo.png",
  },
  {
    show: true,
    key: "SKILL016",
    name: "MongoDB",
    image: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    show: true,
    key: "SKILL017",
    name: "Firebase",
    image: "https://img.icons8.com/color/48/000000/firebase.png",
  },
  {
    show: true,
    key: "SKILL018",
    name: "Material-UI",
    image: "https://img.icons8.com/color/48/000000/material-ui.png",
  },
  {
    show: true,
    key: "SKILL019",
    name: "ReduxJS",
    image: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    show: true,
    key: "SKILL020",
    name: "Android developement",
    image: "https://img.icons8.com/color/48/000000/android-os.png",
  },
  {
    show: true,
    key: "SKILL021",
    name: "Java",
    image: "https://img.icons8.com/color/50/000000/java-coffee-cup-logo.png",
  },
  {
    show: true,
    key: "SKILL022",
    name: "Kotlin",
    image: "https://img.icons8.com/color/50/000000/kotlin.png",
  },
  {
    show: true,
    key: "SKILL023",
    name: "Flutter",
    image: "https://img.icons8.com/color/48/000000/flutter.png",
  },
];

const experience = [
  {
    key: "EXPR01",
    title: "NIT Jamshedpur",
    role: "Member",
    from: "03/2021",
    to: "present",
    desc: "I worked as a full-stack developer with the team to build new website and maintaint the old website. I created APIs and designed respossive layouts.",
    techStack: ["SKILL004", "SKILL006", "SKILL007", "SKILL015"],
    link: "https://beta.nitjsr.ac.in/",
  },
  {
    key: "EXPR02",
    title: "FlexiEle",
    role: "Intern",
    from: "07/2021",
    to: "10/2021",
    desc: "I worked with the team to make a multi-tenant web application. I mainly worked with ReactJS and ReduxJS to make the web app.",
    techStack: ["SKILL004", "SKILL006", "SKILL019", "SKILL018"],
  },
];

const projects = [
  {
    key: "PRJ007",
    name: "Portfolio",
    desc: "My personal portfolio application, which you are currently looking at.",
    tech: ["SKILL004", "SKILL006", "SKILL009"],
    code: "https://github.com/AmanPandey0320/AmanPandey0320",
    link: "https://aman-kr-pandey.netlify.app/",
    order: 6,
  },
  {
    key: "PRJ006",
    name: "Forms-App",
    desc: "A simple Google forms like application to create and conduct surveys. Anyone can create froms and accept responses. It comes with some customised themes too.",
    code: "https://github.com/AmanPandey0320/forms-frontend",
    link: "https://akp-forms-app.web.app/form-app",
    tech: ["SKILL006", "SKILL019", "SKILL018", "SKILL007", "SKILL015"],
    order: 5,
  },
  {
    key: "PRJ005",
    name: "File-Explorer",
    desc: "A desktop application to manage and explore the files in the system. It offers different actions like copy,paste, navigate and move.",
    tech: ["SKILL006", "SKILL008"],
    code: "https://github.com/ImAnkitraj/aiexplorer",
    link: undefined,
    order: 4,
  },
  {
    key: "PRJ004",
    name: "Elite-Classroom",
    desc: "An android application to host and manage classrooms just like Google classroom. It comes with an additional feature of realtime chat.",
    tech: ["SKILL007", "SKILL015", "SKILL020", "SKILL021"],
    code: "https://github.com/AmanPandey0320/Elite-Classroom-Backend",
    link: undefined,
    order: 3,
  },
  {
    key: "PRJ003",
    name: "Quizzer",
    desc: "A quizzing application where you can attempt quiz over wide categories and varing difficulties. It is made using flutter and firebase.",
    tech: ["SKILL020", "SKILL023", "SKILL017"],
    link: undefined,
    code: "https://github.com/AmanPandey0320/Quizrr",
    order: 2,
  },
  {
    key: "PRJ002",
    name: "V-stores",
    desc: "A virtual stores app made with kotil and firebase with a vision of smart cities in India. It comes with facility of virtual store with integration of UPI payment gateways(eg. : G-Pay).",
    tech: ["SKILL020", "SKILL022", "SKILL017"],
    link: undefined,
    code: "https://github.com/AmanPandey0320/V-stores",
    order: 1,
  },
  {
    key: "PRJ001",
    name: "Gossips",
    desc: "This an realtime chat application based on android. It also uses firebase for authentification, realtime database and firestore.",
    code: "https://github.com/AmanPandey0320/Gossips",
    link: undefined,
    tech: ["SKILL020", "SKILL021", "SKILL017"],
    order: 0,
  },
];

const skillsObj: any = skills.reduce(
  (pre, curr) => ({ ...pre, [curr.key]: curr }),
  {}
);

const data = { profile, education, skills, skillsObj, experience, projects };

export default data;
