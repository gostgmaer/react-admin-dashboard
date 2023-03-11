import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { tokens } from "../../theme";
import { useGlobalAuthContext } from "../../Utils/Context/AuthContent";
import {
  regSmallChar,
  regCapitalchar,
  regNumber,
  regspecialChar,
  regEmail,
} from "../../Utils/regex";
import SocialAuth from "./loginItems/SocialAuth";

const MuiLogin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { LoginEvent } = useGlobalAuthContext();
  let navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          //  backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: colors.primary[500],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <img
          style={{
            opacity: 0.5,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          src="https://source.unsplash.com/random"
          alt=""
        />
      </Grid>
      <Grid
        sx={{ background: "#fff", color: "#000" }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
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
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}>
                <TextField
                  sx={{ background: "#fff", color: "#000" }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  // @ts-ignore
                  helperText={touched.email && errors.email}
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
                    // endAdornment={
                    //   <InputAdornment position="end">
                    //     <IconButton
                    //       aria-label="toggle password visibility"
                    //       onClick={handleClickShowPassword}
                    //       onMouseDown={handleMouseDownPassword}
                    //       edge="end">
                    //       {showPassword ? <VisibilityOff /> : <Visibility />}
                    //     </IconButton>
                    //   </InputAdornment>
                    // }
                  />
                {/* <FormControl
                  sx={{ width: "100%", mt: "5px" }}
                  variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel> 
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
                    // endAdornment={
                    //   <InputAdornment position="end">
                    //     <IconButton
                    //       aria-label="toggle password visibility"
                    //       onClick={handleClickShowPassword}
                    //       onMouseDown={handleMouseDownPassword}
                    //       edge="end">
                    //       {showPassword ? <VisibilityOff /> : <Visibility />}
                    //     </IconButton>
                    //   </InputAdornment>
                    // }
                  />
                </FormControl> */}
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ background: "#fff", color: "#000" }}
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, p: "8px 0", mb: 2 }}>
                  Sign In
                </Button>
              </Box>
            )}
          </Formik>

          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Typography
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
            variant="h5">
            Or Login with Social media
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}>
            <SocialAuth />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Copyright sx={{ mt: 3 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiLogin;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        gost
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
