import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../components/index";
import { Table } from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from 'styled-components';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
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
    <root>
    <Box sx={{mt:5,fontFamily:"koodak"}}  lg={{width:"px"}}>
      <Typography  variant="h3" sx={{direction: 'rtl',mt:5,fontFamily:"koodak"}}>مدیریت کالا ها</Typography>
      <Table products={data} category={category} />
    </Box>
    </root>
  );
};

export default LayoutAdmin(PanelProducts);
