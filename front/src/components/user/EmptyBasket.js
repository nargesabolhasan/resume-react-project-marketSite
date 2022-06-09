import React from "react";
import ButtonAdd from "../../components/buttons/Button-add";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../../redux/basketSlice";
import Typography from "@mui/material/Typography";

const EmptyBasket = (props) => {
  const {  handleCloseModal } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeAll());
    setTimeout(() => {
      handleCloseModal();
    }, 600);
  };

  return (
    <>
      <div>آیا برای حذف <Typography sx={{color:"primary.main",fontFamily:"koodak",fontSize:20}}>  همه محصولات </Typography> از سبد خرید مطمئن هستید ؟</div>
      <ButtonAdd clickHandler={() => handleDelete()}>حذف</ButtonAdd>
    </>
  );
};

export default EmptyBasket;