import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import HttpService from "../../axios/HttpService";
import axios from "axios";
import { FilterOrders } from "..";
const Pagination = () => {
  let params = useParams();
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);

  const limit = 5;
  const page = params.page ?? 1;
  const totalpages = Math.ceil(count / limit);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders", {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      .then((response) => {
        setOrder(response.data);
        setCount(response.headers["x-total-count"]);
      });
  }, [page]);
  //-----------
  console.log(order);
  return (
    <>
      <ul>
        {order.map((order) => {
        //   <li key={order.id}>{order.orderNumber}</li>;
        console.log(order.orderNumber)
        })}
      </ul>
      {new Array(totalpages).fill(null).map((v, i) => (
        <Link to="/PanelOrder" key={i}>
          {i + 1}
        </Link>
      ))}
    </>
  );
};

export default Pagination;
