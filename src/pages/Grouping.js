import React from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, Outlet } from "react-router-dom";
import { MainUser, ModalAddProduct } from "../components";
import CardProduct from "../components/user/home/Card-Product";
import PaginationBackend from "../components/user/home/Pagination-Backend";
import carousel from "../assets/images/carousel.jpg";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

const Grouping = () => {
  return (
    <Div>
      <img src={carousel} style={{margin:"30px",width: "60%"}}/>
      <PaginationBackend/>
    </Div>
  );
};

export default LayoutUser(Grouping);
