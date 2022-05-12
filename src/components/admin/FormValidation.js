import { Formik } from "formik";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { React, useEffect, useState, useContext } from "react";
import HttpService from "../../axios/HttpService";
import ShowPassword from "./ShowPassword";
import { TOKEN } from "../../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import ButtonAdd from "../buttons/Button-add";
import Modals from "../modal/Modals";
import "../../assets/Core-ui/Core-styles.scss"

const FormValidation = () => {
  const [adminData, setAdminData] = useState([]);
  const [open, setOpen] = useState(false);
  const [bodyMassages, setBodyMassages] = useState("");
  const [classname, setClassname] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    getData();
  }, []);
  //-----------axios.get :-----------
  const getData = async () => {
    setAdminData(await HttpService.get("whoami"));
  };

  //--------Modal open & close :----------
  const handleShow = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //-----------Authentication :-----------
  const Authentication = (input) => {
    if (
      input.username === adminData.username &&
      input.password === adminData.password
    ) {
      setOpen(true);
      setClassname("succsess")
      setBodyMassages("سلام به پنل مدیریت خوش آمدید");
      setTimeout(() => {
        localStorage.setItem("token", TOKEN);
        navigate("/PanelProducts", { replace: true });
        dispatch(setUser(input));
      },4000);
    } else {
      setOpen(true);
      setClassname("failer")
      setBodyMassages("رمز یا نام کاربری اشتباه است ");
    }
  };
  //-----------------handleBack--------------
  const handleBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        m: 0,
        mx: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "اجباری";
          } else if (
            // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            //) {
            values.username.length < 3
          ) {
            errors.username = "حداقل 3 کاراکتر لازم است";
          }
          if (!values.password) {
            errors.password = "اجباری";
          } else if (values.password.length < 3) {
            errors.password = "حداقل 3 کاراکتر لازم است";
          }
          return errors;
        }}
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
                ابتدا وارد اکانت <br></br>خود شوید :
              </Typography>
              <FormControl>
                <InputLabel
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
                  htmlFor="username"
                >
                  نام کاربری
                </InputLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <FormHelperText
                  id="my-helper-text"
                  sx={{ dir: "ltr", fontSize: 15, fontFamily: "koodak" }}
                >
                  اطلاعات اکانت شما محفوظ است
                </FormHelperText>
              </FormControl>
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.username && touched.username && errors.username}
              </Typography>
              <ShowPassword
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Typography
                sx={{ color: "error.main", fontSize: 20, fontFamily: "koodak" }}
              >
                {errors.password && touched.password && errors.password}
              </Typography>
              <ButtonAdd disabled={!isValid}>ورود</ButtonAdd>
            </FormGroup>
          </form>
        )}
      </Formik>
      <Button
        sx={{
          width: 450,
          mt: 5,
          mx: "auto",
          fontFamily: "koodak",
          fontSize: 20,
          border: 3,
          borderColor: "primary.main",
          borderRadius: "11px",
        }}
        variant="outlined"
        onClick={handleBack}
      >
        <KeyboardBackspaceIcon />
        بازگشت به صفحه اصلی
      </Button>
      <Modals
        open={open}
        handleclose={() => handleClose()}
        bodyMassages={bodyMassages}
        classname={classname}
      />
    </Container>
  );
};

export default FormValidation;
