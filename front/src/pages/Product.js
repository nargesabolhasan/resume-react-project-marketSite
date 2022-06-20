import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import MainUser from "../components/user/Main-product";
import { useNavigate, useParams } from "react-router-dom";
import useGetAxios from "../axios/useGetAxios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "../assets/Core-ui/Core-styles.scss";

const Product = () => {
  let navigate = useNavigate();
  let { name } = useParams();

  const { data, loading, error } = useGetAxios(
    `products/${name}?_expand=category`
  );

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { lg: 20, md: 15, xs: 2 },
          }}
        >
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </Box>
      ) : (
        <Box>
          <MainUser info={data?.data} />
        </Box>
      )}
    </Box>
  );
};

export default LayoutUser(Product);
