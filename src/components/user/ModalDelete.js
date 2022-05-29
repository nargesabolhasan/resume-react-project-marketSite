import React from "react";
import ButtonAdd from "../../components/buttons/Button-add";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, removeSelectedProduct } from "../../redux/basketSlice";

const ModalDelete = (props) => {
  const { deletedItem, handleCloseModal } = props;
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = async (item) => {
    dispatch(removeSelectedProduct(item));
    setTimeout(() => {
      handleCloseModal();
    }, 1000);
  };

  return (
    <>
      <div>آیا برای حذف این کالا مطمئن هستید ؟</div>
      <ButtonAdd clickHandler={() => handleDelete(deletedItem)}>حذف</ButtonAdd>
    </>
  );
};

export default ModalDelete;
