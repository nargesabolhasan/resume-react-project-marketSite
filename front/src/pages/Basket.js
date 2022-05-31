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
import emptyBasket from "../assets/images/logo/emptyBasket.png";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

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
  float: "left",
  alignItems: "center",
  borderLeft: "2px solid #ba6b6c",
  width: "100%",
}));
const IMG = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Titles = styled("button")(({ theme }) => ({
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
    justifyContent: "end",
    fontFamily: "SansWeb",
    fontSize: "30px",
    border: "none",
    color: "#ba6b6c",
  },
}));

const Basket = (props) => {
  const products = useSelector((state) => state);
  const [showTable, setShowTable] = useState(false);
  const [basketIsEmpty, setBasketIsEmpty] = useState(false);
  const [allPrice, setAllPrice] = useState(0);
  const tableHeader=["حذف","تعداد","قیمت","دسته بندی","نام ","تصویر کالا","شماره"]
  let dollarUSLocale = Intl.NumberFormat("en-US");

  useEffect(() => {
    if (products.products.length > 0) {
      setBasketIsEmpty(false);
    } else {
      setBasketIsEmpty(true);
    }
  }, [products.products.length]);

  const handleSubmit = () => {
    console.log("Hi");
  };

  useEffect(() => {
    if (products.products.length !== 0) {
      let sum = 0;
      products.products.map((item) => {
        sum += item.price * item.orderCount;
        setAllPrice(sum);
      });
    } else {
      setAllPrice(0);
    }
  }, [products.products.length]);

  return (
    <Root sx={{ mt: 20, fontFamily: "koodak", mx: "auto", direction: "rtl" }}>
      <Typography variant="h3" sx={{ fontFamily: "koodak" }}>
        سبد خرید
      </Typography>
      {!basketIsEmpty ? (
        <>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 3,
              color: "primary.main",
              float: "left",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: "SansWeb" }}>
              حالت نمایش محصولات :
            </Typography>
            <Div>
              <Titles onClick={() => setShowTable(true)}>
                جدول : <ViewListIcon sx={{ fontSize: 50 }} />
              </Titles>
              <Titles onClick={() => setShowTable(false)}>
                کارت : <GridViewIcon sx={{ fontSize: 50 }} />
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
            { showTable ? 
            (
              <TableContainer
              component={Paper}
              sx={{ mx: "auto", mt: 8, direction: "ltr" }}
            >
            <Table >
                <TableHead sx={{ borderBottom: 1 }}>
            <TableRow sx={{ backgroundColor: "primary.main", color: "white" }}>
              {tableHeader.map((item, key) => (
                <TableCell
                  sx={{
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    color: "white",
                    border: "2px solid white",
                    fontFamily: "SansWeb",
                  }}
                  key={key}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {products.products?.map((item, index) => (<TableBasket info={item} key={item.id} index={index} />))}
          
          </Table>
          </TableContainer>
     
              ) : (
                <>
                {products.products?.map((item, key) => (<MainBasket info={item} key={item.id} />))}
                </>
              )
          }
          </Grid>
          <Div
            sx={{
              mt: 6,
              border:0,
              pb:5
            }}
          >
            <Typography
              variant="h5"
              sx={{ direction: "rtl", fontFamily: "SansWeb", mt: 3 }}
            >
              قیمت کل : {dollarUSLocale.format(allPrice)}
            </Typography>
            <Buttons
              onClick={() => handleSubmit()}
            >
              نهایی کردن خرید
            </Buttons>
          </Div>
        </>
      ) : (
        <IMG>
          <img src={emptyBasket} sx={{ mx: "auto" }} />
        </IMG>
      )}
    </Root>
  );
};

export default LayoutUser(Basket);
