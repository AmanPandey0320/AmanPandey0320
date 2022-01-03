import { useScroll } from "./logic";
import { Item, NavBar, Toolbar } from "./styles";

function NavWrapper() {
  const { scrollDirection } = useScroll();

  return (
    <NavBar className={scrollDirection}>
      <Toolbar>
        <Item>
          <a>About</a>
        </Item>
        <Item>
          <a>Education</a>
        </Item>
        <Item>
          <a>Skills</a>
        </Item>
        <Item>
          <a>Experience</a>
        </Item>
        <Item>
          <a>Project</a>
        </Item>
        <Item>
          <a>Resume</a>
        </Item>
      </Toolbar>
    </NavBar>
  );
}

export default NavWrapper;
