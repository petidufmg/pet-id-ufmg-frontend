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

function CustomTable() {

    const classes = petInfoStyles();

    const rows = Pet.map((item, index) => (
        <StyledTableRow>
            <TableCell>
                <Typography>
                    {item}:
                </Typography>
            </TableCell>
            <TableCell>
                <Button variant="contained" disableElevation color="primary">
                    {dogs[index]}
                </Button>
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