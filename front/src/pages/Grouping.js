import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, Outlet } from "react-router-dom";
import { MainUser, ModalAddProduct } from "../components";
import CardProduct from "../components/user/home/Card-Product";
import PaginationBackend from "../components/user/home/Pagination-Backend";
import category2 from "../assets/images/avatar/category.jpg";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height:"300px",
    objectFit: "cover",
    objectPosition:"top center"
  },
  [theme.breakpoints.up("md")]: {
    width: "82%",
    height:"600px",
    objectFit: "cover",
    objectPosition:"top center"
  },
  [theme.breakpoints.up("lg")]: {
    width: "82%",
    height:"600px",
    objectFit: "cover",
    objectPosition:"top center"
  },
}));

const Grouping = () => {
  return (
    <Div sx={{mt:{lg:20,md:20,xs:2}}}>
      <Img src={category2} />
      <PaginationBackend/>
    </Div>
    
  );
};

export default LayoutUser(Grouping);
