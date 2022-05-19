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
import axios from "axios"

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
  },
}));
const TableCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    padding: 0,
    textAlign: "center",
    fontSize: 15,
    direction: "ltr",
  },
  [theme.breakpoints.up("md")]: {
    width: 5,
    fontSize: 15,
  },
  [theme.breakpoints.up("lg")]: {
    width: 5,
    fontSize: 20,
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
  const handleDelete = (input) => {
    console.log(input);
    axios.delete(`products/${input}`, { headers: {"token" : localStorage.getItem("token")} })
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
   
  };

  const handleEdit = (e) => {
    console.log(e.target.value);
    handleShow();
  };

  return (
    <>
      <TableRow key={items.id}>
        <TableCells align="left">
          <DeleteForeverIcon onClick={()=>handleDelete(items.id)} />
          <DriveFileRenameOutlineIcon onClick={handleEdit} />
        </TableCells>
        <TableCells align="right">
          {categories.map((category) =>
            category.id === items.categoryId ? category.name : ""
          )}
        </TableCells>
        <TittleCells align="right" sx={{direction: "rtl"}}>{items.name}</TittleCells>
        <TableCells
          align="right"
          sx={{ backgroundColor: "primary.main", textAlign: "center" }}
        >
          <img
            style={{ width: "200px" }}
            src={`${BASE_URL}${items.image}`}
            alt="Alt Text!"
          />
        </TableCells>
        <TableCells
          align="right"
          sx={{ backgroundColor: "primary.main", textAlign: "center" }}
        >
          {index + 1}
        </TableCells>
      </TableRow>
      <ModalForms
        open={open}
        handleclose={() => handleClose()}
        classname={classname}
      >
        <ModalEditProduct product={items}/>
      </ModalForms>
    </>
  );
};

export default TabLists;
