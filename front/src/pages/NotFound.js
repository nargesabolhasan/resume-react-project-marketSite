import React from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import notFound from "../assets/images/avatar/404.jpg";

const IMG = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
    margin: "0 auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
}));

const NotFound = () => {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <IMG src={notFound} />
  </Box>
  )
}

export default LayoutUser(NotFound)