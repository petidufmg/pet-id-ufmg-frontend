import { Button, Grid, Divider } from "@material-ui/core";
import PetEnum from "../attributes/pet/Pet";
import PetAddStyles from "../styles/hooks/petAddStyles";
import addPetFormSwitcher from "../helpers/addPetFormSwitcher";

function PetAdd() {
  const petAddClasses = PetAddStyles();

  return (
    <div>
      <Grid container spacing="5">
        {Object.values(PetEnum).map((pet) => (
          <Grid item spacing="5" md={6} xs={12} align="center">
            {addPetFormSwitcher(pet)}
          </Grid>
        ))}
        <Grid container item spacing={2}>
          <Grid xs={12} item>
            <Divider />
          </Grid>
          <Grid
            className={petAddClasses.clearButtonContainer}
            item
            xs={12}
            md={6}
          >
            <Button
              className={petAddClasses.actionButton}
              color="primary"
              variant="contained"
            >
              Limpar
            </Button>
          </Grid>
          <Grid
            className={petAddClasses.saveButtonContainer}
            item
            xs={12}
            md={6}
          >
            <Button
              className={petAddClasses.actionButton}
              color="secondary"
              variant="contained"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PetAdd;
