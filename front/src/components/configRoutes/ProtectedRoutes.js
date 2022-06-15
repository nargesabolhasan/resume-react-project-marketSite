import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const location = useLocation();
  const user = useSelector((state) => state);
  const token=localStorage.getItem("token")
  const useAuth = () => {
    if (token ) {
      return true
    } else { 
      return false
    }
    
  };

  useEffect(() => {
    //...
  }, [location]);
  const isAuth = useAuth();

  return isAuth ?  <Outlet/>: <Navigate to="/PanelLogin" /> ;
};

export default ProtectedRoutes;
