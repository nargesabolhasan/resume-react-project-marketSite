import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import ModalForms from "../modal/ModalForms";
import { ModalAddProduct, Modals } from "../index";
import CloseIcon from "@mui/icons-material/Close";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../../constants/Constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Buttons from "../buttons/Button-add";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts, increase, decrease } from "../../redux/basketSlice";
import ModalDelete from "../user/ModalDelete";

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
  const [allPrice, setAllPrice] = useState(0);

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
  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };
  //-----dollarUSLocale:---
  let dollarUSLocale = Intl.NumberFormat("en-US");

  //-----saveCount:----
  const cancel = () => {
    //alert("Cancelled");
  };
  //----saveOrderToRedux:
  const saveOrderToRedux = (input) => {
    const data = { ...info, orderCount: input,price:info.price*input };
    dispatch(updateProducts(data));
  };
  //----save input changes:
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
      saveOrderToRedux(input);
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
      const data = { ...info, orderCount: counter ,price:info.price*counter };
      dispatch(increase(data));
    }
  };
  //------------
  const handleDicrease = () => {
    if (+counter > 1) {
      setCounter(+counter - 1);
      const data = { ...info, orderCount: counter ,price:info.price*counter };
      dispatch(decrease(data));
    }
  };
  //---------
  const handleDelete = () => {
    setOpenDelete(true);
  };
  //-----------------

  const validationCount = (e) => {
    if (e >= 0) {
      return e;
    }
  };
  //--------------
  useEffect(() => {
    if (products.products.length !== 0) {
      let sum = 0;
      products.products.map((item) => {
        sum += item.price * item.orderCount;
        setAllPrice(sum);
      });
    } else {
      setAllPrice(0);
    }
  }, [products.products]);

  return (
    <>
      <TableRow key={info?.id}>
        <TableCells align="left">
          <Buttons clickHandler={() => handleDelete(info, counter)}>
            <DeleteForeverIcon />
          </Buttons>
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
                onValidate={validationCount}
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
        <TableCells sx={{ fontSize: 20, fontFamily: "SansWeb" }}>
          {dollarUSLocale.format(info?.price)}
        </TableCells>
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
  <ModalDelete handleCloseModal={handleClose} deletedItem={info}/>
      </Modals>
    </>
  );
};

export default TableBasket;
