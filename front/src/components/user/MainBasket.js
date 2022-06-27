import React, { useEffect, useState, useCallback, useRef } from "react";
import EasyEdit from "react-easy-edit";
import { BASE_URL } from "../../constants/Constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Buttons from "../buttons/Button-add";
import Modals from "../modal/Modals";
import ModalDelete from "../user/ModalDelete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts, increase, decrease } from "../../redux/basketSlice";

const Img = styled("img")(({ theme }) => ({
  width: "50%",
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
  height: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  backgroundColor: "rgb(238, 238, 238)"
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
  border: "2px solid  #ba6b6c",
  borderRadius: "5px",
  height: "100%",
  backgroundColor: "rgb(238, 238, 238)"
}));

const MainBasket = (props) => {
  const { info } = props;
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

  //-----cancel change at input:----
  const cancel = () => {
    //...
  };
  //----remove from basket:
  const handleRemove = (data, counter) => {
    setOpenDelete(true);
  };
  //----saveOrderToRedux:
  const saveOrderToRedux = (input) => {
    const data = { ...info, orderCount: input, price: input.price * counter };

    dispatch(updateProducts(data));
  };
  //----save change at input:
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

  //----update buttons:
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
    if (counter == 0) {
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
      const data = {
        ...info,
        orderCount: counter,
      };
      dispatch(increase(data));
    }
  };
  //------------
  const handleDicrease = () => {
    if (+counter > 1) {
      setCounter(+counter - 1);
      const data = {
        ...info,
        orderCount: counter,
      };
      dispatch(decrease(data));
    }
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
    <Grid item lg={4} md={6} xs={12} sx={{ mt:{ lg:4,md:4,xs:2,}}}>
      <Div>
        <Grid>
          <InfoCard >
            <Img src={`${BASE_URL}${info?.image}`} />
            <Typographys sx={{ fontSize: "22px" }}>{info?.name}</Typographys>
            <Span>
              <Titles>دسته بندی :</Titles>
              <Typographys>{info.category?.name}</Typographys>
            </Span>
            <Span>
              <Titles>قیمت :</Titles>
              {notValid ? (
                <Typographys>عدم موجودی</Typographys>
              ) : (
                <Typographys>
                  {dollarUSLocale.format(info?.price)} تومان
                </Typographys>
              )}
            </Span>
            <Span>
              <Titles>تعداد :</Titles>
              <Counter sx={{ minHeight: "45px" }}>
                <Button
                  variant="outlined"
                  sx={{ height: "100%", fontSize: 20, p: 0, border: 2 }}
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
                    onValidate={validationCount}
                  />
                </Box>
                <Button
                  variant="outlined"
                  sx={{ height: "100%", fontSize: 20, p: 0, border: 2 }}
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
            <Buttons clickHandler={() => handleRemove(info)}>
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
