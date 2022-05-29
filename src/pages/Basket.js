import React, { useEffect, useState } from "react";
import HttpService from "../axios/HttpService";
import { BASE_URL } from "../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Buttons from "../components/buttons/Button-add";
import LayoutUser from "../components/Layouts/Layout-user";
import { useDispatch, useSelector } from "react-redux";  
import {MainBasket} from "../components/index";

const Img = styled("img")(({ theme }) => ({
  width: "80%",
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
  justifyContent: "center",
  padding: "10px",
}));
const InfoCard = styled("div")(({ theme }) => ({
  width: "60%",
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
  border: "0.5px solid  #ba6b6c",
  borderRadius: "5px",
  height: "100%",
}));

const Basket = (props) => {
  const { info } = props;
  const [counter, setCounter] = useState(1);
  const [isValidIncrease, setIsValidIncrease] = useState(true);
  const [isValidDicrease, setIsValidDicrease] = useState(true);
  const[notValid ,setNotValid] = useState(false)
  const products = useSelector((state) => state);


  // useEffect(() => {
  //   if (info?.count == counter) {
  //     setIsValidIncrease(false);
  //   } else {
  //     setIsValidIncrease(true);
  //   }
  //   if (counter == 0) {
  //     setIsValidDicrease(false);
  //   } else {
  //     setIsValidDicrease(true);
  //   }
  //   if(info?.count ==0){
  //     setCounter(0)
  //     setNotValid(true)
  //     setIsValidDicrease(false);
  //     setIsValidIncrease(false);
  //   }
  // }, [counter]);

  // const handleIncrease = () => {
  //   if (info.count !== 0 && info.count > counter) {
  //     setCounter(counter + 1);
  //   }
  // };

  // const handleDicrease = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <Div sx={{mt:50}}>
    <div>
    {products.products?.map((item) =>(
         <Div>
      <InfoCard sx={{ mt: 5 }} key={item.id}>
        <Typographys sx={{ fontSize: "25px" }}>{info?.name}</Typographys>
        <Box sx={{ fontSize: "15px" }}>{info?.ENname}</Box>
        <Span>
          <Titles>قیمت :</Titles>
          {notValid ? <Typographys>عدم موجودی</Typographys>:<Typographys>{item?.price} تومان</Typographys>}
          
        </Span>

        <Span>
          <Titles>رنگ :</Titles>
        <Typographys>{item?.color}</Typographys>
        </Span>
        <Box >
          <Titles sx={{direction: "rtl"}}>توضیحات :</Titles>
        <Typographys>{item?.description}</Typographys>
    </Box>
        <Buttons>افزودن به سبد خرید</Buttons>
      </InfoCard>
      <Img src={`${BASE_URL}${item?.image}`} />
    </Div> 
    ))}
</div>
   </Div>
  );
};

export default LayoutUser(Basket)