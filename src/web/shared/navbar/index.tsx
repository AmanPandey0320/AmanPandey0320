import { Alink } from "../link";
import { useScroll } from "./logic";
import { Item, NavBar, Toolbar } from "./styles";

function NavWrapper() {
  const { scrollDirection } = useScroll();

  return (
    <NavBar className={scrollDirection}>
      <Toolbar>
        <Item>
          <Alink href="#about-me">About</Alink>
        </Item>
        <Item>
          <Alink href="#education">Education</Alink>
        </Item>
        <Item>
          <Alink href="#experience">Experience</Alink>
        </Item>
        <Item>
          <Alink>Project</Alink>
        </Item>
        <Item>
          <Alink>Resume</Alink>
        </Item>
      </Toolbar>
    </NavBar>
  );
}

export default NavWrapper;
