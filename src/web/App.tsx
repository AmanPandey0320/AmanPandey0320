import "./App.css";
import AboutMe from "./pages/aboutMe";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Canvas from "./shared/canvas";
import HtmlTag from "./shared/htmlTags";
import NavBar from "./shared/navbar";
import NavMenu from "./shared/navMenu";
import { GlobalCssBase, MainWrapper } from "./shared/wrapper";

function App() {
  return (
    <div>
      <GlobalCssBase />
      <NavBar />
      <NavMenu />
      <Canvas />
      <MainWrapper>
      <HtmlTag name="html">
          <HtmlTag name="body">
          <Home />
        <AboutMe/>
        <Education />
        <Experience />
          </HtmlTag>
        </HtmlTag>
      </MainWrapper>
    </div>
  );
}

export default App;
