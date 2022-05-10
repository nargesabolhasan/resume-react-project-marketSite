import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../components/index";
import { Table } from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles'
import Zor from "../components/admin/Zor";

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

const PanelProducts = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  //-----------
  useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setCategory(await HttpService.get("categories?_embed=products"));
    setData(await HttpService.get("products"));
  };

  return (
    <Grid item container alignContent={'center'} xs={12}>
    <Root sx={{mt:5,fontFamily:"koodak",mx: "auto"}}>
      <Typography  variant="h3" sx={{direction: 'rtl',mt:5,fontFamily:"koodak"}}>مدیریت کالا ها</Typography>
      <Table products={data} category={category} />
    </Root>
    </Grid>
  );
};

export default LayoutAdmin(PanelProducts);
