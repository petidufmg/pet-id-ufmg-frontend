import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PetsIcon from "@material-ui/icons/Pets";
import "../styles/css/login.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Login() {
  return (
    <div className="home-div">
      <form className="MuiTextField-root">
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Typography variant="h2">
              Pet ID <PetsIcon fontSize="large" />
            </Typography>
          </Grid>

          <Grid item>
            <TextField required label="Usuário" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField required label="Senha" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Button
              to="/sign-up"
              component={Link}
              className="button"
              variant="contained"
              color="secondary"
            >
              Cadastrar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              to="/home"
              component={Link}
              className="button"
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
