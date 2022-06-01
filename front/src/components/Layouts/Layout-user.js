import React from "react";
import HeaderUserStore from "../user/Header-user-store";
import FooterUser from "../user/FooterUser";

const LayoutUser = (Component) => {
  return function withHOC({ ...props }) {
    return (
      <>
        <HeaderUserStore />
        <Component {...props} />
      </>
    );
  }
};

export default LayoutUser;