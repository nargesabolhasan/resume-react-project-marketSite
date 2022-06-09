import React from "react";
import ButtonAdd from "../../components/buttons/Button-add";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, removeSelectedProduct } from "../../redux/basketSlice";
import Typography from "@mui/material/Typography";

const ModalDelete = (props) => {
  const { deletedItem, handleCloseModal } = props;
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = async (item) => {
    dispatch(removeSelectedProduct(item));
    setTimeout(() => {
      handleCloseModal();
    }, 600);
  };

  return (
    <>
      <div>آیا برای حذف <Typography sx={{color:"primary.main",fontFamily:"koodak",fontSize:20}}>{deletedItem.name}</Typography> از سبد خرید مطمئن هستید ؟</div>
      <ButtonAdd clickHandler={() => handleDelete(deletedItem)}>حذف</ButtonAdd>
    </>
  );
};

export default ModalDelete;
