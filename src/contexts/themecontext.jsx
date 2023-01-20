import { createContext, useState } from "react";

const lightTextColor = "#07004D";
const lightMainColor = "#223715";
const lightSecondColor = "#FF8E9D";
const lightBackgroundColor = "#6C9D40";
const lightNoColor = `#FFFFFF`;
const darkTextColor = "#F3DFBF";
const darkMainColor = "#6C9D40";
const darkSecondColor = "#FF8E9D";
const darkBackgroundColor = "#223715";
const darkNoColor = `#000000`;

const themeColors = {
  light: {
    text: lightTextColor,
    main: lightMainColor,
    secondary: lightSecondColor,
    background: lightBackgroundColor,
    noColor: lightNoColor,
  },
  dark: {
    text: darkTextColor,
    main: darkMainColor,
    secondary: darkSecondColor,
    background: darkBackgroundColor,
    noColor: darkNoColor,
  },
};

export const ThemeContext = createContext({
  theme: "",
  changeTheme: () => null,
  currentThemeColors: {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currentThemeColors, setCurrentThemeColors] = useState(
    themeColors.light
  );

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    theme === "light"
      ? setCurrentThemeColors(themeColors.dark)
      : setCurrentThemeColors(themeColors.light);
  };

  const value = { theme, changeTheme, currentThemeColors };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
