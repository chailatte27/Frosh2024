import { createTheme } from "@mui/material";
import { amber, grey, purple } from "@mui/material/colors";
import { createContext } from "react";

export const ThemeContext = createContext();

export const getTheme = (mode) => ({
  ...(mode === "light" ? lightTheme : darkTheme),
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
const lightTheme = {
  background: "#efefef",
  typography: {
    h2: {
      textAlign: "center",
      fontWeight: "500",
      fontSize: "4rem",
    },
    h3: {
      textAlign: "center",
      fontSize: "2rem",
    },
    h6: {
      textAlign: "center",
    },
  },
  palette: {
    mode: "light",
    primary: purple,

    secondary: {
      main: "#eb21a7",
    },
  },
};
const darkTheme = {
  background: "#555",

  typography: {
    p: {
      color: "white",
    },
    h3: {
      color: "white",
      textAlign: "center",
      fontSize: "2rem",
    },
    h2: {
      color: "white",
      textAlign: "center",
      fontWeight: "500",
      fontSize: "4rem",
    },
    h6: {
      color: "white",
      textAlign: "center",
    },
  },
  palette: {
    mode: "dark",
    primary: amber,

    background: {
      default: amber[900],
      paper: "#222",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
};
