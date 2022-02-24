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
    key: "SKILL001",
    name: "C",
    image: "https://img.icons8.com/color/48/000000/c.png",
  },
  {
    key: "SKILL002",
    name: "C++",
    image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  {
    key: "SKILL003",
    name: "HTML",
    image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    key: "SKILL004",
    name: "CSS",
    image: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    key: "SKILL005",
    name: "JavaScript",
    image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    key: "SKILL006",
    name: "ReactJS",
    image: "https://img.icons8.com/plasticine/100/000000/react.png",
  },
  {
    key: "SKILL007",
    name: "Node.JS",
    image: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    key: "SKILL009",
    name: "Typesctipt",
    image: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    key: "SKILL010",
    name: "Data Structure and Algorithm",
    image:
      "https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-flowchart-infographic-and-chart-xnimrodx-lineal-gradient-xnimrodx.png",
  },
  {
    key: "SKILL013",
    name: "Git",
    image: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    key: "SKILL011",
    name: "Github",
    image: "https://img.icons8.com/nolan/64/github.png",
  },
  {
    key: "SKILL014",
    name: "DBMS",
    image: "https://img.icons8.com/fluency/64/000000/database.png",
  },
  {
    key: "SKILL015",
    name: "MySQL",
    image: "https://img.icons8.com/fluency/48/000000/mysql-logo.png",
  },
  {
    key: "SKILL016",
    name: "MongoDB",
    image: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    key: "SKILL017",
    name: "Firebase",
    image: "https://img.icons8.com/color/48/000000/firebase.png",
  },
  {
    key: "SKILL018",
    name: "Material-UI",
    image: "https://img.icons8.com/color/48/000000/material-ui.png",
  },
  {
    key: "SKILL019",
    name: "ReduxJS",
    image: "https://img.icons8.com/color/48/000000/redux.png",
  },
];

const experience = [
  {
    key: "EXPR01",
    title: "NIT Jamshedpur",
    role: "Full Stack Developer",
    from: "03/2021",
    to: "present",
    desc: "I worked with the team to build new website and maintaint the old website.",
    techStack: ["SKILL004", "SKILL006", "SKILL007", "SKILL015"],
    link: "https://beta.nitjsr.ac.in/",
  },
  {
    key: "EXPR02",
    title: "FlexiEle",
    role: "Intern",
    from: "07/2021",
    to: "10/2021",
    desc: "I worked with the team to make a multi-tenant web application on ReactJS and NodeJS.",
    techStack: ["SKILL004", "SKILL006", "SKILL019", "SKILL018"],
  },
];

const skillsObj:any = skills.reduce(
  (pre, curr) => ({ ...pre, [curr.key]: curr }),
  {}
);

const data = { profile, education, skills, skillsObj,experience };

export default data;
