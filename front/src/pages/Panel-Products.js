import React, { useEffect, useState } from "react";
import { ButtonAdd, LayoutAdmin } from "../components/index";
import { TablesProduct } from "../components/index";
import HttpService from "../axios/HttpService";
import useGetAxios from "../axios/useGetAxios";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
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
  // const { data, loading, error }=useGetAxios("products")
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
     const res= await HttpService.get("products?_expand=category&_sort=createdAt&_order=desc")
     setData(res?.data)
  };
  return (
    <Grid item container alignContent={"center"} xs={12}>
      <Root sx={{ mt: 5, fontFamily: "koodak", mx: "auto" }}>
      <Typography
          variant="h3"
          sx={{ direction: "rtl", fontFamily: "koodak" }}
        >
          مدیریت کالا ها
        </Typography>
        <ButtonAdd clickHandler={handleShow} > افزودن کالا</ButtonAdd>
        <TablesProduct products={data} updateData={getData} handleClose={handleClose}/>
       
      </Root>
      <ModalForms open={open} handleclose={() => handleClose()}>
      <CloseIcon
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontSize: 32,
            position: "absolute",
            top: "10px",
            right: "10px",
            border: 3,
            borderColor: "primary.main",
            borderRadius: "11px",
          }}
          onClick={handleClose}
        />
        <ModalAddProduct updateData={getData} handleClose={handleClose}/>
      </ModalForms>
    </Grid>
  );
};

export default LayoutAdmin(PanelProducts);
