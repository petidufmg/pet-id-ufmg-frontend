import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Typography
} from '@material-ui/core';
import Pet from '../attributes/pet/Pet.js';
import dogs from '../examples/dogs.js';
import {petInfoStyles, StyledTableRow} from '../styles/hooks/petInfoStyles.js';

function CustomTable(props) {

    const classes = petInfoStyles();
    const dogData = Object.values(dogs);
    const rows = Pet.map((item, index) => (
        <StyledTableRow>
            <TableCell>
                <Typography>
                    {item}:
                </Typography>
            </TableCell>
            <TableCell>
                {item === 'Data das vacinações' || item === 'Data das vermifugações'
                    ? <Button
                            value={item}
                            onClick={props.onClick}
                            variant="contained"
                            disableElevation
                            color="primary">
                            {item === 'Data das vacinações'
                                ? props.buttonState.vaccineButton.name
                                : props.buttonState.vermifugeButton.name}
                        </Button>
                    : <Typography color="primary">{dogData[index]}</Typography>}
            </TableCell>
        </StyledTableRow>
    ));

    return (
        <div>
            <TableContainer className={classes.table} component={Paper}>
                <Table>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default CustomTable;