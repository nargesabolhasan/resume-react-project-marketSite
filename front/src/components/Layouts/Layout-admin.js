import React from "react";
import {HeaderAdmin} from "../index";




const LayoutAdmin = (Component) => {
  return function withHOC({ ...props }) {
    return (
      <>
      <HeaderAdmin/>
        <Component {...props} />
      </>
    );
  };
};

export default LayoutAdmin;
