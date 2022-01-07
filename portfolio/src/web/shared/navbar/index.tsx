import { useScroll } from "./logic";
import { Item, NavBar, Toolbar } from "./styles";

function NavWrapper() {
  const { scrollDirection } = useScroll();

  return (
    <NavBar className={scrollDirection}>
      <Toolbar>
        <Item>
          <span>About</span>
        </Item>
        <Item>
          <span>Education</span>
        </Item>
        <Item>
          <span>Experience</span>
        </Item>
        <Item>
          <span>Project</span>
        </Item>
        <Item>
          <span>Resume</span>
        </Item>
      </Toolbar>
    </NavBar>
  );
}

export default NavWrapper;
