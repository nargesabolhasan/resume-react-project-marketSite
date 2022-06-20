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
import CloseIcon from "@mui/icons-material/Close";
import ModalDelete from "../components/user/ModalDelete";
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
import { useNavigate } from "react-router-dom";
import { removeAll } from "../redux/basketSlice";
import EmptyBasket from "../components/user/EmptyBasket";
import backProduct from "../assets/images/avatar/backProduct.png";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "90%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
    backgroundImage: `url(${backProduct})`,
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
  alignItems: "end",
  borderLeft: "2px solid #ba6b6c",
  paddingLeft: "10px",
  width: "300px",
}));

const BoxWraper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: "primary.main",
  float: "right",
  //alignItems: "center",
  borderLeft: "2px solid #ba6b6c",
  paddingLeft: "10px",
  width: "300px",
}));
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

const Titles = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    fontFamily: "SansWeb",
    fontSize: "30px",
    border: "none",
    color: "#ba6b6c",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    fontFamily: "SansWeb",
    fontSize: "30px",
    border: "none",
    color: "#ba6b6c",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
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
  const [basketIsEmpty, setBasketIsEmpty] = useState(true);
  const [allPrice, setAllPrice] = useState(0);
  const dispatch = useDispatch();
  const tableHeader = [
    "حذف",
    "تعداد",
    "قیمت",
    "دسته بندی",
    "نام ",
    "تصویر کالا",
    "شماره",
  ];
  let dollarUSLocale = Intl.NumberFormat("en-US");
  const navigate = useNavigate();

  //**modal **//
  const [openDelete, setOpenDelete] = useState(false);
  const [classname, setClassname] = useState("");
  const [selectedData, setSelectedData] = useState("");
  //--------Modal open & close :----------
  const handleClose = () => {
    setOpenDelete(false);
  };

  useEffect(() => {
    

    if (products.products?.length > 0) {
      setBasketIsEmpty(false);
    } else {
      setBasketIsEmpty(true);
    }
  }, [products.products]);

  const handleSubmit = () => {
    navigate("/SubmitPayment");
  };

  useEffect(() => {
    if (products.products?.length > 0) {
      let sum = 0;
      products.products.map((item) => {
        sum += item.price * item.orderCount;
        setAllPrice(sum);
      });
    } else {
      setAllPrice(0);
    }
  }, [products.products]);

  const handleSubmitRemoveAll = () => {
    setOpenDelete(true);
  };

  return (
    <Box sx={{ backgroundImage: `url(${backProduct})`, pb: 5 ,minHeight:{lg:"1000px",md:"1000px",xs:"600px"}}}>
      <Root
        sx={{
          mt: { lg: 11, md: 11, xs: 2 },
          fontFamily: "koodak",
          mx: "auto",
          direction: "rtl",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "koodak",
            textAlign: { lg: "start", md: "start", xs: "start" },
            fontSize: { lg: 50, md: 50, xs: 30 },
            mt: 5,
          }}
        >
          سبد خرید
        </Typography>
        {!basketIsEmpty ? (
          <>
            <Grid
              sx={{
                display: { lg: "flex", md: "flex", xs: "none" },
                flexDirection: "column",
                mt: 3,
                mb: 1,
                color: "primary.main",
                float: "left",
                alignItems: "end",
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
                <Buttons clickHandler={() => handleSubmitRemoveAll()}>
                  خالی کردن سبد
                </Buttons>
              </Div>
            </Grid>

            <Typography
              variant="h5"
              sx={{
                direction: "rtl",
                fontFamily: "SansWeb",
                mt: 3,
                textAlign: { lg: "start", md: "start", xs: "start" },
                fontSize: { lg: 40, md: 30, xs: 20 },
              }}
            >
              {products?.products.length} محصول در سبد شما است
            </Typography>
            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              {showTable ? (
                <TableContainer
                  component={Paper}
                  sx={{ mx: "auto", mt: 8, direction: "ltr" }}
                >
                  <BoxWraper
                    sx={{
                      border: 0,
                      pb: 5,
                      position: { lg: "absolute", md: "absolute", xs: "none" },
                      top: { lg: 260, md: 260 },
                      right: { lg: 300, md: 110 },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ direction: "rtl", fontFamily: "SansWeb" }}
                    >
                      قیمت کل : {dollarUSLocale.format(allPrice)}
                    </Typography>
                    <Buttons clickHandler={() => handleSubmit()}>
                      نهایی کردن خرید
                    </Buttons>
                  </BoxWraper>
                  <Table>
                    <TableHead sx={{ borderBottom: 1 }}>
                      <TableRow
                        sx={{ backgroundColor: "primary.main", color: "white" }}
                      >
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
                    {products.products?.map((item, index) => (
                      <TableBasket info={item} key={item.id} index={index} />
                    ))}
                  </Table>
                </TableContainer>
              ) : (
                <>
                  <BoxWraper
                    sx={{
                      border: 0,
                      pb: 5,
                      position: { lg: "absolute", md: "absolute", xs: "none" },
                      mt: { lg: 0, md: 10, xs: 5 },
                      top: { lg: 260, md: 180 },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ direction: "rtl", fontFamily: "SansWeb" }}
                    >
                      قیمت کل : {dollarUSLocale.format(allPrice)}
                    </Typography>
                    <Buttons clickHandler={() => handleSubmit()}>
                      نهایی کردن خرید
                    </Buttons>
                  </BoxWraper>
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-around",
                      borderTop: 3,
                      borderColor: "primary.main",
                    }}
                  >
                    {products.products?.map((item, key) => (
                      <MainBasket info={item} key={item.id} />
                    ))}
                  </Grid>
                </>
              )}
            </Grid>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(238, 238, 238)",
              mt:5,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "200px",
            }}
          >
            <IMG src={emptyBasket} />
          </Box>
        )}
        <Modals open={openDelete} handleclose={() => handleClose()}>
          <CloseIcon
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              fontSize: 32,
              position: "absolute",
              top: "10px",
              right: "10px",
              border: 3,
              borderColor: "primary.main",
              borderRadius: "11px",
            }}
            onClick={handleClose}
          />
          <EmptyBasket handleCloseModal={handleClose} />
        </Modals>
      </Root>
    </Box>
  );
};

export default LayoutUser(Basket);

//
