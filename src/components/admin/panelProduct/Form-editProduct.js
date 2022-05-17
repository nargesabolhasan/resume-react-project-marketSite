import React ,{useState} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import HttpService from "../../../axios/HttpService";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import ButtonAdd from "../../buttons/Button-add";
import Grid from "@mui/material/Grid";
import "./prodactStyle.scss";
import usePatchAxios from "../../../axios/usePatchAxios";

//----component styles----------------

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

//---------------------------------------------------------

const Basic = (props) => {
  const { product } = props;
  const [changedData,setChangedData]=useState(product)
  const {data,loading,error}=usePatchAxios()

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "نام بیشتر از 4 حرف باشد"),
    ENname: Yup.string()
      .min(3, "نام بیشتر از 3 حرف باشد")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "تنها حروف لاتین امکان پذیر است"
      ),
    image: Yup.mixed("تصویر محصول بار گذاری شود"),
    categoryId: Yup.number("دسته بندی  را انتخاب کنید"),
    price: Yup.number("قیمت محصول را وارد کنید"),
    count: Yup.number(" تعداد محصول را وارد کنید "),
    color: Yup.string("رنگ محصول را وارد کنید "),
    description: Yup.string("توضیحات محصول را وارد کنید"),
  });

  const handleChanges=(e)=>{
    setChangedData(prev => ({ ...prev,  [e.target.name]: e.target.value}))
  }
//---------patch:-----------
  const auth =  (input) => {
    // await HttpService.patch(`products/${product.id}`, changedData);
    //console.log(changedData);
  };

  return (
    <div>
      <h1>ویرایش کالا</h1>
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
          <EditForm onSubmit={handleSubmit}>
            <TittleInputs> نام محصول</TittleInputs>
            <TextField
              className="TextField"
              type="text"
              name="name"
              onChange={handleChanges}
              onBlur={handleBlur}
              value={changedData.name}
            />
            <Errors variant="h5">
              {errors.name && touched.name && errors.name}
            </Errors>
            <TittleInputs> نام لاتین</TittleInputs>
            <TextField
              className="TextField"
              type="text"
              name="ENname"
              onChange={handleChanges}
              onBlur={handleBlur}
              value={changedData.ENname}
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
                  onChange={handleChanges}
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
                  onChange={handleChanges}
                  onBlur={handleBlur}
                  value={changedData.color}
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
                  onChange={handleChanges}
                  onBlur={handleBlur}
                  value={changedData.categoryId}
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
                  onChange={handleChanges}
                  onBlur={handleBlur}
                  value={changedData.price}
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
                  onChange={handleChanges}
                  onBlur={handleBlur}
                  value={changedData.count}
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
              onChange={handleChanges}
              onBlur={handleBlur}
              value={changedData.description}
            />
            <Errors variant="h5">
              {errors.description && touched.description && errors.description}
            </Errors>
            <ButtonAdd type="submit" disabled={isSubmitting}>
              ذخیره
            </ButtonAdd>
          </EditForm>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
