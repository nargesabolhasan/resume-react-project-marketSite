import React, { useCallback, useEffect, useState,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setcustomer } from "../../redux/customerSlice";
import HttpService from "../../axios/HttpService"


const ConfigPayment = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const data= {
      "customerDetail":
        store.customer,
      "orderStatusId": 3,
      "deliveredAt":"",
      "orderItems": store.products,
    };

  //-----------
  // useEffect(() => {
  //   postData();
  // }, []);
  // //-----------
  const postData = useCallback(async () => {
    await HttpService.post("/exam",data);
  })()


  return (
    <div style={{fontSize:20}}> با تشکر</div>
  )
}

export default memo(ConfigPayment)