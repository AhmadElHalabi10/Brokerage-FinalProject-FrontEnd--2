import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import logo from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/Brokerage-FinalProject-FrontEnd/almorad/src/images/alMoradLogo2.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import adminContext from "../adminContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginComponent() {
  const { addTokenAdmin } = useContext(adminContext);
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}auth/login`,
        { password, username }
      );
      console.log(response.data.token);
      addTokenAdmin(response.data.token);
      toast.success("logIn successful");
      navigate("/dashboard/admin/AdminPage");
    } catch (error) {
      console.log(error);
      toast.error("Error SignIn, Please Try Again ");
    }
  };

  return (
    <section className="loginAdminComponent">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 3, bgcolor: "#0097B2", width: 75, height: 75 }}>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: 150,
                  height: 150,
                  marginTop: 35,
                  marginLeft: 5,
                }}
              />
            </Avatar>
            <Typography component="h1" variant="h4">
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ alignItems: "center" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, background: "#0097B2" }}
              >
                Log In
              </Button>
            </Box>
          </Box>
          <Copyright />
        </Container>
        <ToastContainer />
      </ThemeProvider>
    </section>
  );
}
