import React, { useState } from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Facebook, GitHub, Google, Visibility } from "@mui/icons-material";
import { object, string } from "yup";
import {
  regCapitalchar,
  regEmail,
  regNumber,
  regSmallChar,
  regspecialChar,
} from "../../Utils/regex";
import { Formik } from "formik";
import { useGlobalAuthContext } from "../../Utils/Context/AuthContent";
import { useNavigate } from "react-router-dom";

/**
 * This template uses [`Inter`](https://fonts.google.com/specimen/Inter?query=inter) font.
 */
export default function JoySignInSideTemplate() {
  const {LoginEvent } = useGlobalAuthContext();
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

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "40vw", // must be `vw` only
            "--Form-maxWidth": "700px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255 255 255 / 0.6)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}>
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              fontWeight="lg"
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
                    borderRadius: "50%",
                    boxShadow: (theme) => theme.shadow.md,
                    "--joy-shadowChannel": (theme) =>
                      theme.vars.palette.primary.mainChannel,
                  }}
                />
              }>
              Logo
            </Typography>
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}>
            <div>
              <Typography component="h2" fontSize="xl2" fontWeight="lg">
                Welcome back
              </Typography>
              <Typography level="body2" sx={{ my: 1, mb: 3 }}>
                Let&apos;s get started! Please enter your details.
              </Typography>
            </div>
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
                  <FormControl required>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={!!touched.email && !!errors.email}
                    />
                  </FormControl>
                  <FormControl required>
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="•••••••"
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      endDecorator={
                        <Visibility sx={{ cursor: "pointer" }} ></Visibility>
                      }
                      error={!!touched.password && !!errors.password}
                      // @ts-ignore
                    />
                  </FormControl>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Checkbox
                      size="sm"
                      label="Remember for 30 days"
                      name="persistent"
                    />
                    <Link
                      fontSize="sm"
                      href="#replace-with-a-link"
                      fontWeight="lg">
                      Forgot password
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    Sign in
                  </Button>
                </form>
              )}
            </Formik>
            <Typography typography={"body1"}>
              Or - Sign in with social media{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}>
              <Button
                variant="outlined"
                color="neutral"
                fullWidth
                startDecorator={<Google />}>
                Google
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                fullWidth
                startDecorator={<Facebook />}>
                Facebook
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                fullWidth
                startDecorator={<GitHub />}>
                Github
              </Button>
            </Box>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography
              level="body3"
              sx={{ verticalAlign: "middle" }}
              textAlign="center">
              © gost dashboard {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
