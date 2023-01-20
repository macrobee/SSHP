import { useContext, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/themecontext";

import { NavBarDiv } from "./navbar.styles";
import ThemeButton from "../themebutton/themebutton.component";

const Navbar = ({ navItems }) => {
const {currentThemeColors} = useContext(ThemeContext);
  return (
    <Fragment>
    <NavBarDiv themeColors={currentThemeColors}>
      <Link to={`/`}><img src="/sshp/SSHPlogo.png" alt="SSHP logo" /></Link>
      <ul>
        {navItems.map((item) => {
            const {path, text} = item;
          return (
            <li key={path}>
              <Link to={`/${path}`}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <ThemeButton />
    </NavBarDiv>
    <Outlet/>
    </Fragment>
  );
};

export default Navbar;
