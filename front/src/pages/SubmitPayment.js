import { React, useState } from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HttpService from "../axios/HttpService";
import ShowPassword from "../components/admin/login/FormValidation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { setToken } from "../redux/tokenSlice";
import ButtonAdd from "../components/buttons/Button-add";
import Modals from "../components/modal/Modals";
import "../assets/Core-ui/Core-styles.scss";
import LayoutUser from "../components/Layouts/Layout-user";
import * as Yup from "yup";

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
  });

  //**modal **//
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");

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
    const res = await HttpService.post("auth/login", input);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      dispatch(setToken(res.data.token));
      handleShow();
      setTimeout(() => {
        navigate("/PanelProducts");
        dispatch(setUser(input));
      }, 3000);
    } else {
      setOpen(true);
      setClassname("failer");
      setBodyMassages("رمز یا نام کاربری اشتباه است ");
    }
  };
  //-----------------handleBack--------------
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        m: 0,
        mt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{ name: "", lastName: "", address: "", phone: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            Authentication(values);
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
                width: 400,
                mx: "auto",
                mt: 20,
                border: 3,
                borderColor: "primary.main",
                p: 3,
                borderRadius: "11px",
              }}
              // stylisplugins={[rtlPlugin]}
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
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
                  htmlFor="name"
                >
                  نام
                </InputLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </FormControl>
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.name && touched.name && errors.name}
              </Typography>
              <FormControl>
                <InputLabel
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
                  htmlFor="lastName"
                >
                  نام خانوادگی
                </InputLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </FormControl>
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.lastName && touched.lastName && errors.lastName}
              </Typography>
              <FormControl>
                <InputLabel
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
                  htmlFor="address"
                >
                  آدرس
                </InputLabel>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </FormControl>
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.address && touched.address && errors.address}
              </Typography>
              <FormControl>
                <InputLabel
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
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
                  sx={{ dir: "ltr", fontSize: 15, fontFamily: "koodak" }}
                >
                  جهت هماهنگی ارسال سفارش
                </FormHelperText>
              </FormControl>
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.phone && touched.phone && errors.phone}
              </Typography>

              <ButtonAdd disabled={!isValid}>ورود</ButtonAdd>
            </FormGroup>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LayoutUser(SubmitPayment);
