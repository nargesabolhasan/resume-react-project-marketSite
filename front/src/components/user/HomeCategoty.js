import React from "react";
import useGetAxios from "../../axios/useGetAxios";
import { useNavigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Titles = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
}));

const HomeCategoty = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useGetAxios(`/categories/?_embed=products`);
  const handleNavigate = (id) => {
    navigate(`/categories/${id}`);
  };
  //const user = useSelector((state) => state);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box item xs={6}>
          {data?.data.map((item) => (
            <Grid item xs={6} key={item.id} onClick={handleNavigate}>
              
              <Titles>{item.name}</Titles>
            </Grid>
          ))}
        </Box>
      )}
    </div>
  );
};

export default HomeCategoty;
