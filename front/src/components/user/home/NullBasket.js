import React, { useEffect, useState, useCallback, useRef } from "react";
import EasyEdit from "react-easy-edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import emptyBasket from "../../../assets/images/logo/emptyBasket.png";
import backProduct from "../../../assets/images/avatar/backProduct.png";

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

const MainBasket = (props) => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(238, 238, 238)",
          mt: 5,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "200px",
        }}
      >
        <IMG src={emptyBasket} />
      </Box>
    </Grid>
  );
};

export default MainBasket;
