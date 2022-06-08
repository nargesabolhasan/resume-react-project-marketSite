import React from "react";
import useGetAxios from "../../axios/useGetAxios";
import { useNavigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import macmini from "../../assets/images/HomePage/1.webp";
import mac16 from "../../assets/images/HomePage/2.webp";
import mac14 from "../../assets/images/HomePage/3.webp";
import mac13 from "../../assets/images/HomePage/4.webp";
import macAir from "../../assets/images/HomePage/5.webp";
import imac from "../../assets/images/HomePage/6.webp";
import ipadPro from "../../assets/images/HomePage/7.webp";

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

const CardWraper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.up("lg")]: {
     backgroundColor:theme.palette.Shadow.main
  },
}));

const HomeCategoty = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useGetAxios(`/categories/?_embed=products`);
  const images=[macmini,mac16,mac14,mac13,macAir,imac,ipadPro]
  const handleNavigate = (id) => {
    navigate(`/categories/${id}`);
  };
  //const user = useSelector((state) => state);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box item xs={12}>
          {data?.data.map((item,index) => (
            <CardWraper item xs={6} key={item.id} onClick={handleNavigate}>
              <img src={images[index]} alt ="test" style={{width:300}}/>
              <Titles>{item.name}</Titles>
            </CardWraper>
          ))}
        </Box>
      )}
    </div>
  );
};

export default HomeCategoty;
