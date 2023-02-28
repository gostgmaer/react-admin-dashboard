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
import React from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Global/Topbar";
import { tokens } from "../../theme";
import { useGlobalAuthContext } from "../../Utils/Context/AuthContent";

const Login = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const { logOuthandler, isLogin, LoginEvent } = useGlobalAuthContext();
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

  const SignIn = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    LoginEvent();
    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      
      <Box
        sx={{
          marginTop: 8,
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
        <Box component="form" onSubmit={SignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            variant={'filled'}
            fullWidth
            id="email"
            // sx={{border:`1px solid ${colors.grey[100]}`}}
            label="Email Address"
            name="email"
            // color={colors.grey[100]}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            // color={colors.grey[100]}
            fullWidth
            name="password"
            variant={'filled'}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,background:colors.grey[100],color:colors.primary[400] }}>
            Sign In
          </Button>
          <Grid container>
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
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
