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
const data = { profile, education };

export default data;
