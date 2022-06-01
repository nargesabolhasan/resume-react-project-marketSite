import { React, useState, useEffect } from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate,useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HttpService from "../axios/HttpService";
import ShowPassword from "../components/admin/login/FormValidation";
import { useDispatch ,useSelector} from "react-redux";
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
import {setcustomer } from "../redux/customerSlice";

const SubmitPayment = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "نام بیشتر از 2 حرف باشد")
      .required("نام خود را وارد کنید "),
    lastName: Yup.string()
      .min(3, "نام خانوادگی بیشتر از 3 حرف باشد")
      .required("نام خانوادگی خود را وارد کنید"),
    address: Yup.string().required("آدرس خود را وارد کنید "),
    phone: Yup.number().required("شماره تماس خود را وارد کنید"),
    date: Yup.string("تاریخ تحویل مورد نظر خود را وارد کنید"),
  });

  //**modal **//
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");
  const [resiveDate, setResiveDate] = useState();
  const [resiveNewDate, setResiveNewDate] = useState();
  const rtl = document.dir === "rtl";
  const customer = useSelector((state) => state);

  useEffect(() => {
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 3);
    setResiveDate(tomorrow);
  }, []);
  

  const navigate = useNavigate();
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
    dispatch(setcustomer(input))
    window.open("http://127.0.0.1:5500/paymentHTML/index.html");
  };
  //-----------------handleBack--------------
  const handleBack = () => {
    navigate("/");
  };
  //console.log(new Date(date).toLocaleDateString("fa-IR"))
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
            name: "",
            lastName: "",
            address: "",
            phone: "",
            resiveDate: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              if (resiveNewDate) {
                Authentication({ ...values, resiveDate: resiveNewDate.toDate() });
              } else {
                Authentication({ ...values, resiveDate: resiveDate });
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
                    direction: "rtl",
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
                    sx={{ mb: 3 }}
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
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
                  {errors.name && touched.name && errors.name}
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
                    sx={{ mb: 3 }}
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
                    htmlFor="address"
                  >
                    آدرس
                  </InputLabel>
                  <Input
                    multiline
                    sx={{ mb: 3 }}
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
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
                  {errors.address && touched.address && errors.address}
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
