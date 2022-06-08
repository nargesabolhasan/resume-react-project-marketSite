import React from "react";
import { createTheme, ThemeProvider, status } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ba6b6c",
    },
    PDark: {
      main: "#ba6b6c",
    },
    PLight: {
      main: "#ffcccb",
    },
    SLight: {
      main: "#ef9a9a",
    },
    Shadow: {
      main: "#ba6b6c37",
    },
    warning: {
      main: "#ffc400",
    },
    amber: {
      main: "#fff8e1",
    },
    success: {
      main: "rgb(68, 178, 110)",
    },
    successGradient: {
      main: "linear-gradient(90deg, rgba(51,131,130,1) 0%, rgba(148,255,85,1) 40%, rgba(151,255,90,1) 72%, rgba(255,255,255,1) 100%)",
    },
    fail: {
      main: "#d1484a",
    },
  },
  direction: "rtl",
});

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
