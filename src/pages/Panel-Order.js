import React, { useEffect, useState } from "react";
import { InputChange, LayoutAdmin ,FilterOrders,TableOrder} from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles'
import Pagination from "../components/admin/Pagination";

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    width:"90%",
    textAlign: "center"
  },
  [theme.breakpoints.up('md')]: {
    width:"80%",
  },
  [theme.breakpoints.up('lg')]: {
    width:"70%",
  },
}));

const PanelOrder = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    const res= await HttpService.get("orders")
    setItem(res?.data)
  
    //setData(await HttpService.get("/products?_embed=exam").data);
    //setItem(await HttpService.get("orders"));
  };
  
  return (
    <Grid item container alignContent={'center'} xs={12}>
    <Root sx={{mt:5,fontFamily:"koodak",mx: "auto"}}>
      <Typography  variant="h3" sx={{direction: 'rtl',mt:5,fontFamily:"koodak"}}>مدیریت سفارش ها</Typography>
       <FilterOrders products={item}/> 
      {/* <Pagination/> */}
    </Root>
    </Grid>
  )
}

export default LayoutAdmin(PanelOrder)