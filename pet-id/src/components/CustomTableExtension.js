import {Paper, TableBody, TableCell, TableContainer, TableHead} from "@material-ui/core";
import {petInfoStyles, StyledTableRow} from '../styles/hooks/petInfoStyles.js';
import dogs from '../examples/dogs.js';

function CustomTableExtension(props) {

    const classes = petInfoStyles();

    const head = (
        <StyledTableRow>
            {['Nome', 'Data'].map((item) => (
                <TableCell>
                    {item}
                </TableCell>
            ))}
        </StyledTableRow>
    )
    
    let array = [];
    if (props.buttonState.vaccineButton) {
        array = dogs.vaccinationDates;
    } else if (props.buttonState.vemifugeButton) {
        array = dogs.dewormingDates;
    }
    const rows = array.map(([vaccine,date]) => (
            <StyledTableRow>
                <TableCell>
                    {vaccine}
                </TableCell>
                <TableCell>
                    {date}
                </TableCell>
            </StyledTableRow>
        ));

    return (
        <div>
            <TableContainer className={classes.table} component={Paper}>
                <TableHead>
                    {head}
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </TableContainer>
        </div>
    );
}

export default CustomTableExtension;