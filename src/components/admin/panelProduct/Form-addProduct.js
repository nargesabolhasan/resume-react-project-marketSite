import React,{useState} from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { Yard } from "@mui/icons-material";

import HttpService from "../../../axios/HttpService";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ButtonAdd from "../../buttons/Button-add";


const EditForm = styled("form")(({ theme }) => ({
  fontFamily: "koodak",
  textAlign: "right",
}));

const TittleInputs = styled("h5")(({ theme }) => ({
  fontFamily: "koodak",
}));

const Errors = styled("h5")(({ theme }) => ({
  textAlign: "right",
  color: "red",
}));

const Basic = () => {
  const [imageData,setImageData]=useState();
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "نام بیشتر از 4 حرف باشد")
      .required("نام محصول را وارد کنید "),
    ENname: Yup.string()
      .min(3, "نام بیشتر از 3 حرف باشد")
      .required("نام لاتین محصول را وارد کنید")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi || /^[0-9a-zA-Z]+$/,
        "تنها حروف لاتین امکان پذیر است"
      ),
    image: Yup.mixed().required("تصویر محصول بار گذاری شود"),
    // .test('fileFormat', '  فرمت عکس webp باشد', (value) => {
    //    return value && ['image/webp','image/png'].includes(value.type);
    // }),
    categoryId: Yup.number().required("دسته بندی  را انتخاب کنید"),
    price: Yup.number().required("قیمت محصول را وارد کنید"),
    count: Yup.number().required(" تعداد محصول را وارد کنید "),
    color: Yup.string().required("رنگ محصول را وارد کنید "),
    description: Yup.string().required("توضیحات محصول را وارد کنید"),
  });

  const auth = async(input) => {
  //  const res= await HttpService.post("/upload",input.image)
  //  console.log (res.data)
     await HttpService.post("/products",input)
    //await HttpService.post("/products",{ ...input , image: res})
    setTimeout(() => {
      window.location.reload(false);
    }, 500);

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
          <EditForm onSubmit={handleSubmit}>
            <TittleInputs> نام محصول</TittleInputs>
            <TextField
              className="TextField"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Errors variant="h5">
              {errors.name && touched.name && errors.name}
            </Errors>
            <TittleInputs> نام لاتین</TittleInputs>
            <TextField
              className="TextField"
              type="text"
              name="ENname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ENname}
            />
            <Errors variant="h5">
              {errors.ENname && touched.ENname && errors.ENname}
            </Errors>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TittleInputs>تصویر</TittleInputs>
                <TextField
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
              </Grid>
              <Grid item xs={4}>
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
              </Grid>
              <Grid item xs={4}>
                <TittleInputs>دسته بندی</TittleInputs>
                <Select
                  id="categoryId"
                  name="categoryId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoryId}
                >
                  <MenuItem value={1}>مک مینی</MenuItem>
                  <MenuItem value={2}>مک بوک پرو16</MenuItem>
                  <MenuItem value={3}> 14 مک بوک پرو </MenuItem>
                  <MenuItem value={4}>13 مک بوک پرو </MenuItem>
                  <MenuItem value={5}>مک بوک ایر </MenuItem>
                  <MenuItem value={6}>آیمک</MenuItem>
                  <MenuItem value={7}>آیپد پرو</MenuItem>
                </Select>
                <Errors variant="h5">
                  {errors.categoryId && touched.categoryId && errors.categoryId}
                </Errors>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>
            <TittleInputs>توضیحات</TittleInputs>
            <TextField
              className="TextField"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Errors variant="h5">
              {errors.description && touched.description && errors.description}
            </Errors>
            <ButtonAdd type="submit" disabled={isSubmitting} >
              ذخیره
            </ButtonAdd>
          </EditForm>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
