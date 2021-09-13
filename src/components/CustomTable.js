import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
} from "@material-ui/core";
import PetEnum from "../attributes/pet/Pet.js";
import dogs from "../examples/dogs.js";
import {
  petInfoStyles,
  StyledTableRow,
} from "../styles/hooks/petInfoStyles.js";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function CustomTable(props) {
  let history = useHistory();
  const [cookies] = useCookies([]);

  function goToPetLocale() {
    history.push({
      pathname: "/pet-locale",
      state: { coordinates: props.petData["captureLocalization"].coordinates },
      from: "/pet-info",
    });
  }

  function switchComponents(key, item, index) {
    switch (item) {
      case "Data das vacinações":
      case "Data das vermifugações":
        if (_.isEmpty(props.petData[key])) {
          return <Typography color="secondary">{"Sem dados"}</Typography>;
        }
        return (
          <Button
            value={item}
            onClick={props.onClick}
            variant="contained"
            disableElevation
            color="primary"
          >
            {item === "Data das vacinações"
              ? props.buttonState.vaccineButton.name
              : props.buttonState.vermifugeButton.name}
          </Button>
        );
      case "Local de captura":
        if (_.isEqual(props.petData[key].coordinates, [0, 0])) {
          return <Typography color="secondary">{"Sem dados"}</Typography>;
        }
        return (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={goToPetLocale}
          >
            Ver no mapa
          </Button>
        );
      default:
        if (_.isUndefined(props.petData[key])) {
          return <Typography color="secondary">{"Sem dados"}</Typography>;
        }
        if (_.includes(item, "Data")) {
          let date = new Date(props.petData[key]);
          return (
            <Typography color="primary">
              {`${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}` || "Sem dados"}
            </Typography>
          );
        }
        return <Typography color="primary">{props.petData[key]}</Typography>;
    }
  }

  const classes = petInfoStyles();
  const dogData = Object.values(dogs);
  const rows = Object.keys(PetEnum).map((key, index) => {
    const [attrLabel] = PetEnum[key];
    return (
      <StyledTableRow>
        <TableCell>
          <Typography>{attrLabel}:</Typography>
        </TableCell>
        <TableCell>{switchComponents(key, attrLabel, index)}</TableCell>
      </StyledTableRow>
    );
  });
  const onwerRows = (
    <StyledTableRow>
      <TableCell>
        <Typography>Tutor</Typography>
      </TableCell>
      <TableCell>
        {_.isUndefined(props.petData["owner"]) ? (
          <Typography color="secondary">{"Sem dados"}</Typography>
        ) : (
          <Button
            value="Tutor"
            onClick={props.onClick}
            variant="contained"
            disableElevation
            color="primary"
          >
            {props.buttonState.ownerButton.name}
          </Button>
        )}
      </TableCell>
    </StyledTableRow>
  );

  return (
    <div>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableBody>
            {rows}
            {cookies["user-type"] > 1 ? onwerRows : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
