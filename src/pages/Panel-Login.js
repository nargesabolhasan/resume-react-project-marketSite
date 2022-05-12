//import LayoutAdmin from "../components/Layouts/Layout-admin";
import { React, useEffect, useState, useContext, useCallback } from "react";
import FormValidation from "../components/admin/FormValidation";
import HttpService from "../axios/HttpService";
//import 
import Container from "@mui/material/Container";
const PanelLogin = () => {
  return (
    <Container >
      <FormValidation />
    </Container>
  );
};

export default PanelLogin;
