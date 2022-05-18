import React, { useEffect, useState,useMemo } from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "../components/user/home/Card-Product"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useGetAxios from "../axios/useGetAxios"

const Div = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  overflow: "hidden",
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
  console.log(data)

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box>
          <Div>
            <Container spacing={1}>
                <Grid
                  container
                  item
                  xs={12}
                  key={data?.id}
                  sx={{ ml: 20, flexWrap: "hidden" }}
                >
                  <Button
                    variant="outlined"
                    sx={{ fontFamily: "koodak" }}
                    onClick={() => handleNavigate(data?.id)}
                  >
                    {data?.name}
                  </Button>
                  {data?.products.map((item) => (
                    <CardProduct product={item} key={item?.id} />
                  ))}
                </Grid>
            </Container>
          </Div>
        </Box>
      )}
    </>
  );
};

export default LayoutUser(ProductGroup);
