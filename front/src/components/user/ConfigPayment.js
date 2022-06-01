import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setcustomer } from "../../redux/customerRedux/customSlice";
import HttpService from "../../axios/HttpService"


const ConfigPayment = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    useEffect(() => {

        dispatch(setUser())
    },[])

    // await HttpService.post("/products", formData);
    // props.updateData();
    // props.handleClose();
  return (
    <div>ConfigPayment</div>
  )
}

export default ConfigPayment