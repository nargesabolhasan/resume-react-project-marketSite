import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { BASE_URL } from "../../../constants/Constants";
import ModalForms from "../../modal/ModalForms";
import ModalEditProduct from "./Form-editProduct";
import { ModalAddProduct } from "../..";
import axios from "axios";
import HttpService from "../../../axios/HttpService";

const TittleCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    overFlow: "wrap",
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {
    width: 100,
    fontSize: 15,
  },
  [theme.breakpoints.up("lg")]: {
    width: 160,
    fontSize: 20,
    textAlign: "center",
    border: "2px solid #ba6b6c",
  },
}));
const TableCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    padding: 0,
    textAlign: "center",
    fontSize: 15,
    direction: "ltr",
    border: "2px solid #ba6b6c",

  },
  [theme.breakpoints.up("md")]: {
    fontSize: 15,
    border: "2px solid #ba6b6c",
    textAlign: "center",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: 20,
    border: "2px solid #ba6b6c",
    textAlign: "center",
    height: "10px"
  },
}));

const TabLists = (props) => {
  const { items, categories, index } = props;
 
  //**modal **//
  const [open, setOpen] = useState(false);
  const [classname, setClassname] = useState("");

  //--------Modal open & close :----------

  const handleShow = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //------------table buttons:-------------------
  const handleDelete =async (input) => {
    handleShow()
    // await HttpService.delete(`products/${input}`, {
    //   headers: { token: localStorage.getItem("token") },
    // });
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 500);
  };

  const handleEdit = (e) => {
    console.log(e.target.value);
    handleShow();
  };

  return (
    <>
      <TableRow key={items.id}>
        <TableCells align="left">
          <DeleteForeverIcon onClick={() => handleDelete(items.id)} />
          <DriveFileRenameOutlineIcon onClick={handleEdit} />
        </TableCells>
        <TableCells>
          {categories.map((category) =>
            category.id === items.categoryId ? category.name : ""
          )}
        </TableCells>
        <TittleCells sx={{ direction: "rtl" }}>{items.name}</TittleCells>
        <TableCells >
          <img
            style={{ width: "100px" }}
            src={`${BASE_URL}${items.image}`}
            alt="Alt Text!"
          />
        </TableCells>
        <TableCell
          sx={{ backgroundColor: "primary.main",color:"white",fontSize: "20px",border: "2px solid white",textAlign: "center" }}
        >
          {index + 1}
        </TableCell>
      </TableRow>
      <ModalForms
        open={open}
        handleclose={() => handleClose()}
        classname={classname}
      >
        {<ModalEditProduct product={items} />}
      </ModalForms>
    </>
  );
};

export default TabLists;
