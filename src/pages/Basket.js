import React, { useEffect, useState, useCallback, useRef } from "react";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Buttons from "../components/buttons/Button-add";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../components/modal/Modals";
import { setProducts, removeSelectedProduct } from "../redux/basketSlice";
import LayoutUser from "../components/Layouts/Layout-user";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import { MainBasket } from "../components/index";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "90%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
  },
}));

const Basket = (props) => {
  const products = useSelector((state) => state);
  return (
    <Root sx={{ mt: 20, fontFamily: "koodak", mx: "auto" }}>
      <Typography variant="h3" sx={{ direction: "rtl", fontFamily: "koodak" }}>
          سبد خرید
      </Typography >
      <Typography  variant="h5" sx={{ direction: "rtl", fontFamily: "SansWeb",mt:3 }}> {products?.products.length} کالا در سبد شما است</Typography>
      <Grid
        container
        item
        xs={12}
        sx={{ direction: "rtl" ,display:'flex',flexDirection :"row"}}
      >
        {products.products?.map((product) => (
          <MainBasket info={product} key={product.id} />
        ))}
      </Grid>
    </Root>
  );
};

export default LayoutUser(Basket);
