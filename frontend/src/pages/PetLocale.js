import { Button } from "@material-ui/core";
import CustomMap from "../components/CustomMap";
import petLocaleStyles from "../styles/hooks/petLocaleStyles.js";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

function PetLocale() {
  const history = useHistory();
  const classes = petLocaleStyles();
  const [selectedCoordinates, setCoordinates] = useState(
    history.location.state.coordinates || [0, 0]
  );

  function handleSaveClick() {
    if(history.location.from === "/pet-add") {
      history.replace({
        pathname: "/pet-add",
        state: { ...history.location.state, coordinates: selectedCoordinates },
      });
    }
    history.goBack();
  }

  function handleBackClick() {
    history.goBack();
  }

  function handleCleanClick() {
    if(history.location.from === "/pet-add") {
      history.replace({
        pathname: "/pet-add",
        state: { ...history.location.state, coordinates: [0,0] },
      });
    }
    handleBackClick();
  }

  return (
    <div className={classes.customMapDiv}>
      <Button
        onClick={handleBackClick}
        className={classes.leftButton}
        color="primary"
        variant="contained"
      >
        Voltar
      </Button>
      <Button
        onClick={handleCleanClick}
        className={classes.centerButton}
        color="primary"
        variant="contained"
      >
        Remover
      </Button>
      <Button
        onClick={handleSaveClick}
        className={classes.rightButton}
        color="secondary"
        variant="contained"
      >
        Salvar
      </Button>
      <CustomMap
        coordinates={selectedCoordinates}
        state={selectedCoordinates}
        setState={setCoordinates}
      />
    </div>
  );
}

export default PetLocale;
