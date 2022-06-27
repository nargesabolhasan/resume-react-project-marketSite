import React, { useEffect, useState, useCallback, useRef } from "react";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Buttons from "../buttons/Button-add";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../modal/Modals";
import { setProducts, removeSelectedProduct,setfirstProducts } from "../../redux/basketSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./home/CardStyles.scss";
import backProduct from "../../assets/images/avatar/backProduct.png"

const Thumbnails = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "80px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100px",
  },
 
}));
const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
  },
 
}));
const Titles = styled("h3")(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 10,
  margin: "6px",
  color: "black",
  backgroundColor: "#ba6b6c",
  borderRadius: 5,
  fontFamily: "SansWeb",
  minWidth: "100px",
  height:"50px"

}));

const Div = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
    backgroundImage: `url(${backProduct})`
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
    backgroundImage: `url(${backProduct})`
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
    backgroundImage: `url(${backProduct})`
  },
}));
const InfoCard = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90%",
    minHeight: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundColor: "rgb(238, 238, 238)"
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    minHeight: "700px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundColor: "rgb(238, 238, 238)"
  },
  [theme.breakpoints.up("lg")]: {
    width: "90%",
    minHeight: "750px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundColor: "rgb(238, 238, 238)"
  },
}));

const Typographys = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    direction: "rtl",
    fontSize: "15px",
    fontFamily: "SansWeb",
    padding: "5px",
  },
  [theme.breakpoints.up("md")]: {
    direction: "rtl",
    fontSize: "15px",
    fontFamily: "SansWeb",
    padding: "5px",
  },
  [theme.breakpoints.up("lg")]: {
    direction: "rtl",
    fontSize: "18px",
    fontFamily: "SansWeb",
    padding: "5px",

  },
}));

const Span = styled("span")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  direction: "rtl",
  marginTop: "4px"
}));

const Counter = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid  #ba6b6c",
    borderRadius: "5px",
    height: "100%",
    width: "250px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid  #ba6b6c",
    borderRadius: "5px",
    height: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "1px solid  #ba6b6c",
    borderRadius: "5px",
    height: "100%",
  },
}));

const MainUser = (props) => {
  const { info } = props;
  const [counter, setCounter] = useState(1);
  const [isValidShopping, setIsValidShopping] = useState(true);
  const [isValidIncrease, setIsValidIncrease] = useState(true);
  const [isValidDicrease, setIsValidDicrease] = useState(true);
  const [notValid, setNotValid] = useState(false);
  const caption = useRef();
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  //**modal **//
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [galleryIsEmpty, setGalleryIsEmpty] = useState(false);

  useEffect(() => {
    caption.current.innerHTML = info?.description;
  }, []);

  //--------Modal open & close :----------
  const handleShow = () => {
    setOpen(true);
    setClassname("failer");
  };
  const handleClose = () => setOpen(false);
  //-----dollarUSLocale:---
  let dollarUSLocale = Intl.NumberFormat("en-US");

  //-----saveCount:----
  const cancel = () => {
    //alert("Cancelled");
  };

  const validation = (e) => {
    if (e >= 0) {
      return e;
    }
  };

  const saveData = (input) => {
    if (input > Number(info?.count)) {
      setCounter("1");
      setBodyMassages(
        `  موجودی این کالا ${info?.count} عدد است  ، تعداد مورد نظر شما از موجودی بیشتر است `
      );
      handleShow();
    } else if (input <= 0) {
      setCounter("1");
      setBodyMassages(` عدد بزرگتر از 1 وارد کنید`);
      handleShow();
    } else {
      setCounter(input);
    }
  };

  useEffect(() => {
    if (info?.count == counter) {
      setIsValidIncrease(false);
    } else {
      setIsValidIncrease(true);
    }
    if (counter == 1) {
      setIsValidDicrease(false);
    } else {
      setIsValidDicrease(true);
    }
    if (info?.count == 0) {
      setCounter(0);
      setNotValid(true);
      setIsValidDicrease(false);
      setIsValidIncrease(false);
      setIsValidShopping(false);
    }
  }, [counter]);
  //------------

  useEffect(() => {
    (() => {
      let answ = info?.thumbnail.split(",");
      setThumbnails(answ);
    })();
  }, []);
  //------------
  useEffect(() => {
    if (thumbnails.length > 0) {
      setGalleryIsEmpty(false);
    } else {
      setGalleryIsEmpty(true);
    }
  }, [thumbnails.length]);

  //------------
  const handleIncrease = () => {
    if (info.count !== 0 && info.count > +counter) {
      setCounter(+counter + 1);
    }
  };
  //------------
  const handleDicrease = () => {
    if (+counter > 1) {
      setCounter(+counter - 1);
    }
  };

  const handleShopUpdate = (info, counter) => {
    if(products.products?.length > 0) {
      products.products?.map((item) => {
      if (item.id === info.id) {
        dispatch(removeSelectedProduct(item));
      }
    });
    const data = { ...info, orderCount: counter };
    dispatch(setProducts(data));
  }else{
    const data = { ...info, orderCount: counter };
    dispatch(setfirstProducts(data));
  }
}

  return (
    <>
      <Div xs={12}>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sx={{
            width: { lg: "50%", md: "50%", xs: "100%" },
            mt: { lg: 20, md: 20, xs: 5 },
            order: { lg: 1, md: 1, xs: 2 },
          }}
        >
          <InfoCard sx={{ mt: 5, mx: "auto" }}>
            <Typographys sx={{ textAlign: "end" }}>
              {products.products.length>0 && products.products?.map((item) => {
                if (item.id === info?.id) {
                  return (
                    <Typography
                      key={info?.id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        fontSize: "15px",
                        fontFamily: "SansWeb",
                        direction: "rtl",
                        backgroundColor: "success.main",
                        p: 1,
                        borderRadius: "30px",
                      }}
                    >
                      {item?.orderCount} عدد در <AddShoppingCartIcon />
                    </Typography>
                  );
                }
              })}
            </Typographys>
            <Typographys sx={{ fontSize: "25px" }}>{info?.name}</Typographys>
            <Box sx={{ fontSize: "15px" }}>{info?.ENname}</Box>
            <Span>
              <Titles>دسته بندی :</Titles>
              <Typographys sx={{ fontSize: "25px" }}>
                {info?.category.name}
              </Typographys>
            </Span>
            <Span>
              <Titles>قیمت :</Titles>
              {notValid ? (
                <Typographys>عدم موجودی</Typographys>
              ) : (
                <Typographys>
                  {dollarUSLocale.format(info?.price)} تومان
                </Typographys>
              )}
            </Span>
            <Span>
              <Titles>تعداد :</Titles>
              <Counter sx={{ maxHeight: "80px" }}>
                <Button
                  variant="outlined"
                  sx={{
                    height: "80px" ,
                    fontSize: 20,
                    p: 0,
                    border: 2,
                  }}
                  onClick={handleIncrease}
                  disabled={!isValidIncrease}
                >
                  +
                </Button>
                <Box
                  sx={{
                    p: 3,
                    fontSize: 15,
                    fontFamily: "SansWeb",
                    display: "flex",
                    flexDirection: { lg: "row", md: "column", xs: "column" },
                  }}
                >
                  <EasyEdit
                    type="number"
                    onSave={(e) => saveData(e)}
                    onCancel={cancel}
                    saveButtonLabel="ذخیره "
                    cancelButtonLabel="لغو "
                    attributes={{ name: "awesome-input", id: 1 }}
                    value={counter}
                    instructions={`تعداد موجودی :${info?.count}`}
                    //onValidate={validation}
                  />
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    height: "80px" ,
                    fontSize: 20,
                    p: 0,
                    border: 2,
                  }}
                  onClick={handleDicrease}
                  disabled={!isValidDicrease}
                >
                  -
                </Button>
              </Counter>
            </Span>
            <Span>
              <Titles>رنگ :</Titles>
              <Typographys>{info?.color}</Typographys>
            </Span>
            <Box>
              <Titles sx={{ direction: "rtl",}}>توضیحات :</Titles>
              <Typographys ref={caption}> </Typographys>
            </Box>
            <Buttons
              clickHandler={() => handleShopUpdate(info, counter)}
              disabled={!isValidShopping}
            >
              افزودن به سبد خرید
            </Buttons>
          </InfoCard>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sx={{
            width: { lg: "50%", md: "50%", xs: "100%" },
            order: { lg: 1, md: 1, xs: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Img src={`${BASE_URL}${info?.image}`} sx={{ mx: "auto" }} />
          {!galleryIsEmpty ? (
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "15%",
              }}
            >
              {thumbnails?.map((image, index) => (
                <Thumbnails
                  className="GalleryCard"
                  key={index}
                  src={`${BASE_URL}${image}`}
                  // style={{ width: "100px" }}
                />
              ))}
            </Box>
          ) : (
            <></>
          )}
        </Grid>
      </Div>
      <Modals
        open={open}
        handleclose={() => handleClose()}
        bodyMassages={bodyMassages}
        classname={classname}
      />
    </>
  );
};

export default MainUser;
