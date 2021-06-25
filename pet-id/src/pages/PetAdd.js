import { Button, Grid, Divider } from "@material-ui/core";
import PetEnum from "../attributes/pet/Pet";
import PetAddStyles from "../styles/hooks/petAddStyles";
import addPetFormSwitcher from "../helpers/addPetFormSwitcher";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

function PetAdd(props) {
  const petAddClasses = PetAddStyles();
  const location = useLocation();
  const history = useHistory();
  const [form, setForm] = useState(
    location.state || {
      radio: "male",
      dates: {},
      date: {},
      height: "",
      textField: {},
    }
  );
  return (
    <div>
      <form>
        <Grid container spacing="5">
          {Object.values(PetEnum).map((pet, index) => (
            <Grid item spacing="5" md={6} xs={12} align="center">
              {addPetFormSwitcher(pet, form, setForm, index)}
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
                onClick={() => {
                  history.replace("/pet-add", {
                    radio: "male",
                    dates: {},
                    date: {},
                    height: "",
                    textField: {},
                  });
                  history.go(0);
                }}
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
      </form>
    </div>
  );
}

export default PetAdd;
