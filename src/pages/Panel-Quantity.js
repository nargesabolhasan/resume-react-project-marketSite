import React, { useEffect, useState } from "react";
import {
  ButtonAdd,
  InputChange,
  LayoutAdmin,
  SortData,
  TableQuantity,
} from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "90%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
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
    const res=await HttpService.get("products")
    setData(res?.data);
  };

  return (
    <Grid item container alignContent={"center"} xs={12}>
      <Root sx={{ mt: 5, fontFamily: "koodak", mx: "auto" }}>
        
        <Typography
          variant="h3"
          sx={{ direction: "rtl", fontFamily: "koodak" }}
        >
          موجودی و قیمت ها
        </Typography>
        <SortData products={data} />
      </Root>
    </Grid>
  );
};

export default LayoutAdmin(PanelQuantity);
