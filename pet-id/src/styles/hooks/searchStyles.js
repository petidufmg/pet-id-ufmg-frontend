import { makeStyles } from '@material-ui/core/styles';

const searchStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(1),
        width: '500px',
        padding: theme.spacing(2),
    },
    searchForm: {
        textAlign: 'center',
        marginLeft: '240px',
        width: '600px'
    },
}));

export default searchStyles;