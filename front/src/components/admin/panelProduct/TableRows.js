import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { BASE_URL } from "../../../constants/Constants";
import ModalForms from "../../modal/ModalForms";
import ModalEditProduct from "./Form-editProduct";
import { ModalAddProduct, Modals } from "../..";
import CloseIcon from '@mui/icons-material/Close';
import ModalDelete from "./Form-delete";

const TittleCells = styled("td")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "5px",
    overFlow: "wrap",
    fontSize: 15,
    fontFamily: "SansWeb",
    border: "2px solid #ba6b6c",
  },
  [theme.breakpoints.up("md")]: {
    width: 100,
    fontSize: 15,
    fontFamily: "SansWeb",
    border: "2px solid #ba6b6c",
  },
  [theme.breakpoints.up("lg")]: {
    width: 160,
    fontSize: 20,
    textAlign: "start",
    border: "2px solid #ba6b6c",
    fontFamily: "SansWeb"
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
    height: "10px",
  },
}));

const TabLists = (props) => {
  const { items, index ,updateData,handleCloseModal} = props;

  //**modal **//
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [classname, setClassname] = useState("");
  const [selectedData, setSelectedData] = useState("");
  //--------Modal open & close :----------

  const handleShow = () => {
    setOpen(true);
  };
  const handleClose = () => {setOpen(false);setOpenDelete(false);};

  //------------table buttons:-------------------
  const handleDelete = async (input) => {
    setSelectedData(input);
    setOpenDelete(true);
  };
  //---------------

  const handleEdit = (e) => {
    console.log(e.target.value);
    handleShow();
  };

  return (
    <>
      <TableRow key={items.id}>
        <TableCells align="left">
          <DeleteForeverIcon onClick={() =>{ handleDelete(items.id)}} sx={{mr:3}}/>
          <DriveFileRenameOutlineIcon onClick={handleEdit} />
        </TableCells>
        <TableCells sx={{ fontSize: 20, fontFamily: "SansWeb"}} >
          {items?.category.name}
        </TableCells>
        <TittleCells sx={{ direction: "rtl" }}>{items.name}</TittleCells>
        <TableCells>
          <img
            style={{ width: "80px" }}
            src={`${BASE_URL}${items.image}`}
            alt="Alt Text!"
          />
        </TableCells>
        <TableCell
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "20px",
            border: "2px solid white",
            textAlign: "center",
            fontSize: 20, fontFamily: "SansWeb" 
          }}
        >
          {index + 1}
        </TableCell>
      </TableRow>
      <ModalForms
        open={open}
        handleclose={() => handleClose()}
        classname={classname}
      >
          <CloseIcon
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontSize: 32,
            position: "absolute",
            top: "10px",
            right: "10px",
            border: 3,
            borderColor: "primary.main",
            borderRadius: "11px",
          }}
          onClick={handleClose}
        />
        <ModalEditProduct product={items} updateData={updateData} handleCloseModal={handleClose}/>
      </ModalForms>
      <Modals open={openDelete} handleclose={() => handleClose()}>
      <CloseIcon
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontSize: 32,
            position: "absolute",
            top: "10px",
            right: "10px",
            border: 3,
            borderColor: "primary.main",
            borderRadius: "11px",
          }}
          onClick={handleClose}
        />
        <ModalDelete deletedItem={selectedData} updateData={updateData} handleCloseModal={handleClose}/>
      </Modals>
    </>
  );
};

export default TabLists;
