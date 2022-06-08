import React, { useCallback, useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcustomer } from "../../redux/customerSlice";
import { removeAll } from "../../redux/basketSlice";
import HttpService from "../../axios/HttpService";
import axios from "axios";

const ConfigPayment = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [allProducts, setAllProducts] = useState();

  let updateProduct = {};
  const data = {
    customerDetail: store.customer,
    orderStatus: 3,
    deliveredAt: "-",
    orderItems: store.products,
  };

  useEffect(() => {
    getData();
  }, []);
  //--------------
  useEffect(() => {
    postData();
  }, [allProducts]);
  //--------------
  const getData = async () => {
    const res = await HttpService.get("products?_expand=category");
    setAllProducts(res?.data);
  };
  //--------------
  const postData = async () => {
    store.products?.map((order) => {
      allProducts
        .filter((product) => product.id === order.id)
        .map(async (item) => {
          updateProduct = {
            ...item,
            count: Number(item.count) - Number(order.orderCount),
          };
          await HttpService.patch(`products/${item.id}`, updateProduct, {
            headers: { token: localStorage.getItem("token") },
          });
        });
    });
    removeFromBasket();
  };
  //--------------
  const removeFromBasket = async () => {
    await HttpService.post("orders", data);
    dispatch(removeAll());
  };

  return (
    <div style={{ fontSize: 25, marginTop: "10px" }}>
      فروشگاه آنلاین ایران سیب{" "}
    </div>
  );
};

export default ConfigPayment;
