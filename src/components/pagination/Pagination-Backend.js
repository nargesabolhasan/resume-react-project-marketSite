import React, { useMemo, useState } from "react";
import useGetAxios from "../../axios/useGetAxios";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "../user/home/Card-Product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
paddingLeft: "20px"
}));


const PaginationBackend = () => {
  const limit = useMemo(() => 2, []);
  const [activePage, setActivePage] = useState(1);
  // const { data, loading, error } = useGetAxios(
  //   `/products?_page=${activePage}&_limit=${limit}}`
  // );
  const { data, loading, error } = useGetAxios(
    `/categories?_embed=products&_page=${activePage}&_limit=${limit}}`
  );
  console.log(data);

  return (
    <Div>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Container spacing={1}>
          {data?.map((record) => (
            <Grid container item xs={12} key={record.id} sx={{ml:20,flexWrap:"hidden"}}>
              <NavLink to={`/Product/${record.name}`}>{record.name}</NavLink>
              {record.products.map((item) => (
                <CardProduct product={item} key={item.id}/>
              ))}
            </Grid>
          ))}
        </Container>
      )}
      <Pagination
        variant="outlined"
        color="primary"
        defaultPage={1}
        page={activePage}
        count={Math.ceil(49 / limit)}
        onChange={(_, page) => setActivePage(page)}
      />
    </Div>
  );
};

export default PaginationBackend;

//data?.headers["x-total-count"];
