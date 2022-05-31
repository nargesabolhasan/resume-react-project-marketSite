import React ,{useEffect}from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  width: "80%",
}));
const handle=()=>{
  window.open("http://127.0.0.1:5500/paymentHTML/index.html");
}

const Payment = () => {
  const location = useLocation();
  const result=location.search;



  return (
    <Div sx={{mt:20}}>Payment
      <Button onClick={handle}>
        hi
      </Button>
    </Div>
  )
}

export default LayoutUser(Payment)