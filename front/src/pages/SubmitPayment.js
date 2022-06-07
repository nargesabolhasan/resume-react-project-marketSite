import { React, useState, useEffect } from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HttpService from "../axios/HttpService";
import ShowPassword from "../components/admin/login/FormValidation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { setToken } from "../redux/tokenSlice";
import ButtonAdd from "../components/buttons/Button-add";
import Modals from "../components/modal/Modals";
import "../assets/Core-ui/Core-styles.scss";
import LayoutUser from "../components/Layouts/Layout-user";
import * as Yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { setcustomer } from "../redux/customerSlice";
import ReactPhoneInput from "react-phone-input-material-ui";
//import { TextField, withStyles } from '@material-ui/core';

const SubmitPayment = () => {
  const LoginSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "نام بیشتر از 2 حرف باشد")
      .required("نام خود را وارد کنید "),
    lastName: Yup.string()
      .min(3, "نام خانوادگی بیشتر از 3 حرف باشد")
      .required("نام خانوادگی خود را وارد کنید"),
    billingAddress: Yup.string().required("آدرس خود را وارد کنید "),
    phone: Yup.number()
      .positive("نامعتبر")
      .required("شماره تماس خود را وارد کنید"),
    date: Yup.string("تاریخ تحویل مورد نظر خود را وارد کنید"),
  });

  //**modal **//
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");
  const [resiveDate, setResiveDate] = useState();
  const [resiveNewDate, setResiveNewDate] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const rtl = document.dir === "rtl";
  const customer = useSelector((state) => state);

  useEffect(() => {
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 3);
    setResiveDate(tomorrow);
  }, []);
  //------------
  const dispatch = useDispatch();
  //--------Modal open & close :----------
  const handleShow = () => {
    setOpen(true);
    setClassname("succsess");
    setBodyMassages("سلام به پنل مدیریت خوش آمدید");
  };
  const handleClose = () => setOpen(false);

  //-----------Authentication :-----------
  const Authentication = async (input) => {
    dispatch(setcustomer(input));
    window.open("http://127.0.0.1:5500/paymentHTML/index.html");
  };

  //----------------
  const handlePhone = (e) => {
    setPhoneNumber(e);
  };
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      <Box
        sx={{
          m: 0,
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            billingAddress: "",
            phone: "",
            date: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              if (resiveNewDate) {
                Authentication({
                  ...values,
                  orderDate: resiveNewDate.toDate(),
                });
              } else {
                Authentication({ ...values, orderDate: resiveDate });
              }
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} style={{ fontFamily: "koodak" }}>
              <FormGroup
                sx={{
                  width: 500,
                  mx: "auto",
                  mt: 10,
                  border: 3,
                  borderColor: "primary.main",
                  p: 3,
                  borderRadius: "11px",
                  direction: "rtl",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 8,
                    mx: "auto",
                    textAlign: "center",
                    fontFamily: "koodak",
                    textAlign: "center",
                  }}
                >
                  نهایی کردن خرید
                </Typography>
                <FormControl>
                  <InputLabel
                    sx={{
                      fontSize: 20,
                      fontFamily: "koodak",
                      position: "absolute",
                      right: "13px",
                    }}
                    htmlFor="name"
                  >
                    نام
                  </InputLabel>
                  <Input
                    sx={{ mb: 3, direction: "rtl" }}
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </FormControl>
                <Typography
                  sx={{
                    color: "error.main",
                    fontSize: 20,
                    fontFamily: "koodak",
                    mb: 2,
                  }}
                >
                  {errors.firstName && touched.firstName && errors.firstName}
                </Typography>
                <FormControl>
                  <InputLabel
                    sx={{
                      fontSize: 20,
                      fontFamily: "koodak",
                      position: "absolute",
                      right: "13px",
                    }}
                    htmlFor="lastName"
                  >
                    نام خانوادگی
                  </InputLabel>
                  <Input
                    sx={{ mb: 3, direction: "rtl" }}
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </FormControl>
                <Typography
                  sx={{
                    color: "error.main",
                    fontSize: 20,
                    fontFamily: "koodak",
                    mb: 2,
                  }}
                >
                  {errors.lastName && touched.lastName && errors.lastName}
                </Typography>
                <FormControl>
                  <InputLabel
                    sx={{
                      fontSize: 20,
                      fontFamily: "koodak",
                      position: "absolute",
                      right: "13px",
                    }}
                    htmlFor="billingAddress"
                  >
                    آدرس
                  </InputLabel>
                  <Input
                    multiline
                    sx={{ mb: 3, direction: "rtl" }}
                    id="billingAddress"
                    name="billingAddress"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.billingAddress}
                  />
                </FormControl>
                <Typography
                  sx={{
                    color: "error.main",
                    fontSize: 20,
                    fontFamily: "koodak",
                    mb: 2,
                  }}
                >
                  {errors.billingAddress &&
                    touched.billingAddress &&
                    errors.billingAddress}
                </Typography>
                <FormControl>
                  <InputLabel
                    sx={{
                      fontSize: 20,
                      fontFamily: "koodak",
                      position: "absolute",
                      right: "13px",
                    }}
                    htmlFor="phone"
                  >
                    شماره تماس
                  </InputLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {/* <Box  sx={{float:"right",direction: "ltr" }}>
                  <ReactPhoneInput
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    component={Input}
                    defaultCountry={"ir"}
                    inputClass={{ margin: "10px 0" }}
                    dropdownClass={"classes.countryList"}
                  />
                  </Box> */}
                  <FormHelperText
                    id="my-helper-text"
                    sx={{
                      dir: "ltr",
                      fontSize: 15,
                      fontFamily: "koodak",
                      mb: 2,
                    }}
                  >
                    جهت هماهنگی ارسال سفارش
                  </FormHelperText>
                </FormControl>
                <Typography
                  sx={{
                    color: "error.main",
                    fontSize: 20,
                    fontFamily: "koodak",
                    mb: 2,
                  }}
                >
                  {errors.phone && touched.phone && errors.phone}
                </Typography>
                <Box sx={{ mt: 2, mx: "auto", textAlign: "center" }}>
                  <InputLabel
                    sx={{ fontSize: 20, fontFamily: "koodak" }}
                    htmlFor="date"
                  >
                    تاریخ تحویل
                  </InputLabel>
                  <DatePicker
                    id="date"
                    name="date"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    onChange={setResiveNewDate}
                    minDate={new Date()}
                    maxDate={new Date().setDate(21)}
                    value={resiveDate}
                    onBlur={handleBlur}
                  />
                  <Typography
                    sx={{
                      color: "error.main",
                      fontSize: 20,
                      fontFamily: "koodak",
                      mb: 2,
                    }}
                  >
                    {errors.date && touched.date && errors.date}
                  </Typography>
                </Box>
                <ButtonAdd disabled={!isValid}>پرداخت</ButtonAdd>
              </FormGroup>
            </form>
          )}
        </Formik>
      </Box>
    </StyleSheetManager>
  );
};

export default LayoutUser(SubmitPayment);
