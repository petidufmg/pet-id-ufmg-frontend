import { Button, Grid, Divider } from "@material-ui/core";
import PetEnum from "../attributes/pet/Pet";
import OwnerEnum from "../attributes/owner/Owner";
import PetAddStyles from "../styles/hooks/petAddStyles";
import addPetFormSwitcher from "../helpers/addPetFormSwitcher";
import ImageUploader from "react-images-upload";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

function PetAdd(props) {
  const petAddClasses = PetAddStyles();
  const location = useLocation();
  const history = useHistory();
  const defaultImageLabel = "Tamanho máximo do arquivo: 5mb, formatos: jpg, gif, png";
  const [imageLabel, setImageLabel] = useState(defaultImageLabel);
  const [form, setForm] = useState(
    location.state || {
      image: [],
      radio: "male",
      dates: {},
      date: {},
      height: "",
      textField: {},
    }
  );

  function handleGoBackClick() {
    if (location.from === "/pet-info") {
      history.goBack();
    }
  }

  function handleOnDrop(picture) {
    setImageLabel(picture[0] ? picture[0].name : defaultImageLabel);
    setForm((prev) => ({
      ...prev,
      image: picture
    }));
  }

  return (
    <div className={petAddClasses.root}>
      <form>
        <h2 align="center">Informações do animal</h2>
        <Grid container spacing="5">
          <Grid xs={12} item>
            <ImageUploader
              buttonText="Escolher foto do animal"
              label={imageLabel}
              singleImage={true}
              onChange={handleOnDrop}
              withPreview={true}
            />
          </Grid>
          {Object.values(PetEnum).map((pet, index) => (
            <Grid item spacing="5" md={6} xs={12} align="center">
              {addPetFormSwitcher(pet, form, setForm, index)}
            </Grid>
          ))}
          <Grid xs={12} item>
            <Divider />
          </Grid>
          <Grid item spacing="5" align="center" xs={12}>
            <h2>Informações do Tutor</h2>
          </Grid>
          {Object.values(OwnerEnum).map((owner, index) => (
            <Grid item spacing="5" md={6} xs={12} align="center">
              {addPetFormSwitcher(owner, form, setForm, index + Object.keys(PetEnum).length)}
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
              md={4}
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
              className={petAddClasses.cancelButtonContainer}
              item
              xs={12}
              md={4}
            >
              <Button
                onClick={handleGoBackClick}
                className={petAddClasses.actionButton}
                color="primary"
                variant="contained"
              >
                Cancelar
              </Button>
            </Grid>
            <Grid
              className={petAddClasses.saveButtonContainer}
              item
              xs={12}
              md={4}
            >
              <Button
                onClick={handleGoBackClick}
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
