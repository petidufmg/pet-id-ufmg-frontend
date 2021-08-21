import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@material-ui/core";

function Settings() {
  return (
    <div>
      <form>
        <Grid
          alignItems="center"
          justify="center"
          container
          direction="column"
          spacing="5"
        >
          {["Usuário", "Senha Antiga", "Nova Senha"].map((item) => {
            return (
              <Grid item>
                <TextField
                  required
                  id="outlined-required"
                  variant="outlined"
                  label={item}
                />
              </Grid>
            );
          })}
          <Grid item>
            <Button color="secondary" variant="contained">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Settings;
