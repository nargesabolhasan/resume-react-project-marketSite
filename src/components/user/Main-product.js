import React, { useEffect, useState, useCallback } from "react";
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
import {
  setProducts,
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/basketSlice";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
//import { selectedProduct ,setProducts} from "../../redux/basketRedux/actions/productActions";
const Img = styled("img")(({ theme }) => ({
  width: "50%",
}));
const Titles = styled("h3")(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 10,
  margin: 5,
  color: "white",
  backgroundColor: "#4f13e3",
  borderRadius: 5,
}));

const Div = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
}));
const InfoCard = styled("div")(({ theme }) => ({
  width: "40%",
  height: "700px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "end",
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
  border: "0.5px solid  #6c4eb8",
  borderRadius: "5px",
  height: "100%",
}));

const MainUser = (props) => {
  const { info } = props;
  const [counter, setCounter] = useState(1);
  const [isValidIncrease, setIsValidIncrease] = useState(true);
  const [isValidDicrease, setIsValidDicrease] = useState(true);
  const [notValid, setNotValid] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  //**modal **//
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  //--------Modal open & close :----------
  const handleShow = () => {
    setOpen(true);
    setClassname("failer");
    setBodyMassages(
      `  موجودی این کالا ${info?.count} عدد است  ، تعداد مورد نظر شما از موجودی بیشتر است `
    );
  };
  const handleClose = () => setOpen(false);

  //-----saveCount:----
  const cancel = () => {
    //alert("Cancelled");
  };

  const saveData = (input) => {
    if (input > Number(info?.count)) {
      setCounter(1);
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
  const handleIncrease = () => {
    if (info.count !== 0 && info.count > +counter) {
      setCounter(+counter + 1);
    }
  };

  const handleDicrease = () => {
    if (+counter > 1) {
      setCounter(+counter - 1);
    }
  };
  console.log(counter);

  const handleShopUpdate = (info, counter) => {
    // (info, counter) => {
    //   if(products.products){
    //     products.products?.map((item=>{
    //       console.log(item.id)
    //       if(item.id==info.id){
    //         console.log("hi")
    //       }else{
    //         dispatch(setProducts(info))
    //       }
    //     }))
    //   }else{
    //     dispatch(setProducts(info))
    //}
  };
  // (info, counter) => {
  //   if(products.products){
  //     products.products?.map((item=>{
  //       console.log(item.id)
  //       if(item.id==info.id){
  //         console.log("hi")
  //       }else{
  //         dispatch(setProducts(info))
  //       }
  //     }))
  //   }else{
  //     dispatch(setProducts(info))
  //   }

  return (
    <>
    <Div>
      <InfoCard sx={{ mt: 5 }}>
        <Typographys sx={{ fontSize: "25px" }}>{info?.name}</Typographys>
        <Box sx={{ fontSize: "15px" }}>{info?.ENname}</Box>
        <Span>
          <Titles>قیمت :</Titles>
          {notValid ? (
            <Typographys>عدم موجودی</Typographys>
          ) : (
            <Typographys>{info?.price} تومان</Typographys>
          )}
        </Span>
        <Span>
          <Titles>تعداد :</Titles>
          <Counter>
            <Button
              variant="outlined"
              sx={{ height: "100%", fontSize: 20, p: 0 }}
              onClick={handleIncrease}
              disabled={!isValidIncrease}
            >
              +
            </Button>
            {/* <Typographys>{counter}</Typographys> */}
            <Box sx={{ p: 3, fontSize: 20, fontFamily: "SansWeb" }}>
              <EasyEdit
                type="text"
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
              sx={{ height: "100%", fontSize: 20, p: 0 }}
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
          <Typographys>{info?.description}</Typographys>
        </Box>
        <Buttons clickHandler={() => handleShopUpdate(info, counter)}>
          افزودن به سبد خرید
        </Buttons>
      </InfoCard>
        <Img src={`${BASE_URL}${info?.image}`} />
      <Modals
        open={open}
        handleclose={() => handleClose()}
        bodyMassages={bodyMassages}
        classname={classname}
      />
    </Div>
          <Box sx={{display:"flex" ,flexDirection: "row",justifyContent: "space-around",alignItems: "center",width: "50%",mt:8,float : "right"}}>
          {thumbnails?.map((image, index) => (
            <img key={index} src={`${BASE_URL}${image}`} style={{ width: "100px" }} />
          ))}
        </Box>
</>
  );
};

export default MainUser;

//let orderCount=products.orderCount + input.orderCount
// dispatch(removeSelectedProduct(input))
// // input = { ...input, "orderCount": orderCount };
// // dispatch(setProducts(input));
// console.log(product.id )
// } else {
// input = { ...input, "orderCount": counter };
// dispatch(setProducts(input));
