import React from 'react';
import { createTheme, ThemeProvider,status } from '@mui/material/styles';
import { indigo} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: indigo,
    warning: {
      main:"#ffc400"
    },
  },
  direction: 'rtl',
});


export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}