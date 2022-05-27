import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const location = useLocation();
  const useAuth = () => {
    const user = useSelector((state) => state);
    if (Object.keys(user.user).length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    //...
  }, [location]);
  const isAuth = useAuth();

  return isAuth ? <Outlet />: <Navigate to="/PanelLogin" /> ;
};

export default PublicRoutes;
