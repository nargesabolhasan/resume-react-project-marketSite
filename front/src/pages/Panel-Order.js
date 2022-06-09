import React, { useEffect, useState } from "react";
import { InputChange, LayoutAdmin ,FilterOrders,} from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'


const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    width:"100%",
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
  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    const result= await HttpService.get("orders?_sort=customerDetail.orderDate&_order=desc")
    setData(result?.data)
  };
  
  return (
    <Grid item container alignContent={'center'} xs={12}>
    <Root sx={{mt:5,fontFamily:"koodak",mx: "auto"}}>
      <Typography  variant="h3" sx={{direction: 'rtl',fontFamily:"koodak"}}>مدیریت سفارش ها</Typography>
       <FilterOrders products={data} updateData={getData}/> 
    </Root>
    </Grid>
  )
}

export default LayoutAdmin(PanelOrder)