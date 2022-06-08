import React from "react";
import ButtonAdd from "../../buttons/Button-add";
import HttpService from "../../../axios/HttpService";
import { useSelector } from "react-redux";

const ModalDelete = (props) => {
  const { deletedItem, handleCloseModal, updateData } = props;
  const state = useSelector((state) => state);
  
  const handleDelete = async (item) => {
    await HttpService.delete(`products/${item}`, {
      headers: { token: localStorage.getItem("token") },
    });
    updateData();
    setTimeout(() => {
      handleCloseModal();
    },700);
  };
  return (
    <>
      <div>آیا برای حذف این کالا مطمئن هستید ؟</div>
      <ButtonAdd clickHandler={() => handleDelete(deletedItem)}>حذف</ButtonAdd>
    </>
  );
};

export default ModalDelete;
