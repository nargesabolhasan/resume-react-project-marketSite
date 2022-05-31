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
import { setProducts, removeSelectedProduct } from "../../redux/basketSlice";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

//import { selectedProduct ,removeSelectedProduct} from "../../redux/basketRedux/actions/productActions";

const Img = styled("img")(({ theme }) => ({
  width: "70%",
}));
const Titles = styled("h3")(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 10,
  margin: 5,
  color: "white",
  backgroundColor: "#ba6b6c",
  borderRadius: 5,
}));

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
}));
const InfoCard = styled("div")(({ theme }) => ({
  width: "50%",
  height: "700px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}));

const Typographys = styled("div")(({ theme }) => ({
  direction: "rtl",
  fontSize: "20px",
  fontFamily: "SansWeb",
  padding: "5px",
}));

const Span = styled("span")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  direction: "rtl",
  minHeight: "50px",
}));

const Counter = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "1px solid  #ba6b6c",
  borderRadius: "5px",
  height: "100%",
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
    const data = { ...info, orderCount: counter };
    dispatch(setProducts(data));
  };

  return (
    <>
      <Div sx={{ mt: 10}}xs={12}>
        <Grid item xs={6} sx={{width:"50%"}}>
          <InfoCard sx={{ mt: 5, backgroundColor: "amber.main" ,mx:'auto'}}>
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
              <Counter sx={{ maxHeight: "80px",}}>
                <Button
                  variant="outlined"
                  sx={{ height: "100%", fontSize: 20, p: 0 ,border:2}}
                  onClick={handleIncrease}
                  disabled={!isValidIncrease}
                >
                  +
                </Button>
                <Box sx={{ p: 3, fontSize:15, fontFamily: "SansWeb" }}>
                  <EasyEdit
                    type="number"
                    onSave={(e) => saveData(e)}
                    onCancel={cancel}
                    saveButtonLabel="ذخیره "
                    cancelButtonLabel="لغو "
                    attributes={{ name: "awesome-input", id: 1 }}
                    value={counter}
                    instructions={`تعداد موجودی :${info?.count}`}
                  />
                </Box>
                <Button
                  variant="outlined"
                  sx={{ height: "100%", fontSize: 20, p: 0 ,border:2}}
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
              <Titles sx={{ direction: "rtl" }}>توضیحات :</Titles>
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
        <Grid item xs={6} sx={{width:"50%"}}>
          <Img src={`${BASE_URL}${info?.image}`} sx={{mx:'auto'}}/>
          {!galleryIsEmpty ?(
          <Box
            sx={{
              mx:'auto',
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "end",
              width: "15%",
            }}
          >
       {       thumbnails?.map((image, index) => (
                <img
                  key={index}
                  src={`${BASE_URL}${image}`}
                  style={{ width: "100px" }}
                />
              ))}
              </Box>) : (
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
