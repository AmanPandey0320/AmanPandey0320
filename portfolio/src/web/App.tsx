import "./App.css";
import Home from "./pages/home";
import NavBar from "./shared/navbar";
import NavMenu from "./shared/navMenu";
import { GlobalCssBase } from "./shared/wrapper";

function App() {
  return (
    <div>
      <GlobalCssBase />
      <NavBar />
      <NavMenu />
      <Home />
    </div>
  );
}

export default App;
