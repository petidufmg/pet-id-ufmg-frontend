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
    array = dogs.vaccinationDates;
  } else if (vermifuge.status) {
    array = dogs.dewormingDates;
  } else {
    array = Object.keys(dogs.ownerData);
  }

  const head = (
    <StyledTableRow>
      {["Nome", "Data"].map((item) => (
        <TableCell>{item}</TableCell>
      ))}
    </StyledTableRow>
  );

  const rows = array.map(([name, date]) => (
    <StyledTableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{date}</TableCell>
    </StyledTableRow>
  ));

  const ownerRows = array.map(item =>
    OwnerEnum[item][0] !== "Telefones de Contato" ? (
      <StyledTableRow>
        <TableCell>{OwnerEnum[item][0]}</TableCell>
        <TableCell>{dogs.ownerData[item]}</TableCell>
      </StyledTableRow>
    ) : (
      dogs.ownerData.telephones.map((tel) => (
        <StyledTableRow>
          <TableCell>Tel:</TableCell>
          <TableCell>{tel}</TableCell>
        </StyledTableRow>
      ))
    )
  );

  return (
    <div>
      <TableContainer className={classes.table} component={Paper}>
        <TableHead>{!owner.status && head}</TableHead>
        <TableBody>{owner.status ? ownerRows : rows}</TableBody>
      </TableContainer>
    </div>
  );
}

export default CustomTableExtension;
