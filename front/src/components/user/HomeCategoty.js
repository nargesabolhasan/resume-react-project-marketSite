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
import iphone from "../../assets/images/HomePage/8.webp";
import  "../../assets/Core-ui/Core-styles.scss"


const Wraper = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

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
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: theme.spacing(2),
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: theme.palette.Shadow.main,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: theme.spacing(2),
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor:theme.palette.Shadow.main,
    width: "100%",
    padding:"20px 0",
    marginBottom:"20px",
    fontSize: "30px",
    fontFamily: "koodak",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor:theme.palette.Shadow.main,
    width: "100%",
    padding:"20px 0",
    marginBottom:"20px",
    fontSize: "30px",
    fontFamily: "koodak",
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor:theme.palette.Shadow.main,
    width: "100%",
    padding:"20px 0",
    marginBottom:"20px",
    fontSize: "30px",
    fontFamily: "koodak",
    textAlign: "center",
  },
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.up("md")]: {
    width: "300px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "300px",
  },
}));

const HomeCategoty = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useGetAxios(`/categories/?_embed=products`);
  const images = [macmini, mac16, mac14, mac13, macAir, imac, ipadPro,iphone];
  const handleNavigate = (id) => {
    navigate(`/categories/${id}`);
  };
  //const user = useSelector((state) => state);
  return (
    <div style={{width: "100%"}}>
      {loading ? (
        <div className="lds-ripple"><div></div><div></div></div>
      ) : (
        <Box  style={{width: "100%"}}>
          <Header>دسته بندی محصولات </Header>
          <Wraper item xs={12}>
            {data?.data.map((item, index) => (
              <CardWraper
                xs={6}
                key={item.id}
                onClick={() => {
                  handleNavigate(item.id);
                }}
              >
                <Img src={images[index]} alt="test" />
                <Titles>{item.name}</Titles>
              </CardWraper>
            ))}
          </Wraper>
        </Box>
      )}
    </div>
  );
};

export default HomeCategoty;
