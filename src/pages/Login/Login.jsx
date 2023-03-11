import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Link,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import Topbar from "../../Global/Topbar";
import { tokens } from "../../theme";
import { useGlobalAuthContext } from "../../Utils/Context/AuthContent";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { logOuthandler, isLogin, LoginEvent } = useGlobalAuthContext();

  const initialValues = {
    password: "",
    email: "",
  };
  const emailRegex = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const passWordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;

  const userSchema = object().shape({
    password: string()
      .required("Password is required")
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!+@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`),
     
    //   .matches(passWordRegex, "Password is not Valid")
    //   .required("Password Shoud not be Blank"),
    email: string()
      .matches(emailRegex, "Email Address is not Valid")
      .email()
      .required("Email is required"),
    
  });

  let navigate = useNavigate();

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}>
        {"Copyright © "}
        <Link color="inherit" href="/">
          Gost Dashboard
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    );
  }

  const handleFormSubmit = (values) => {
    console.log(values);
          LoginEvent();
      navigate("/");
  };
  //   const SignIn = (values) => {
  //     //event.preventDefault();

  //     console.log(values);
  //     // const data = new FormData(event.currentTarget);
  //     // console.log({
  //     //   email: data.get("email"),
  //     //   password: data.get("password"),
  //     // });
  //     LoginEvent();
  //     navigate("/");
  //   };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor:colors.grey[100],
          color:colors.grey[900],borderRadius:'10px'
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ m: 1, width: "80%" }}>
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
              <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <Box
                  display={"grid"}
                  gap="30px"
                  gridTemplateColumns={"repeat(6,minmax(0,1fr))"}
                  sx={{}}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type={"email"}
                    label={"Email Address"}
                    margin="normal"
                    autoFocus
                    required
                    autoComplete='off'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    // @ts-ignore
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 6",bgcolor:'#fff' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
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
                  />
                </Box>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Box display={"flex"} justifyContent="end" mt={"20px"}>
                  <Button type="submit" color="secondary" variant="contained">
                    Sign In
                  </Button>
                </Box>
              </form>
            )}
          </Formik>

          <Grid mt={2} container>
            <Grid item xs>
              <Link href="#" color={colors.grey[100]} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color={colors.grey[100]} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
