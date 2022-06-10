import React,{useRef,useEffect} from "react";
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
  const caption = useRef();

  const handleNavigate = (name) => {
    navigate(`/products/${name}`);
  };

  useEffect(() => {
    caption.current.innerHTML =product?.description
  },[])
  return (
      <Grid className="card" >
        <Grid className="face face1">
          <div className="content">
            <img src={`${BASE_URL}${product.image}`} />
            <h3>{product.name}</h3>
          </div>
        </Grid>
        <Grid className="face face2">
          <div className="content">
            <Box ref={caption}></Box>
            
            <Button
              variant="contained"
              sx={{ fontFamily: "koodak",backgroundColor: "SLight.main",color : "black",mt:3}}
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


