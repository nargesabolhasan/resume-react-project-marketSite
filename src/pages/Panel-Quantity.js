import React, { useEffect, useState } from "react";
import { InputChange, LayoutAdmin ,SortData,TableQuantity} from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles'

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


const PanelQuantity = () => {
  const [data, setData] = useState([]);

  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setData(await HttpService.get("products"));
  };

  return (
    <Grid item container alignContent={'center'} xs={12}>
    <Root sx={{mt:5,fontFamily:"koodak",mx: "auto"}}>
      <Typography  variant="h3" sx={{direction: 'rtl',mt:5,fontFamily:"koodak"}}>مدیریت کالا ها</Typography>
      <TableQuantity products={data}/>
      <SortData/>
    </Root>
    </Grid>
  );
}

export default LayoutAdmin(PanelQuantity)