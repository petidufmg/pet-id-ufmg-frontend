import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import signUpStyles from "../styles/hooks/signUpStyles.js";
import PetsIcon from "@material-ui/icons/Pets";

function SignUp() {
  const classes = signUpStyles();
  const history = useHistory();

  function handleGoBackClick() {
    history.goBack();
  }

  return (
    <div className={classes.signUpDiv}>
      <form>
        <Grid container spacing="5" direction="column">
          <Grid item>
            <Typography variant="h2">
              Pet ID <PetsIcon fontSize="large" />
            </Typography>
          </Grid>
          {["Usuário", "Senha", "Nome", "Sobrenome", "Clínica/Instituição", "E-mail"].map((item) => {
            return (
              <Grid item>
                <TextField
                  classes={{
                    root: classes.root,
                  }}
                  required
                  id="outlined-required"
                  label={item}
                  variant="outlined"
                />
              </Grid>
            );
          })}
          <Grid container justify="center" item spacing="2">
            <Grid item>
              <Button
                onClick={handleGoBackClick}
                color="primary"
                variant="contained"
              >
                Voltar
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleGoBackClick}
                color="secondary"
                variant="contained"
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignUp;
