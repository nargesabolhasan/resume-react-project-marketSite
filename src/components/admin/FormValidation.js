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
import { React, useEffect, useState, useContext } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import HttpService from "../../axios/HttpService";
import ShowPassword from "./ShowPassword";
import {TOKEN} from"../../constants/Constants"

const FormValidation = () => {
  const [adminData, setAdminData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  //-----------axios.get :-----------
  const getData = async () => {
    setAdminData(await HttpService.get("whoami"));
  };
  //-----------Authentication :-----------
  const Authentication = (input) => {
    if (
      input.username === adminData.username &&
      input.password === adminData.password
    ) {
      alert("hi");
      localStorage.setItem("token",TOKEN);
      navigate("/PanelProducts", { replace: true });
    } else {
      alert(":(");
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (
            // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            //) {
            values.username.length < 3
          ) {
            errors.username = "username have to be at least 3";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 3) {
            errors.password = "password have to be at least 3";
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
          <form onSubmit={handleSubmit}>
            <FormGroup
              sx={{ width: 400, mx: "auto", mt: 20 }}
              stylisplugins={[rtlPlugin]}
            >
              <Typography variant="h2" sx={{ mb: 8, mx: "auto" }}>
                please Login
              </Typography>
              <FormControl>
                <InputLabel htmlFor="username">نام کاربری</InputLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <FormHelperText id="my-helper-text" sx={{ dir: "ltr" }}>
                  اطلاعات اکانت شما محفوظ است
                </FormHelperText>
              </FormControl>
              <Typography sx={{ color: "error.main" }}>
                {" "}
                {errors.username && touched.username && errors.username}
              </Typography>
              <ShowPassword
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Typography sx={{ color: "error.main" }}>
                {" "}
                {errors.password && touched.password && errors.password}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                type="submit"
                disabled={!isValid}
              >
                submit
              </Button>
            </FormGroup>
          </form>
        )}
      </Formik>
      <Button sx={{ mt: 10 }} variant="outlined">
        <KeyboardBackspaceIcon />
        Back to Home
      </Button>
    </div>
  );
};

export default FormValidation;
