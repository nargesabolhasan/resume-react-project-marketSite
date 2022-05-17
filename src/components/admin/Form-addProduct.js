import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { Yard } from "@mui/icons-material";

import HttpService from "../../axios/HttpService";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Buttons from "../buttons/Button-add";

const TittleInputs = styled("h3")(({ theme }) => ({
  fontFamily: "koodak",
}));

const Errors = styled("h3")(({ theme }) => ({
  fontFamily: "koodak",
  color: "red",
}));

const Input = styled("input")({
  border: "none",
});

const Basic = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "نام بیشتر از 4 حرف باشد")
      .required("نام محصول را وارد کنید "),
    ENname: Yup.string()
      .min(3, "نام بیشتر از 3 حرف باشد")
      .required("نام لاتین محصول را وارد کنید")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi & /^[0-9a-zA-Z]+$/,
        "تنها حروف لاتین امکان پذیر است"
      ),
    image: Yup.mixed().required("تصویر محصول بار گذاری شود"),
    categoryId: Yup.number().required("دسته بندی  را انتخاب کنید"),
    price: Yup.number().required("قیمت محصول را وارد کنید"),
    count: Yup.number().required(" تعداد محصول را وارد کنید "),
    color: Yup.string().required("رنگ محصول را وارد کنید "),
    description: Yup.string().required("توضیحات محصول را وارد کنید"),
  });

  const auth = (input) => {
    //await HttpService.post("products", input);
    // axios({
    //   method: "post",
    //   url: "http://localhost:3002/products",
    //   data: input,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    const formData = new FormData();
    for (const [key, value] of Object.entries(input)) {
      formData.append(key, value);
      console.log(key, value);
    }

    axios.post("http://localhost:3002/products", formData);
  };

  return (
    <div>
      <h1>افزودن / ویرایش کالا</h1>
      <Formik
        initialValues={{
          name: "",
          ENname: "",
          image: "",
          categoryId: "",
          price: "",
          count: "",
          color: "",
          description: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            auth(values);
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
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} style={{ direction: "rtl" }}>
            <TittleInputs>نام محصول</TittleInputs>
            <TextField
              type="text"
              name="name"
              multiline
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Errors variant="h5">
              {errors.name && touched.name && errors.name}
            </Errors>
            <TittleInputs> نام لاتین</TittleInputs>
            <TextField
              type="text"
              name="ENname"
              multiline
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ENname}
            />
            <Errors variant="h5">
              {errors.ENname && touched.ENname && errors.ENname}
            </Errors>
            <TittleInputs>تصویر</TittleInputs>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/webp"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Errors variant="h5">
              {errors.image && touched.image && errors.image}
            </Errors>

            <TittleInputs id="demo-simple-select-label">دسته بندی</TittleInputs>
            <Select
              labelId="demo-simple-select-label"
              onBlur={handleBlur}
              name="categoryId"
              id="demo-simple-select"
              value={values.categoryId}
              onChange={handleChange}
            >
              <MenuItem value={1}>مک مینی</MenuItem>
              <MenuItem value={2}>مک بوک پرو16</MenuItem>
              <MenuItem value={3}>مک بوک پرو 14</MenuItem>
              <MenuItem value={4}>مک بوک پرو13 </MenuItem>
              <MenuItem value={5}> مک بوک ایر</MenuItem>
              <MenuItem value={6}>آیمک</MenuItem>
              <MenuItem value={7}>آیپد پرو</MenuItem>
            </Select>
            <Errors variant="h5">
              {errors.categoryId && touched.categoryId && errors.categoryId}
            </Errors>
            <TittleInputs>قیمت</TittleInputs>
            <TextField
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            <Errors variant="h5">
              {errors.price && touched.price && errors.price}
            </Errors>
            <TittleInputs>تعداد</TittleInputs>
            <TextField
              type="number"
              name="count"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.count}
            />
            <Errors variant="h5">
              {errors.count && touched.count && errors.count}
            </Errors>
            <TittleInputs>رنگ</TittleInputs>
            <TextField
              type="text"
              name="color"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color}
            />
            <Errors variant="h5">
              {errors.color && touched.color && errors.color}
            </Errors>
            <TittleInputs>توضیحات</TittleInputs>
            <TextField
              type="text"
              multiline
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Errors variant="h5">
              {errors.description && touched.description && errors.description}
            </Errors>
            <Buttons type="submit" disabled={isSubmitting}>
              ذخیره
            </Buttons>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
