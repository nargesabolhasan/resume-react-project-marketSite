import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CardProduct from "./home/Card-Product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



const MainBasket = (props) => {
    const { data } = props;
    return (
      <Badge badgeContent={4} color="black">
        <MailIcon color="action" />
      </Badge>
    );
};

export default MainBasket;
