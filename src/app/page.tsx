import About from "@/component/about";
import Education from "@/component/education";
import Experience from "@/component/experience";
import Home from "@/component/home";
import Skills from "@/component/skills";

export default function Portfolio() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
    </div>
  );
}
