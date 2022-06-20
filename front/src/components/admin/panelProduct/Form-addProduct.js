import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import HttpService from "../../../axios/HttpService";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ButtonAdd from "../../buttons/Button-add";
import { BASE_URL } from "../../../constants/Constants";
import galleryIcon from "../../../assets/images/uploadImage/galleryIcon.png";
import imageIcon from "../../../assets/images/uploadImage/imageIcon.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const EditForm = styled("form")(({ theme }) => ({
  fontFamily: "koodak",
  textAlign: "right",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

const TittleInputs = styled("h5")(({ theme }) => ({
  fontFamily: "koodak",
  margin: "0px",
}));

const Errors = styled("h5")(({ theme }) => ({
  textAlign: "right",
  color: "red",
}));

const Basic = (props) => {
  const [uploadedImage, setIUploadedImage] = useState();
  const [uploadedGallery, setIUploadedGallery] = useState([]);
  const [uploadingGallery, setIUploadingGallery] = useState(false);
  const [uploadingImage, setIUploadingImage] = useState(false);
  const [dataDesciption, setDataDiscription] = useState();

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("نام محصول را وارد کنید "),
    ENname: Yup.string().required("نام لاتین محصول را وارد کنید"),
    image: Yup.mixed().required("تصویر محصول بار گذاری شود"),
    thumbnail: Yup.mixed("تصاویر گالری محصول بار گذاری شود"),
    categoryId: Yup.number().required("دسته بندی  را انتخاب کنید"),
    price: Yup.number()
      .required("قیمت محصول را وارد کنید")
      .min(0, "بزرگتر از 0 باشد"),
    count: Yup.number()
      .required(" تعداد محصول را وارد کنید ")
      .min(0, "بزرگتر از 0 باشد"),
    color: Yup.string().required("رنگ محصول را وارد کنید "),
  });

  //-------submit add:----------
  const submitAdd = async (input) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries({
      ...input,
      image: `/files/${uploadedImage}`,
      thumbnail: [uploadedGallery.map((image) => `/files/${image}`)],
    })) {
      formData.append(key, value);
    }
    await HttpService.post("/products", formData);
    props.updateData();
    props.handleClose();
  };
  //-------uplaod one image:---------
  const handleUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const res = await HttpService.post("/upload", formData);
    setIUploadingImage(true);
    setIUploadedImage(res?.data.filename);
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
  //-------handle Changes:---------
  const handleCkeditore = (e, editor) => {
    setDataDiscription(editor?.getData());
  };

  //------delete new photos:----
  const deleteNewphotos = (input) => {
    setIUploadedGallery(uploadedGallery.filter((i) => i !== input));
  };

  return (
    <div>
      <Typography sx={{ fontSize:{lg:50,md:30,xs:30},fontFamily: "koodak",p:3}}>افزودن کالا</Typography>
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
            values = { ...values, description: dataDesciption };
            submitAdd(values);
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
        }) => (
          <EditForm onSubmit={handleSubmit}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid>
                <TittleInputs> نام محصول</TittleInputs>
                <TextField
                  sx={{ m: 0 }}
                  column="1"
                  multiline
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ENname}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <Errors variant="h5">
                  {errors.price && touched.price && errors.price}
                </Errors>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid>
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

              <Grid>
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
              <Grid>
                <TittleInputs>دسته بندی</TittleInputs>
                <Select
                  id="categoryId"
                  name="categoryId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoryId}
                  sx={{ width: 210 }}
                >
                  <MenuItem value={1}>مک مینی</MenuItem>
                  <MenuItem value={2}>مک بوک پرو16</MenuItem>
                  <MenuItem value={3}> 14 مک بوک پرو </MenuItem>
                  <MenuItem value={4}>13 مک بوک پرو </MenuItem>
                  <MenuItem value={5}>مک بوک ایر </MenuItem>
                  <MenuItem value={6}>آیمک</MenuItem>
                  <MenuItem value={7}>آیپد پرو</MenuItem>
                  <MenuItem value={8}> آیفون 13 پرو مکس</MenuItem>
                </Select>
                <Errors variant="h5">
                  {errors.categoryId && touched.categoryId && errors.categoryId}
                </Errors>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { lg: "row", md: "row", xs: "column" },
                alignItems: "start",
                justifyContent: "space-around",
              }}
            >
              <Grid
                sx={{
                  width: 220,
                }}
              >
                <TittleInputs>تصویر</TittleInputs>
                <Grid
                  sx={{
                    border: "2px dashed gray",
                    height: 260,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {uploadingImage ? (
                    <img
                      src={`${BASE_URL}/files/${uploadedImage}`}
                      alt="Alt Text!"
                      style={{ width: "200px" }}
                    />
                  ) : (
                    <img
                      src={imageIcon}
                      alt="Alt Text!"
                      style={{ width: "80px", margin: "0 auto" }}
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
                  width: 220,
                }}
              >
                <TittleInputs>تصاویر گالری</TittleInputs>
                <Grid
                  sx={{
                    border: "2px dashed gray",
                    maxHeight: 260,
                    minHeight: 260,
                    overflowY: "scroll",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {uploadingGallery ? (
                    uploadedGallery.map((image, index) => (
                      <div
                        key={index * 2}
                        style={{
                          borderBottom: "2px dashed gray",
                          paddingTop: "20px",
                          paddingRight: "20px",
                          marginTop: "25px",
                          width: "100%",
                          minHeight: "90px",
                        }}
                      >
                        <CloseIcon
                          sx={{
                            mx: "auto",
                            backgroundColor: "primary.main",
                            color: "white",
                            fontSize: 20,
                            position: "relative",
                            bottom: "50px",
                            border: 3,
                            borderColor: "primary.main",
                            borderRadius: "11px",
                          }}
                          onClick={() => deleteNewphotos(image)}
                        />
                        <img
                          key={index}
                          src={`${BASE_URL}/files/${image}`}
                          alt="Alt Text!"
                          style={{ width: "80px" }}
                        />
                      </div>
                    ))
                  ) : (
                    <img
                      src={galleryIcon}
                      alt="Alt Text!"
                      style={{ width: "80px" }}
                    />
                  )}
                </Grid>
                <TextField
                  inputProps={{ multiple: true }}
                  className="TextField"
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  accept="image/webp"
                  onChange={(e) => {
                    handleUploadThumbnail(e);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                />
                <Errors variant="h5">
                  {errors.thumbnail && touched.thumbnail && errors.thumbnail}
                </Errors>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { lg: "column", md: "column", xs: "column" },
                alignItems: "start",
                justifyContent: "space-around",
               width: { lg: "430px", md: "430px", xs: "200px" },
               overflowX:"scroll"

              }}
            >
              <TittleInputs>توضیحات</TittleInputs>
              <CKEditor
                editor={ClassicEditor}
                data={values.description}
                name="description"
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "bulletedList",
                    "numberedList",
                    "blockQuote",
                    "ckfinder",
                    "|",
                    "undo",
                    "redo",
                  ],
                }}
                onChange={(e, editor) => {
                  handleCkeditore(e, editor);
                }}
                onBlur={handleBlur}
              />
              <Errors variant="h5">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </Errors>
            </Grid>

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
