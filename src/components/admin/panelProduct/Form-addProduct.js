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
  const [dataDesciption ,setDataDiscription]=useState();

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "نام بیشتر از 2 حرف باشد")
      .required("نام محصول را وارد کنید "),
    ENname: Yup.string()
      .min(3, "نام بیشتر از 3 حرف باشد")
      .required("نام لاتین محصول را وارد کنید")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi ||
          /^[0-9a-zA-Z]+$/,
        "تنها حروف لاتین امکان پذیر است"
      ),
    image: Yup.mixed().required("تصویر محصول بار گذاری شود"),
    thumbnail: Yup.mixed().required("تصاویر گالری محصول بار گذاری شود"),

    // .test('fileFormat', '  فرمت عکس webp باشد', (value) => {
    //    return value && ['image/webp','image/png'].includes(value.type);
    // }),
    categoryId: Yup.number().required("دسته بندی  را انتخاب کنید"),
    price: Yup.number().required("قیمت محصول را وارد کنید"),
    count: Yup.number().required(" تعداد محصول را وارد کنید "),
    color: Yup.string().required("رنگ محصول را وارد کنید "),
    //description: Yup.string()("توضیحات محصول را وارد کنید"),
  });

  // `/files/${uploadedGallery}`
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
    props.updateData()
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 1000);
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
      //console.log(input)
    };

  return (
    <div>
      <h1>افزودن / ویرایش کالا</h1>
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
            values={...values,"description":dataDesciption};
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
          /* and other goodies */
        }) => (
          <EditForm onSubmit={handleSubmit}>
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
                  sx={{ m: 0 }}
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
                </Select>
                <Errors variant="h5">
                  {errors.categoryId && touched.categoryId && errors.categoryId}
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
                      src={imageIcon}
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
                <Grid sx={{ border: "2px solid gray", minHeight: 95 }}>
                  {uploadingGallery ? (
                    uploadedGallery.map((image, index) => (
                      <span key={index} sx={{ width: "200px" }}>
                      <CloseIcon
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          fontSize: 20,
                          position: "absolute",
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
                      </span>
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
              {/* <Grid>
                <TittleInputs>توضیحات</TittleInputs>
                <TextField
                multiline
                 inputProps={{
                  style: {
                    height:116,
                    overflowY:"scroll",
                  },
                }}
                  type="text"
                  name=""signator_text""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <Errors variant="h5">
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </Errors>
              </Grid> */}
            </Grid>
            <div>
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
                  //handleChange(editor?.getData());
                }}
                onBlur={handleBlur}
              />
               <Errors variant="h5">
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </Errors>
            </div>

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
