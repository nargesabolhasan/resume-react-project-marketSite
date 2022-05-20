//import LayoutAdmin from "../components/Layouts/Layout-admin";
import { React, useEffect, useState, useContext, useCallback } from "react";
import FormValidation from "../components/admin/FormValidation";
import HttpService from "../axios/HttpService";
import back from "../assets/images/logo/backLogin.jpg"
import LayoutUser from "../components/Layouts/Layout-user"
//import 
import Container from "@mui/material/Container";
const PanelLogin = () => {
  return (
    <Container sx={{mr:0,display: 'flex',flexDirection: 'row',width: '100%',m:0,justifyContent: 'center',alignItems: 'center',spacing:4}} >
      <FormValidation />
    </Container>
  );
};

export default LayoutUser(PanelLogin);
