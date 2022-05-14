import React from "react";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";

const Basic = () =>{ 
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
        
          // Format Validation
          .min(4,"Invalid email address format")
        
          // Required Field Validation
          .required("Email is required"),
        password: Yup.string()
        
          //Minimum Character Validation
          .min(3, "Password must be 3 characters at minimum")
          .required("Password is required")
      });
 return (<div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ username: "", password: "" }}

    validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          {errors.username && touched.username && errors.username}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>)

}
export default Basic;
