import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import {
  petInfoStyles,
  StyledTableRow,
} from "../styles/hooks/petInfoStyles.js";
import dogs from "../examples/dogs.js";
import OwnerEnum from "../attributes/owner/Owner.js";

function CustomTableExtension(props) {
  const classes = petInfoStyles();

  const {
    vaccineButton: vaccine,
    vermifugeButton: vermifuge,
    ownerButton: owner,
  } = props.buttonState;
  let array = [];
  if (vaccine.status) {
    array = props.petData["vaccinationDates"];
  } else if (vermifuge.status) {
    array = props.petData["dewormingDates"];
  } else {
    array = Object.keys(OwnerEnum);
  }

  const head = (
    <StyledTableRow>
      {["Data"].map((item) => (
        <TableCell>{item}</TableCell>
      ))}
    </StyledTableRow>
  );

  const rows = owner.status
    ? array.map((item) =>
        OwnerEnum[item][0] !== "Telefones de Contato" ? (
          <StyledTableRow>
            <TableCell>{OwnerEnum[item][0]}</TableCell>
            <TableCell>{props.petData.owner[item]}</TableCell>
          </StyledTableRow>
        ) : (
          props.petData.owner["telephones"].map((tel) => (
            <StyledTableRow>
              <TableCell>Tel:</TableCell>
              <TableCell>{tel}</TableCell>
            </StyledTableRow>
          ))
        )
      )
    : array.map((item) => {
        let date = new Date(item);
        return (
          <StyledTableRow>
            <TableCell>{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</TableCell>
          </StyledTableRow>
        );
      });

  return (
    <div>
      <TableContainer className={classes.table} component={Paper}>
        <TableHead>{!owner.status && head}</TableHead>
        <TableBody>{rows}</TableBody>
      </TableContainer>
    </div>
  );
}

export default CustomTableExtension;
