import { createContext } from "react";

const dark = {
  background: "#214a45",
  textColor: "#eee",
  primary: "rgb(77,166,160)",
  secondary: "rgb(57,136,120)",
  card: "#111",
};
const light = {
  background: "#fcf7e6",
  textColor: "#000",
  primary: "rgb(158,120,60)",
  secondary: "rgb(212,180,80)",
  card: "#fff",
};

export const ThemeContext = createContext();

export const getTheme = (mode) => ({
  background: mode === "dark" ? dark.background : light.background,
  // ...(mode === "light" ? lightTheme : formattedDark),
  typography: {
    p: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      fontSize: "1.2rem",
    },
    h3: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontSize: "2rem",
    },
    h2: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontWeight: "400",
      fontSize: "3rem",
    },
    h1: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontWeight: "500",
      fontSize: "4rem",
    },
    h6: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
    },
  },
  palette: {
    mode,
    primary: {
      500: mode === "dark" ? dark.primary : light.primary,
    },
    secondary: {
      main: mode === "dark" ? dark.secondary : light.secondary,
    },
    background: {
      paper: mode === "dark" ? dark.card : light.card,
    },
    text: {
      primary: mode === "dark" ? dark.textColor : light.textColor,
      secondary: mode === "dark" ? dark.textColor : light.textColor,
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "black" : "white",
        },
      },
    },
  },
});
