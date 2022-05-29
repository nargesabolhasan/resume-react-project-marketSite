import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import ModalForms from "../modal/ModalForms";
import { ModalAddProduct, Modals } from "../index";
import CloseIcon from "@mui/icons-material/Close";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Buttons from "../buttons/Button-add";
import { setProducts, removeSelectedProduct } from "../../redux/basketSlice";

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
    width: "300px",
  },
}));

const Counter = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "2px dashed  #ba6b6c",
  borderRadius: "5px",
  height: "80%",
}));

const Titles = styled("h3")(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 10,
  margin: 5,
  color: "black",
  backgroundColor: "#fff8e1",
  borderRadius: 5,
}));
const TableBasket = (props) => {
  const { info, index, updateData, handleCloseModal } = props;
  const [counter, setCounter] = useState(info?.orderCount);
  const [isValidShopping, setIsValidShopping] = useState(true);
  const [isValidIncrease, setIsValidIncrease] = useState(true);
  const [isValidDicrease, setIsValidDicrease] = useState(true);
  const [notValid, setNotValid] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  //**modal **//
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");

  //--------Modal open & close :----------
  const handleShow = () => {
    setOpen(true);
    setClassname("failer");
  };
  const handleClose = () => setOpen(false);
  //-----dollarUSLocale:---
  let dollarUSLocale = Intl.NumberFormat("en-US");

  //-----saveCount:----
  const cancel = () => {
    //alert("Cancelled");
  };

  const saveData = (input) => {
    if (input > Number(info?.count)) {
      setCounter("1");
      setBodyMassages(
        `  موجودی این کالا ${info?.count} عدد است  ، تعداد مورد نظر شما از موجودی بیشتر است `
      );
      handleShow();
    } else if (input <= 0) {
      setCounter("1");
      setBodyMassages(` عدد بزرگتر از 1 وارد کنید`);
      handleShow();
    } else {
      setCounter(input);
    }
  };

  useEffect(() => {
    if (info?.count == counter) {
      setIsValidIncrease(false);
    } else {
      setIsValidIncrease(true);
    }
    if (counter == 1) {
      setIsValidDicrease(false);
    } else {
      setIsValidDicrease(true);
    }
    if (info?.count == 0) {
      setCounter(0);
      setNotValid(true);
      setIsValidDicrease(false);
      setIsValidIncrease(false);
      setIsValidShopping(false);
    }
  }, [counter]);
  //------------
  const handleIncrease = () => {
    if (info.count !== 0 && info.count > +counter) {
      setCounter(+counter + 1);
    }
  };
  //------------
  const handleDicrease = () => {
    if (+counter > 1) {
      setCounter(+counter - 1);
    }
  };

  const handleDelete = (info, counter) => {
    dispatch(removeSelectedProduct(info));
  };

  return (
    <TableContainer component={Paper} sx={{ mx: "auto", mt: 2,direction:"ltr" }}>
      <Table>
        <TableRow key={info?.id}>
          <TableCells align="left">
            <DeleteForeverIcon
              clickHandler={() =>{ handleDelete(info, counter)}}
              sx={{ mr: 3 }}
            />
          </TableCells>
          <TableCells>
            <Counter sx={{ weight: "100%" }}>
              <Button
                variant="outlined"
                sx={{ height: "100%", fontSize: 20, p: 0 }}
                onClick={handleDicrease}
                disabled={!isValidDicrease}
              >
                -
              </Button>
              <Box sx={{ p: 3, fontSize: 15, fontFamily: "SansWeb" }}>
                <EasyEdit
                  type="number"
                  onSave={(e) => saveData(e)}
                  onCancel={cancel}
                  saveButtonLabel="ذخیره "
                  cancelButtonLabel="لغو "
                  attributes={{ name: "awesome-input", id: 1 }}
                  value={counter}
                  instructions={`تعداد موجودی :${info?.count}`}
                />
              </Box>
              <Button
                variant="outlined"
                sx={{ height: "100%", fontSize: 20, p: 0 }}
                onClick={handleIncrease}
                disabled={!isValidIncrease}
              >
                +
              </Button>
            </Counter>
          </TableCells>
          <TableCells>{info?.price}</TableCells>
          <TableCells sx={{ fontSize: 20, fontFamily: "SansWeb" }}>
            {info?.category.name}
          </TableCells>

          <TableCells>{info?.name}</TableCells>
          <TableCells>
            <img
              style={{ width: "80px" }}
              src={`${BASE_URL}${info?.image}`}
              alt="Alt Text!"
            />
          </TableCells>
          <TableCell
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              fontSize: "20px",
              border: "2px solid #ba6b6c",
              textAlign: "center",
              fontSize: 20,
              fontFamily: "SansWeb",
            }}
          >
            {index + 1}
          </TableCell>
        </TableRow>
        <Modals
        open={open}
        handleclose={() => handleClose()}
        bodyMassages={bodyMassages}
        classname={classname}
      />
       
      </Table>
    </TableContainer>
  );
};

export default TableBasket;
