import React, { Fragment, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import { Visibility, VisibilityOutlined } from "@mui/icons-material";
import { object, string } from "yup";
import {
  regCapitalchar,
  regEmail,
  regNumber,
  regSmallChar,
  regspecialChar,
} from "../../../Utils/regex";
import { useGlobalAuthContext } from "../../../Utils/Context/AuthContent";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ setAuth }) => {
  const { logOuthandler, isLogin, LoginEvent } = useGlobalAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    password: "",
    email: "",
  };
  const userSchema = object().shape({
    password: string()
      .required("Password is required")
      .matches(regSmallChar, "Password must have a small letter")
      .matches(regCapitalchar, "Password must have a capital letter")
      .matches(regNumber, "Password must have a number")
      .matches(regspecialChar, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`),
    email: string()
      .matches(regEmail, "Email Address is not Valid")
      .email()
      .required("Email is required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    LoginEvent();
    navigate("/");
  };

  return (
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
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box
            component={motion.div}
            animate={{
              transition: {
                staggerChildren: 0.55,
              },
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}>
              <TextField
            
                fullWidth
                type={"email"}
                label={"Email Address"}
                autoFocus
                required
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                // @ts-ignore
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 6", bgcolor: "#fff" }}
              />

              <TextField
                fullWidth
                type={"password"}
                label={"Password"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                // @ts-ignore
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 6" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="#000"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility /> : <VisibilityOutlined />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}>
                <FormControlLabel
                  control={<Checkbox checked={values.remember} />}
                  label="Remember me"
                />

                <Link
                  component={RouterLink}
                  variant="subtitle2"
                  to="#"
                  underline="hover">
                  Forgot password?
                </Link>
              </Stack>

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}>
                {isSubmitting ? "loading..." : "Login"}
              </LoadingButton>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
