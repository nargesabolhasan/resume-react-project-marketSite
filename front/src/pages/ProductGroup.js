import React, { useEffect, useState, useMemo } from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "../components/user/home/Card-Product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useGetAxios from "../axios/useGetAxios";
import { Dashboards } from "../components/index";

const Div = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginTop: "10px",
}));

const FlexBox = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
}));

const Span = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingLeft: "20px",
}));

const ProductGroup = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const limit = useMemo(() => 1, []);
  const [activePage, setActivePage] = useState(1);

  const { data, loading, error } = useGetAxios(
    `/categories/${id}?_embed=products`
  );

  const handleNavigate = (id) => {
    navigate(`/categories/${id}`, { replace: true });
  };
  console.log(data);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Div>
        <Dashboards >
          <Container spacing={1} >
              <>
                {/* <Grid
                  container
                  item
                  xs={12}
                  key={data?.data.id}
                  sx={{ ml: 20, flexWrap: "hidden", direction: "rtl" }}
                >
                  {data?.data.products.map((item) => (
                    <CardProduct product={item} key={item.id} />
                  ))}
                </Grid> */}
                <Grid
                container
                item
                xs={12}
                key={data?.data.id}
                sx={{
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {data?.data.products.map((item) => (
                  <CardProduct product={item} key={item.id} />
                ))}
              </Grid>

              </>
          </Container>
          </Dashboards>
        </Div>
      )}
    </>
  );
};

export default ProductGroup;
