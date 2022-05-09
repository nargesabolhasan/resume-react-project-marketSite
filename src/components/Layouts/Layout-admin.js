import React from "react";
import {HeaderAdmin} from "../index";
import HeaderAdminLogin from "../admin/Header-admin-login";



const LayoutAdmin = (Component) => {
  return function withHOC({ ...props }) {
    return (
      <>
      {(Component==="PanelLogin")?<HeaderAdminLogin/>:<HeaderAdmin/>}
        <Component {...props} />
      </>
    );
  };
};

export default LayoutAdmin;
