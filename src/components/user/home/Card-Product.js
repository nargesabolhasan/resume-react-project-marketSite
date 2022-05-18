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
    navigate(`/Products/${name}`, { replace: true });
  };
  return (
      <Grid className="card" item xs={3}>
        <Grid className="face face1">
          <div className="content">
            <img src={`${BASE_URL}${product.image}`} />
            <h3>{product.name}</h3>
          </div>
        </Grid>
        <Grid className="face face2">
          <div className="content">
            <p>{product.description}</p>
            <Button
              variant="outlined"
              sx={{ fontFamily: "koodak" }}
              onClick={() => handleNavigate(product.id)}
            >
              بیشتر بخوانید ...
            </Button>
          </div>
        </Grid>
      </Grid>
  );
};

export default CardProduct;

{
  /* {loading ?<h1>Loading...</h1>:(
        data?.map((product) => (
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={`${BASE_URL}${product.image}`} />
                  <h3>{product.name}</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                   {product.description}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          ))
    )} */
}
