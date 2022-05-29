import React, { useEffect, useState, useCallback, useRef } from "react";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Buttons from "../buttons/Button-add";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../modal/Modals";
import ModalForm from "../modal/ModalForms";
import ModalDelete from "../user/ModalDelete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from '@mui/icons-material/Close';

const Img = styled("img")(({ theme }) => ({
  width: "60%",
}));
const Titles = styled("h2")(({ theme }) => ({
  padding: 10,
  margin: 5,
  color: "#ba6b6c",
  borderRadius: 5,
  fontFamily: "SansWeb",
}));

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
}));
const InfoCard = styled("div")(({ theme }) => ({
  height: "800px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}));

const Typographys = styled("div")(({ theme }) => ({
  direction: "rtl",
  fontSize: "20px",
  fontFamily: "SansWeb",
  padding: "5px",
}));

const Span = styled("span")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  direction: "rtl",
  minHeight: "50px",
}));

const Counter = styled("span")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "0.5px solid  #fff8e1",
  background: "#fff8e1",
  borderRadius: "5px",
  height: "100%",
}));

const MainBasket = (props) => {
  const { info } = props;
  const [counter, setCounter] = useState(info?.orderCount);
  const [isValidShopping, setIsValidShopping] = useState(true);
  const [isValidIncrease, setIsValidIncrease] = useState(true);
  const [isValidDicrease, setIsValidDicrease] = useState(true);
  const [notValid, setNotValid] = useState(false);
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
  const handleClose = () => {setOpen(false);setOpenDelete(false)};
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

  const handleShopUpdate = (info, counter) => {
    setOpenDelete(true)
  };
  return (
    <Grid item xs={4} sx={{ mt: 4 }}>
      <Div>
        <Grid>
          <InfoCard sx={{ backgroundColor: "PLight.main" }}>
            <Img src={`${BASE_URL}${info?.image}`} />
            <Typographys sx={{ fontSize: "22px" }}>{info?.name}</Typographys>
            <Span>
              <Titles>دسته بندی :</Titles>
              <Typographys>{info?.category.name}</Typographys>
            </Span>
            <Span>
              <Titles>قیمت :</Titles>
              {notValid ? (
                <Typographys>عدم موجودی</Typographys>
              ) : (
                <Typographys>
                  {dollarUSLocale.format(info?.price * counter)} تومان
                </Typographys>
              )}
            </Span>
            <Span>
              <Titles>تعداد :</Titles>
              <Counter sx={{ minHeight: "45px" }}>
                <Button
                  variant="outlined"
                  sx={{ height: "100%", fontSize: 20, p: 0 }}
                  onClick={handleIncrease}
                  disabled={!isValidIncrease}
                >
                  +
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
                  onClick={handleDicrease}
                  disabled={!isValidDicrease}
                >
                  -
                </Button>
              </Counter>
            </Span>
            <Span>
              <Titles>رنگ :</Titles>
              <Typographys>{info?.color}</Typographys>
            </Span>
            <Buttons clickHandler={() => handleShopUpdate(info, counter)}>
              <DeleteForeverIcon />
              حذف از سبد خرید
            </Buttons>
          </InfoCard>
        </Grid>
      </Div>
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
    </Grid>
  );
};

export default MainBasket;
