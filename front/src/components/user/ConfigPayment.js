import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setcustomer } from "../../redux/customerSlice";
import HttpService from "../../axios/HttpService"


const ConfigPayment = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    // useEffect(() => {
    //     dispatch(setcustomer())
    // },[])
console.log(store.customer)
    // await HttpService.post("/products", formData);
    // props.updateData();
    // props.handleClose();
  return (
    <div>ConfigPayment</div>
  )
}

export default ConfigPayment