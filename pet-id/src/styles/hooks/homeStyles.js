import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const homeStyles = makeStyles((theme) => ({
    drawer: {
        width: `${drawerWidth}px`
    },
    appBar: {
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    mainContent: {
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            marginLeft: drawerWidth
        },
        padding: theme.spacing(1),
        textAlign: 'left'
    },
    menuButton: {
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            display: 'none'
        },
        marginRight: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
}));

export default homeStyles;