import React, { useEffect, useState } from "react";
import { ButtonAdd, LayoutAdmin } from "../components/index";
import { TablesProduct } from "../components/index";
import HttpService from "../axios/HttpService";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ModalForms from "../components/modal/ModalForms";
import ModalAddProduct from "../components/admin/panelProduct/Form-addProduct";

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

const PanelProducts = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  //**modal **//
  const [open, setOpen] = useState(false);
  const [classname, setClassname] = useState("");
  //--------Modal open & close :----------

  const handleShow = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
    <Grid item container alignContent={"center"} xs={12}>
      <Root sx={{ mt: 5, fontFamily: "koodak", mx: "auto" }}>
        <ButtonAdd clickHandler={handleShow}> افزودن کالا</ButtonAdd>
        <Typography
          variant="h3"
          sx={{ direction: "rtl", mt: 5, fontFamily: "koodak" }}
        >
          مدیریت کالا ها
        </Typography>
        <TablesProduct products={data} category={category} />
      </Root>
      <ModalForms open={open} handleclose={() => handleClose()}>
        <ModalAddProduct />
      </ModalForms>
    </Grid>
  );
};

export default LayoutAdmin(PanelProducts);
