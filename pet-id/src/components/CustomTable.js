import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Pet from "../attributes/pet/Pet.js";
import dogs from "../examples/dogs.js";
import {
  petInfoStyles,
  StyledTableRow,
} from "../styles/hooks/petInfoStyles.js";

function CustomTable(props) {
  function switchComponents(item, index) {
    switch (item) {
      case "Data das vacinações":
      case "Data das vermifugações":
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
        return (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            to="/pet-locale"
            component={Link}
          >
            Ver no mapa
          </Button>
        );
      default:
        return <Typography color="primary">{dogData[index]}</Typography>;
    }
  }

  const classes = petInfoStyles();
  const dogData = Object.values(dogs);
  const rows = Pet.map((item, index) => (
    <StyledTableRow>
      <TableCell>
        <Typography>{item}:</Typography>
      </TableCell>
      <TableCell>{switchComponents(item, index)}</TableCell>
    </StyledTableRow>
  ));
  const onwerRows = (
    <StyledTableRow>
      <TableCell>
        <Typography>Tutor</Typography>
      </TableCell>
      <TableCell>
        <Button
          value="Tutor"
          onClick={props.onClick}
          variant="contained"
          disableElevation
          color="primary"
        >
          {props.buttonState.ownerButton.name}
        </Button>
      </TableCell>
    </StyledTableRow>
  );

  return (
    <div>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableBody>
            {rows}
            {onwerRows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
