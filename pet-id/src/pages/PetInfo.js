import Grid from "@material-ui/core/Grid";
import dog from "../images/dog.jpg";
import { petInfoStyles } from "../styles/hooks/petInfoStyles.js";
import CustomTable from "../components/CustomTable.js";
import CustomTableExtension from "../components/CustomTableExtension";
import { useReducer } from "react";
import { Box } from "@material-ui/core";
import petInfoReducer from "../reducers/petInfoReducer.js";

function PetInfo() {
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

  const classes = petInfoStyles();

  return (
    <div>
      <Grid justify="center" container direction="row">
        <Grid item>
          <img className={classes.img} src={dog} alt="dog" />
        </Grid>

        <Grid justify="center" item xs container>
          <Grid item>
            <CustomTable
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
            <CustomTableExtension buttonState={buttonState} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PetInfo;
