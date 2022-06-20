import React, { useMemo, useState } from "react";
import useGetAxios from "../../../axios/useGetAxios";
import Pagination from "@mui/material/Pagination";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "./Card-Product";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import  "../../../assets/Core-ui/Core-styles.scss"

const CardWraper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
    //margin:"0 auto",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
  },
}));

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
  const limit = useMemo(() => 1, []);
  const [activePage, setActivePage] = useState(1);
  let navigate = useNavigate();

  const { data, loading, error } = useGetAxios(
    `/categories?_embed=products&_page=${activePage}&_limit=${limit}`
  );

  const handleNavigate = (id) => {
    navigate(`/categories/${id}`);
  };

  return (
    <Div>
      {loading ? (
        <div className="lds-ripple"><div></div><div></div></div>
      ) : (
        <Paper
          spacing={1}
          sx={{
            width: { lg: "80%", md: "80%", xs: "100%" },
            p: { lg: 3, md: 3, xs: 2 },
            borderRadius: "10px",
            boxShadow: "-5px 10px 20px 2px #ba6b6c37",
            backgroundColor:"Shadow.main",
          }}
        >
          <Typography  variant="h4"sx={{mx:"auto",height:"100px",fontFamily:"koodak",p:3}}>محصولات دسته بندی شده : </Typography>
          {data?.data?.map((record) => (
            <Box key={record.id}>
              <CardWraper onClick={() => handleNavigate(record.id)}>
                {record.name}
              </CardWraper>
              <Grid
                container
                item
                xs={12}
                key={record.id}
                sx={{
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {record.products.map((item) => (
                  <CardProduct product={item} key={item.id} />
                ))}
              </Grid>
            </Box>
          ))}
        </Paper>
      )}
      <Pagination
        sx={{
          m: 6,
          p:2,
          border: 3,
          borderColor: "primary.main",
          borderRadius: 3,
        }}
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
