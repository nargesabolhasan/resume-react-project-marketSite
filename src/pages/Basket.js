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
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { MainBasket, TableBasket } from "../components/index";
import emptyBasket from "../assets/images/logo/emptyBasket.png"

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
const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: "primary.main",
  float:"left",
  alignItems: "end",
  borderLeft: "2px solid #ba6b6c",
  width: "100%",
}))
const IMG = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

}))

const Titles = styled("div")(({ theme }) => ({
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ontFamily: "SansWeb",
    fontSize: "30px",
  },
}));

const Basket = (props) => {
  const products = useSelector((state) => state);
  const [showTable, setShowTable] = useState(false);
  const[basketIsEmpty,setBasketIsEmpty] = useState(false)
  useEffect(() => {
if(products.products.length > 0) {
  setBasketIsEmpty(false);
}else{
  setBasketIsEmpty(true);
}
  },[products.products.length ])
  return (
    <Root sx={{ mt: 20, fontFamily: "koodak", mx: "auto",direction:"rtl" }}>
      <Typography variant="h3" sx={{fontFamily: "koodak" }}>
        سبد خرید
      </Typography>
      {!basketIsEmpty?(<>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 3,
          color: "primary.main",
          float:"left",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: "SansWeb" }}>
            حالت نمایش محصولات :
        </Typography>
        <Div >
        <Titles>
          جدول :{" "}
          <ViewListIcon
            sx={{ fontSize: 50 }}
            onClick={() => setShowTable(true)}
          />
        </Titles>
        <Titles>
          کارت :{" "}
          <GridViewIcon
            sx={{ fontSize: 50 }}
            onClick={() => setShowTable(false)}
          />
        </Titles>
        </Div>
      </Grid>

      <Typography
        variant="h5"
        sx={{ direction: "rtl", fontFamily: "SansWeb", mt: 3 }}
      >
        {" "}
        {products?.products.length} محصول در سبد شما است
      </Typography>
      <Grid
        container
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {products.products?.map((product, index) =>
          showTable ? (
            <TableBasket info={product} key={product.id} index={index} />
          ) : (
            <MainBasket info={product} key={product.id} />
          )
        )}
      </Grid>
      </>):(<IMG><img src={emptyBasket} sx={{mx: "auto"}}/></IMG>)}
    </Root>
  );
};

export default LayoutUser(Basket);
