import About from "@/lib/component/about";
import Education from "@/lib/component/education";
import Experience from "@/lib/component/experience";
import Footer from "@/lib/component/footer";
import Home from "@/lib/component/home";
import Projects from "@/lib/component/project";
import Skills from "@/lib/component/skills";

export default function Portfolio() {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Footer/>
    </>
  );
}
