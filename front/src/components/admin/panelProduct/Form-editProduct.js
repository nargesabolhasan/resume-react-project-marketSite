import React, { useState, useEffect } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

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
  const { product, handleCloseModal, updateData } = props;
  const [changedData, setChangedData] = useState(product);

  const [thumbnails, setThumbnails] = useState([]);
  const [uploadedImage, setIUploadedImage] = useState(null);
  const [uploadedGallery, setIUploadedGallery] = useState([]);
  const [uploadingGallery, setIUploadingGallery] = useState(false);
  const [uploadingImage, setIUploadingImage] = useState(false);
  const [dataDesciption, setDataDiscription] = useState();

  const state = useSelector((state) => state);

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
    price: Yup.number("قیمت محصول را وارد کنید").min(0,"بزرگتر از 0 باشد"),
    count: Yup.number(" تعداد محصول را وارد کنید ").min(0,"بزرگتر از 0 باشد"),
    color: Yup.string("رنگ محصول را وارد کنید "),
    description: Yup.string("توضیحات محصول را وارد کنید"),
  });

  //---------------------
  useEffect(() => {
    (() => {
      let answ = changedData.thumbnail.split(",");
      setThumbnails(answ);
    })();
  }, []);
  //-------handle Changes:---------
  const handleChanges = (e) => {
    setChangedData({ ...changedData, [e.target.name]: e.target.value });
  };
  //-------handle Changes:---------
  const handleCkeditore = (e, editor) => {
    setChangedData({ ...changedData, description: editor?.getData() });
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
  //------delete Old photos:----
  const deleteOldphotos = (input) => {
    setThumbnails(thumbnails.filter((i) => i !== input));
    //console.log(input)
  };
  //------delete new photos:----
  const deleteNewphotos = (input) => {
    setIUploadedGallery(uploadedGallery.filter((i) => i !== input));
    //console.log(input)
  };
  //---------submitEdit:-----------
  const submitEdit = async (input) => {
    const formData = new FormData();
    if (!uploadedImage) {
      for (const [key, value] of Object.entries({
        ...changedData,
        image:product?.image,
        thumbnail: [
          uploadedGallery.map((image) => `/files/${image}`),
          thumbnails.map((image) => image),
        ],
      })) {
        formData.append(key, value);
      }
      await HttpService.patch(`products/${product.id}`, formData, {
        headers: { token: localStorage.getItem(("token")) },
      });
      updateData();
      setTimeout(() => {
        handleCloseModal();
      }, 600);
    } else {
      for (const [key, value] of Object.entries({
        ...changedData,
        image: `/files/${uploadedImage}`,
        thumbnail: [
          uploadedGallery.map((image) => `/files/${image}`),
          thumbnails.map((image) => image),
        ],
      })) {
        formData.append(key, value);
      }
      await HttpService.patch(`products/${product.id}`, formData, {
        headers: { token: localStorage.getItem("token") },
      });
      updateData();
      setTimeout(() => {
        handleCloseModal();
      }, 600);
    }
  };

  return (
    <div>
     <Typography sx={{ fontSize:{lg:50,md:30,xs:30},fontFamily: "koodak",p:3}}>ویرایش کالا</Typography>
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
            submitEdit(values);
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
                  flexDirection: { lg: "row", md: "row", xs: "column" },
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Grid>
                  <TittleInputs> نام محصول</TittleInputs>
                  <TextField
                    sx={{ m: 0, fontFamily: "SansWeb", overflowX: "scrole" }}
                    type="text"
                    name="name"
                    column="1"
                    multiline
                    inputProps={{
                      style: {
                        height: 90,
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
                        height: 90,
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
                        height: 90,
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
                  <Grid   sx={{
                    border: "2px dashed gray",
                    height: 260,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
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
                        style={{ width: "200px" }}
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
                  <Grid sx={{ border: "2px dashed gray", maxHeight:260,minHeight:260,overflowY:"scroll",display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "space-around",alignItems: "center"}}>
                    {uploadedGallery?.map((image, index) => (
                      <div key={index} style={{borderBottom:"2px dashed gray", paddingTop:"20px",paddingRight:"20px",marginTop:"25px",width: "100%",minHeight:"90px"}}>
                      <CloseIcon
                        sx={{
                          mx: "auto",
                          backgroundColor: "primary.main",
                          color: "white",
                          fontSize: 20,
                          position: "relative",
                          bottom:"50px",
                          border: 3,
                          borderColor: "primary.main",
                          borderRadius: "11px",
                        }}
                          onClick={() => deleteNewphotos(image)}
                        />
                        <img
                          src={`${BASE_URL}/files/${image}`}
                          alt="Alt Text!"
                          style={{ width: "80px" }}
                        />
                      </div>
                    ))}

                    {thumbnails?.map((image, index) => (
                       <div key={index*2} style={{borderBottom:"2px dashed gray", paddingTop:"20px",paddingRight:"20px",marginTop:"25px",width: "100%",minHeight:"90px"}}>
                        <CloseIcon
                          sx={{
                            mx: "auto",
                            backgroundColor: "primary.main",
                            color: "white",
                            fontSize: 20,
                            position: "relative",
                            bottom:"50px",
                            border: 3,
                            borderColor: "primary.main",
                            borderRadius: "11px",
                          }}
                          onClick={() => deleteOldphotos(image)}
                        />
                        <img
                        sx={{border:"2px solid black"}}
                          key={index}
                          src={`${BASE_URL}${image}`}
                          alt="Alt Text!"
                          style={{ width: "80px" }}
                        />
                      </div>
                    ))}
                  </Grid>
                  <TextField
                    className="TextField"
                    id="image"
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
                <CKEditor
                  editor={ClassicEditor}
                  data={product?.description}
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
