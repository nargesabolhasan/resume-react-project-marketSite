import React from "react";
import { createTheme, ThemeProvider, status } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";


// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//       contrastText: 'white',
//     },
//   },
// });

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
    warning: {
      main: "#ffc400",
    },
    amber:{
      main :"#fff8e1"
    }
  },
  direction: "rtl",
});

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
