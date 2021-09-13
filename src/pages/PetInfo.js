import Grid from "@material-ui/core/Grid";
import dog from "../images/dog.jpg";
import { petInfoStyles } from "../styles/hooks/petInfoStyles.js";
import CustomTable from "../components/CustomTable.js";
import CustomTableExtension from "../components/CustomTableExtension";
import { useEffect, useReducer, useState } from "react";
import { Box, Button } from "@material-ui/core";
import petInfoReducer from "../reducers/petInfoReducer.js";
import { useHistory } from "react-router-dom";
import CustomSnackBar from "../components/CustomSnackBar";
import instance from "../helpers/axiosConfig";
import { useCookies } from "react-cookie";
import _ from "lodash";

function PetInfo() {
  const history = useHistory();
  const [buttonState, dispatch] = useReducer(petInfoReducer, {
    vaccineButton: {
      status: false,
      name: "Ver mais",
    },
    vermifugeButton: {
      status: false,
      name: "Ver mais",
    },
    ownerButton: {
      status: false,
      name: "Ver mais",
    },
  });
  const [snackOpen, setSnackOpen] = useState({ state: false, type: "error" });
  const [image, setImage] = useState(undefined);
  const [cookies] = useCookies([]);

  useEffect(() => {
    setSnackOpen({ state: true, type: "info" });
    if (history.location.state.image !== undefined) {
      let base64String = btoa(
        String.fromCharCode(
          ..._.slice(
            new Uint8Array(history.location.state.image.data.data),
            0,
            65536
          )
        )
      );
      setImage(`data:image/jpeg;base64,${base64String}`);
    }
  }, []);

  function handleButtonClick(e) {
    switch (e.currentTarget.value) {
      case "Data das vacinações":
        dispatch({ type: "toggleVaccineButton" });
        break;
      case "Data das vermifugações":
        dispatch({ type: "toggleVermifugeButton" });
        break;
      case "Tutor":
        dispatch({ type: "toggleOwnerButton" });
        break;
      default:
        console.log("Other button was clicked");
    }
  }

  function handleEditClick() {
    history.push({
      pathname: "/pet-add",
      state: {
        microchipNumber: history.location.state.microchipNumber,
        image: [],
        radio: "male",
        dates: {},
        date: {},
        height: "",
        textField: {},
      },
      from: "/pet-info",
    });
  }

  function handleDeleteClick() {
    instance
      .delete(`/pets/${history.location.state.microchipNumber}`)
      .then((response) => {
        console.log(response);
        history.goBack();
      })
      .catch((err) => {
        setSnackOpen({ state: true, type: "error" });
        console.log(err);
      });
  }

  const classes = petInfoStyles();

  return (
    <div>
      <CustomSnackBar
        state={snackOpen.state}
        type={snackOpen.type}
        setState={setSnackOpen}
      />
      <Grid justify="center" container direction="row">
        {history.location.state.image !== undefined ? (
          <Grid item>
            <img className={classes.img} src={image} alt="dog" />
          </Grid>
        ) : null}

        <Grid justify="center" item xs container>
          <Grid item>
            <CustomTable
              petData={history.location.state}
              buttonState={buttonState}
              onClick={handleButtonClick}
            />
          </Grid>
          <Grid
            component={Box}
            item
            display={
              buttonState.vaccineButton.status ||
              buttonState.vermifugeButton.status ||
              buttonState.ownerButton.status
                ? "block"
                : "none"
            }
          >
            <CustomTableExtension
              petData={history.location.state}
              buttonState={buttonState}
            />
          </Grid>
        </Grid>
      </Grid>
      {cookies["user-type"] !== "0" ? (
        <Grid className={classes.actionButtonsContainer} m={5} container>
          <Grid className={classes.editButtonContainer} item xs={12} md={6}>
            <Button
              onClick={handleEditClick}
              color="primary"
              variant="contained"
            >
              Editar
            </Button>
          </Grid>
          <Grid className={classes.deleteButtonContainer} item xs={12} md={6}>
            <Button
              className={classes.deleteButton}
              onClick={handleDeleteClick}
              variant="contained"
            >
              Deletar
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
}

export default PetInfo;
