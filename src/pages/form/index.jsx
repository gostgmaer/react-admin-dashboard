import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { Formik } from "formik";
import { object, string } from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const emailRegex = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const phoneRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const userSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  contact: string().matches(phoneRegex, "Phone Number is not Valid").required(),
  email: string()
    .matches(emailRegex, "Email Address is not Valid")
    .email()
    .required(),
  address1: string().required(),
  address2: string().required(),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gap="30px"
              gridTemplateColumns={"repeat(4,minmax(0,1fr))"}
              sx={{
                "& >div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}>
              <TextField
                fullWidth
                variant="filled"
                type={"text"}
                label={"First Name"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}></TextField>
              <TextField
                fullWidth
                variant="filled"
                type={"text"}
                label={"Last Name"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}></TextField>
              <TextField
                fullWidth
                variant="filled"
                type={"email"}
                label={"Email Address"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}></TextField>
              <TextField
                fullWidth
                variant="filled"
                type={"text"}
                label={"Contact"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}></TextField>
              <TextField
                fullWidth
                variant="filled"
                type={"text"}
                label={"Address Line One"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}></TextField>
              <TextField
                fullWidth
                variant="filled"
                type={"text"}
                style={{ borderColor: "Background" }}
                label={"Address Line Two"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}></TextField>
            </Box>
            <Box display={'flex'} justifyContent='end' mt={'20px'}><Button type="submit" color="secondary" variant="contained">Create New User</Button></Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
