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
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useGetAxios from "../axios/useGetAxios";
import { Dashboards } from "../components/index";
import "../assets/Core-ui/Core-styles.scss";

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
const Titles = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    fontFamily: "koodak",
    width: "100%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    fontFamily: "koodak",
    width: "100%",
    textAlign: "center",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
    fontFamily: "koodak",
    width: "100%",
    textAlign: "center",
  },
}));

const ProductGroup = () => {
  let { id } = useParams();
  const limit = useMemo(() => 2, []);
  const [activePage, setActivePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const { data, loading, error } = useGetAxios(
    `categories/${id}?_embed=products`
  );

  return (
    <>
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
        <Div>
          <Dashboards >
            <Container spacing={1}>
              <>
                <Paper
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
                    backgroundColor: "Shadow.main",
                    mt: { lg: 12, md: 15, xs: 2 },
                    mx: "auto",
                    p: 5,
                  }}
                >
                  <Titles>محصولات مشابه :</Titles>
                  {data?.data.products?.slice(
                (activePage-1) * rowsPerPage,
                (activePage-1 ) * rowsPerPage + rowsPerPage
              ).map((item) => (
                    <CardProduct product={item} key={item.id} />
                  ))}
                </Paper>
                <Pagination
                  sx={{
                    m: 6,
                    p: 2,
                    border: 3,
                    borderColor: "primary.main",
                    borderRadius: 3,
                    width: "400px",
                    mx:"auto"
                  }}
                  variant="outlined"
                  color="primary"
                  defaultPage={1}
                  page={activePage}
                  count={Math.ceil(data?.data.products.length / limit)}
                  onChange={(_, page) => setActivePage(page)}
                  rowsPerPage={rowsPerPage}
                />
              </>
            </Container>
          </Dashboards>
        </Div>
      )}
    </>
  );
};

export default ProductGroup;
