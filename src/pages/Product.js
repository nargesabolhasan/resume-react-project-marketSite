import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import MainUser from "../components/user/Main-product";
import { useNavigate, useParams } from "react-router-dom";
import useGetAxios from "../axios/useGetAxios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Product = () => {
  let navigate = useNavigate();
  let { name } = useParams();


  const { data, loading, error } = useGetAxios(`/Products/${name}`);

  return (
    <Box >
      {loading ? <h1>Loading...</h1> : <Box>
      <MainUser info={data?.data}/>
      </Box>}
    </Box>
  );
};

export default LayoutUser(Product);
