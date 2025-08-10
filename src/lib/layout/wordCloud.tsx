"use client"
import { useEffect } from "react";
import TagCloud from "TagCloud";

const texts: string[] = [
  "Data","Structure","Algorithms","Development","Java","Spring","Boot","Micronaut","Docker",
  "Kubernetes","Helm","MySQL","PostgeSQL","System","Design", "Pattern", "Node.JS","ReactJS","NextJS","Electron",
  "Linux","Backend","Optimization","API","REST","GraphQL","Git","CI/CD","Unit test","Automation","C++",
  "Javascript","Python","Typescript","JUnit","Mocha","JMeter","AWS","OCI","Firebase","Cloud","Native","Selenium",
  "Jira", "Scrum", "Agile"
];

const options: {
  radius: number;
  maxSpeed: "slow" | "normal" | "fast";
  initSpeed: "slow" | "normal" | "fast";
  keep: boolean;
} = {
  radius: 216,
  maxSpeed: "normal",
  initSpeed: "normal",
  keep: true,
};

const WordCloud: React.FC = () => {
  useEffect(() => {
    TagCloud('.sphereCloud', texts, options);
    return () => {
      const el = document.querySelector('.sphereCloud');
      if (el) el.textContent = '';
    };
  }, []);

  return (
    <div className="flex items-center justify-center text-gray-900 dark:text-gray-200">
      <span className="sphereCloud block" />
    </div>
  );
};

export default WordCloud;
