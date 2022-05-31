import React,{useEffect,useState} from 'react'
import LayoutUser from "../components/Layouts/Layout-user"
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  width: "80%",
}));

const ResultPayment = () => {
  const location = useLocation();
  const result=location.search;
  const [isSuccess,setIsSuccess]=useState(false)

  useEffect(() => {
if(result==="?failer"){
  setIsSuccess(false)
}else{
  setIsSuccess(true)
}
  }, [result]);

  return (
    <Div sx={{mt:20}}>ResultPayment
      {isSuccess?<>hi</>:<>bye</>}
    </Div>
  )
}

export default LayoutUser(ResultPayment)