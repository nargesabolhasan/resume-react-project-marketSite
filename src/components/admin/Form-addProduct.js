import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { Yard } from "@mui/icons-material";
import HttpService from "../../axios/HttpService";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const TittleInputs = styled("h3")(({ theme }) => ({
  fontFamily: "koodak",
}));

const Errors = styled("h3")(({ theme }) => ({
  fontFamily: "koodak",
  color: "red",
}));

const Basic = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "نام بیشتر از 4 حرف باشد")
      .required("نام محصول را وارد کنید "),
    ENname: Yup.string()
      .min(3, "نام بیشتر از 3 حرف باشد")
      .required("نام لاتین محصول را وارد کنید")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "تنها حروف لاتین امکان پذیر است"
      ),
    image: Yup.mixed().required("تصویر محصول بار گذاری شود"),
    categoryId: Yup.number().required("دسته بندی  را انتخاب کنید"),
    price: Yup.number().required("قیمت محصول را وارد کنید"),
    count: Yup.number().required(" تعداد محصول را وارد کنید "),
    color: Yup.string().required("رنگ محصول را وارد کنید "),
    description: Yup.string().required("توضیحات محصول را وارد کنید"),
  });

  const auth = async (input) => {
    await HttpService.post("products", input);
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
            <input
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
            <input
              type="text"
              name="ENname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ENname}
            />
            <Errors variant="h5">
              {errors.ENname && touched.ENname && errors.ENname}
            </Errors>
            <TittleInputs>تصویر</TittleInputs>
            <input
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
            <TittleInputs>دسته بندی</TittleInputs>
            <select
              id="categoryId"
              name="categoryId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.categoryId}
            >
              <option value="1">مک مینی</option>
              <option value="2">مک بوک پرو16</option>
              <option value="3">مک بوک پرو 14</option>
              <option value="4">مک بوک پرو13 </option>
              <option value="5"> مک بوک ایر</option>
              <option value="6">آیمک</option>
              <option value="7">آیپد پرو</option>
            </select>
            <Errors variant="h5">
              {errors.categoryId && touched.categoryId && errors.categoryId}
            </Errors>
            <TittleInputs>قیمت</TittleInputs>
            <input
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
            <input
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
            <input
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
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <Errors variant="h5">
              {errors.description && touched.description && errors.description}
            </Errors>
            <button type="submit" disabled={isSubmitting}>
              ذخیره
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
