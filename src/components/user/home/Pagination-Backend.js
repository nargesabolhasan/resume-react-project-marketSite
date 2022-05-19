import React, { useMemo, useState } from "react";
import useGetAxios from "../../../axios/useGetAxios";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "./Card-Product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Div = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  overflow: "hidden",
  direction: "rtl",
  marginTop: "20px",
}));

const Span = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingLeft: "20px",
}));

const PaginationBackend = () => {
  const limit = useMemo(() => 2, []);
  const [activePage, setActivePage] = useState(1);
  let navigate = useNavigate();

  const { data, loading, error } = useGetAxios(
    `/categories?_embed=products&_page=${activePage}&_limit=${limit}`
  );

  const handleNavigate = (id) => {
    navigate(`/categories/${id}`, { replace: true });
  };

  return (
    <Div>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Container spacing={1}>
          {data?.data.map((record) => (
            <Box key={record.id}>
              <Button
              variant="contained"
                sx={{ fontFamily: "koodak", height: "10px", p: 4 ,width:"100%", border:3,fontSize: 25}}
                onClick={() => handleNavigate(record.id)}
              >
                {record.name}
              </Button>
              <Grid
                container
                item
                xs={12}
                key={record.id}
                sx={{ ml: 20, flexWrap: "hidden", direction: "rtl" }}
              >
                {record.products.map((item) => (
                  <CardProduct product={item} key={item.id} />
                ))}
              </Grid>
            </Box>
          ))}
        </Container>
      )}
      <Pagination
        variant="outlined"
        color="primary"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(data?.headers["x-total-count"] / limit)}
        onChange={(_, page) => setActivePage(page)}
      />
    </Div>
  );
};

export default PaginationBackend;

//data?.headers["x-total-count"];
