import React from "react";
import ButtonAdd from "../../buttons/Button-add";
import HttpService from "../../../axios/HttpService";

const ModalDelete = (props) => {
  const { deletedItem } = props;
  const handleDelete = async (item) => {
    await HttpService.delete(`products/${item}`, {
      headers: { token: localStorage.getItem("token") },
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  return (
    <>
      <div>آیا برای حذف این کالا مطمئن هستید ؟</div>
      <ButtonAdd clickHandler={()=>handleDelete(deletedItem)}>حذف</ButtonAdd>
    </>
  );
};

export default ModalDelete;
