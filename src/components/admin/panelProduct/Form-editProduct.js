import React, { useState } from "react";
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
import { BASE_URL } from "../../../constants/Constants";
import galleryIcon from "../../../assets/images/uploadImage/galleryIcon.png";
import imageIcon from "../../../assets/images/uploadImage/imageIcon.png";

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
  const [changedData, setChangedData] = useState(product);
  // const {data,loading,error}=usePatchAxios()
  const [uploadedImage, setIUploadedImage] = useState();
  const [uploadedGallery, setIUploadedGallery] = useState([]);
  const [uploadingGallery, setIUploadingGallery] = useState(false);
  const [uploadingImage, setIUploadingImage] = useState(false);
    //-----dollarUSLocale:---
    let dollarUSLocale = Intl.NumberFormat('en-US');

  const LoginSchema = Yup.object().shape({
    name: Yup.string().min(4, "نام بیشتر از 4 حرف باشد"),
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

  const handleChanges = (e) => {
    setChangedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //---------patch:-----------
  const auth = async (input) => {
    await HttpService.patch(`products/${product.id}`, changedData, {
      headers: { token: localStorage.getItem("token") },
    });
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };
  //-------uplaod one image:---------
  const handleUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const res = await HttpService.post("/upload", formData);
    setIUploadingImage(true);
    setIUploadedImage(res?.data.filename);
    console.log(res?.data.filename);
  };
  //--------uplaod thumbnails :-------
  const handleUploadThumbnail = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const res = await HttpService.post("/upload", formData);
    setIUploadingGallery(true);
    setIUploadedGallery([...uploadedGallery, res?.data.filename]);
  };

  console.log(changedData.thumbnail);
  return (
    <div>
      <h1>ویرایش کالا</h1>
      <Formik
        initialValues={{
          name: "",
          ENname: "",
          image: "",
          thumbnail: "",
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
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Grid>
                  <TittleInputs> نام محصول</TittleInputs>
                  <TextField
                    sx={{ m: 0,fontFamily: "SansWeb",overflowX:"scrole"}}
                    type="text"
                    name="name"
                    column="1"
                    multiline
                    inputProps={{
                      style: {
                        height:90,
                      },
                    }}
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.name}
                  />
                  <Errors variant="h5">
                    {errors.name && touched.name && errors.name}
                  </Errors>
                </Grid>
                <Grid>
                  <TittleInputs> نام لاتین</TittleInputs>
                  <TextField
                   column="1"
                   multiline
                    type="text"
                    name="ENname"
                    inputProps={{
                      style: {
                        height:90,
                      },
                    }}
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.ENname}
                  />
                  <Errors variant="h5">
                    {errors.ENname && touched.ENname && errors.ENname}
                  </Errors>
                </Grid>
                <Grid>
                  <TittleInputs>قیمت</TittleInputs>
                  <TextField
                    type="number"
                    name="price"
                    inputProps={{
                      style: {
                        height:90,
                      },
                    }}
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                   value={changedData.price}
                  />
                  <Errors variant="h5">
                    {errors.price && touched.price && errors.price}
                  </Errors>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Grid>
                  <TittleInputs>تعداد</TittleInputs>
                  <TextField
                    type="number"
                    name="count"
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.count}
                  />
                  <Errors variant="h5">
                    {errors.count && touched.count && errors.count}
                  </Errors>
                </Grid>

                <Grid>
                  <TittleInputs>رنگ</TittleInputs>
                  <TextField
                    type="text"
                    name="color"
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.color}
                  />
                  <Errors variant="h5">
                    {errors.color && touched.color && errors.color}
                  </Errors>
                </Grid>
                <Grid>
                  <TittleInputs>دسته بندی</TittleInputs>
                  <Select
                    id="categoryId"
                    name="categoryId"
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.categoryId}
                    sx={{ width: 210 }}
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
                    {errors.categoryId &&
                      touched.categoryId &&
                      errors.categoryId}
                  </Errors>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "space-around",
                }}
              >
                <Grid
                  sx={{
                    width: 210,
                  }}
                >
                  <TittleInputs>تصویر</TittleInputs>
                  <Grid sx={{ border: "2px solid gray", height: 95, p: 2 }}>
                    {uploadingImage ? (
                      <img
                        src={`${BASE_URL}/files/${uploadedImage}`}
                        alt="Alt Text!"
                        style={{ width: "80px" }}
                      />
                    ) : (
                      <img
                        src={`${BASE_URL}${changedData.image}`}
                        alt="Alt Text!"
                        style={{ width: "80px" }}
                      />
                    )}
                  </Grid>
                  <TextField
                    className="TextField"
                    id="image"
                    name="image"
                    type="file"
                    accept="image/webp"
                    onChange={(e) => {
                      handleUpload(e);
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  <Errors variant="h5">
                    {errors.image && touched.image && errors.image}
                  </Errors>
                </Grid>
                <Grid
                  sx={{
                    width: 210,
                  }}
                >
                  <TittleInputs>تصاویر گالری</TittleInputs>
                  <Grid sx={{ border: "2px solid gray" }}>
                    {uploadingGallery ? (
                      uploadedGallery.map((image, index) => (
                        <img
                          key={index}
                          src={`${BASE_URL}/files/${image}`}
                          alt="Alt Text!"
                          style={{ width: "80px" }}
                        />
                      ))
                    ) : (
                      <img
                        src={`${BASE_URL}${changedData.image}`}
                        alt="Alt Text!"
                        style={{ width: "80px" }}
                      />
                    )}
                  </Grid>
                  <TextField
                    className="TextField"
                    id="image"
                    name="thumbnail"
                    type="file"
                    accept="image/webp"
                    onChange={(e) => {
                      handleUploadThumbnail(e);
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  <Errors variant="h5">
                    {errors.thumbnail && touched.thumbnail && errors.thumbnail}
                  </Errors>
                </Grid>
                <Grid>
                  <TittleInputs>توضیحات</TittleInputs>
                  <TextField
                   rows="4"
                   multiline
                    inputProps={{
                      style: {
                        height: 116,
                      },
                    }}
                    type="text"
                    name="description"
                    onChange={(e) => {
                      handleChanges(e);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={changedData.description}
                  />
                  <Errors variant="h5">
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </Errors>
                </Grid>
              </Grid>
              <ButtonAdd type="submit" disabled={isSubmitting}>
                ذخیره
              </ButtonAdd>
            </Grid>
          </EditForm>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
