import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableRow } from '@material-ui/core';

const petInfoStyles = makeStyles((theme) => ({
    img: {
        width: '400px',
        height: '400px',
        borderRadius: '8px',
        objectFit: 'cover'
    },
    table: {
        height: '400px',
    },
}));

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

export { StyledTableRow, petInfoStyles };