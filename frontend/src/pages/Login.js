import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PetsIcon from "@material-ui/icons/Pets";
import "../styles/css/login.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import GoogleLogin from "../components/GoogleLogin";
import loadjs from "loadjs";

function Login() {
  loadjs("https://accounts.google.com/gsi/client");
  return (
    <div className="home-div">
      <form className="MuiTextField-root">
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Typography variant="h2">
              Pet ID <PetsIcon fontSize="large" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GoogleLogin/>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
