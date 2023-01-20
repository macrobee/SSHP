import { useContext } from "react";

import { ThemeContext } from "../../contexts/themecontext";

import { ReactComponent as DarkModeIcon } from "../../assets/darkmode.svg";
import { ReactComponent as LightModeIcon } from "../../assets/lightmode.svg";

import { Button } from "./themebutton.styles";

const ThemeButton = () => {
  const { theme, changeTheme, currentThemeColors } = useContext(ThemeContext);
  const toggleTheme = () => {
    changeTheme();
    console.log(`theme is ${theme}`);
  };
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? (
        <DarkModeIcon width={25} height={25} fill={currentThemeColors.text}/>
      ) : (
        <LightModeIcon width={25} height={25} fill={currentThemeColors.text}/>
      )}
    </Button>
  );
};
export default ThemeButton;
