import { useContext, useEffect, useState, useRef, useCallback, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/themecontext";

import { ReactComponent as HamburgerIcon } from "../../assets/hamburgermenu.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

import { NavBarDiv } from "./navbar.styles";
import ThemeButton from "../themebutton/themebutton.component";

const Navbar = ({ navItems }) => {
  const { currentThemeColors } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleIsOpen = useCallback(()=>{
    setIsOpen(!isOpen);
    console.log(isOpen);
  },[isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleIsOpen && toggleIsOpen();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleIsOpen]);

  return (
    <Fragment>
      <div className="w-full h-1/5 flex justify-between items-center p-1 md:h-75 md:pb-1/2 md:pt-1/2">
        <Link to={`/`} className="w-50 h-50">
          <img className="" src="/sshp/SSHPlogo.png" alt="SSHP logo" />
        </Link>
        {isOpen ? (
          <CloseIcon
            ref={ref}
            width={40}
            height={40}
            onClick={toggleIsOpen}
            className="md:hidden"
            stroke="#365314"
          />
        ) : (
          <HamburgerIcon
            width={40}
            height={40}
            onClick={toggleIsOpen}
            className="md:hidden"
            stroke="#365314"
          />
        )}
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-2 font-bold">
            {navItems.map((item) => {
              const { path, text } = item;
              return (
                <li key={path} className="text-green hover:text-pink duration-300">
                  <Link to={`/${path}`} onClick={toggleIsOpen}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden h-7/12 flex justify-end align-center">
          <ul className="flex flex-col justify-between align-end gap-1 font-bold p-1 pt-0">
            {navItems.map((item) => {
              const { path, text } = item;
              return (
                <li key={path} className="text-green hover:text-pink">
                  <Link to={`/${path}`}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
