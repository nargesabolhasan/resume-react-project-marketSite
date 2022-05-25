import React from "react";
import { BASE_URL } from "../../../constants/Constants";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "./CardStyles.scss";

const Buttons = styled("button")(({ theme }) => ({
  fontFamily: "koodak",
}));


const CardProduct = (props) => {

  let navigate = useNavigate();
  const { product } = props;

  const handleNavigate = (name) => {
    navigate(`/products/${name}`);
  };
  return (
      <Grid className="card" item xs={4} sx={{mt:4}}>
        <Grid className="face face1">
          <div className="content">
            <img src={`${BASE_URL}${product.image}`} />
            <h3>{product.name}</h3>
          </div>
        </Grid>
        <Grid className="face face2">
          <div className="content">
            <>{product.description}</>
            
            <Button
              variant="contained"
              sx={{ fontFamily: "koodak",backgroundColor: "SLight.main",color : "black"}}
              onClick={() => handleNavigate(product.id)}
            >
               اطلاعات محصول 
            </Button>
          </div>
        </Grid>
      </Grid>
  );
};

export default CardProduct;


