import { useState } from "react";
import {
  HamBurgerWrapper,
  MenuItem,
  MenuNav,
  MenuToolBar,
  NavMenuWrapper,
} from "./styles";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen((prev) => !prev);
  };
  return (
    <NavMenuWrapper>
      <HamBurgerWrapper
        className={open ? "open" : "close"}
        onClick={handleOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </HamBurgerWrapper>
      <MenuNav className={`all ${open ? "open" : "close"}`}>
        <div>
          <MenuToolBar>
            <MenuItem className={open ? "open" : "close"}>About</MenuItem>
            <MenuItem className={open ? "open" : "close"}>Education</MenuItem>
            <MenuItem className={open ? "open" : "close"}>Skill</MenuItem>
            <MenuItem className={open ? "open" : "close"}>Experience</MenuItem>
            <MenuItem className={open ? "open" : "close"}>Project</MenuItem>
            <MenuItem className={open ? "open" : "close"}>Resume</MenuItem>
          </MenuToolBar>
        </div>
      </MenuNav>
    </NavMenuWrapper>
  );
};

export default NavMenu;
