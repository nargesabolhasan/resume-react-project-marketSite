import LayoutAdmin from "../components/Layouts/Layout-admin";
import { React, useEffect, useState, useContext, useCallback } from "react";
import FormValidation from "../components/admin/FormValidation";
import HttpService from "../axios/HttpService";

const PanelLogin = () => {
  return (
    <>
      <FormValidation />
    </>
  );
};

export default LayoutAdmin(PanelLogin);
