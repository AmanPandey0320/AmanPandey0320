import "./App.css";
import Education from "./pages/Education";
import Home from "./pages/home";
import Canvas from "./shared/canvas";
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
        <Home />
        <Education />
      </MainWrapper>
    </div>
  );
}

export default App;
