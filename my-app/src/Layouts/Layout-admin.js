import React from "react";
import HeaderUserAdmin from "../admin/Header-admin";

const LayoutAdmin = (Component) => {
  return function withHOC({ ...props }) {
    return (
      <>
        <HeaderUserAdmin />
        <Component {...props} />
      </>
    );
  }
};

export default LayoutAdmin;
