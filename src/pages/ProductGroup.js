import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import useGetAxios from "../axios/usePatchAxios";
import axios from "axios"

const ProductGroup = () => {
  let navigate = useNavigate();
  let { name } = useParams();

  // const { data, loading, error } = useGetAxios(`/`);
  // console.log(data);
  axios.post("http://localhost:3002/products" )

  return <h1>Loading...</h1>
};

export default LayoutUser(ProductGroup);
