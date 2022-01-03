import "./App.css";
import Home from "./pages/home";
import HtmlTag from "./shared/htmlTags";
import NavBar from "./shared/navbar";
import NavMenu from "./shared/navMenu";
import { GlobalCssBase, PageWrapper } from "./shared/wrapper";

function App() {
  return (
    <div>
      <GlobalCssBase />
      <NavBar />
      <NavMenu />
      <PageWrapper>
        <HtmlTag close={true} name="html">
          <HtmlTag close={true} name="body">
            <Home />
          </HtmlTag>
        </HtmlTag>
      </PageWrapper>
    </div>
  );
}

export default App;
