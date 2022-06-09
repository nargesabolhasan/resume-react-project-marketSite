//import LayoutAdmin from "../components/Layouts/Layout-admin";
import { React, useEffect, useState, useContext, useCallback } from "react";
import FormValidation from "../components/admin/login/FormValidation";
import HttpService from "../axios/HttpService";
import back from "../assets/images/logo/backLogin.jpg"
import LayoutUser from "../components/Layouts/Layout-user"
import backProduct from "../assets/images/avatar/backProduct.png";
import Container from "@mui/material/Container";
const PanelLogin = () => {
  return (
    <Container  sx={{backgroundImage: `url(${backProduct})`,minHeight:{lg:"1000px",md:"1000px",xs:"600px"}}} >
      <FormValidation />
    </Container>
  );
};

export default LayoutUser(PanelLogin);

//sx={{mr:0,display: 'flex',flexDirection: 'row',width: '100%',m:0,justifyContent: 'center',alignItems: 'center',spacing:4}}