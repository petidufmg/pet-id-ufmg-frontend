import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {AppBar, IconButton, Toolbar, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
        padding: theme.spacing(3),
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

function Home() {

    const classes = useStyles();
    const theme = useTheme();

    const [isOpen,
        setOpen] = useState(false);

    function handleIconButton() {
        setOpen(!isOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {['Home', 'Procurar'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            {text === 'Home'
                                ? <HomeIcon/>
                                : <SearchIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Configurações'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className='home-div'>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <IconButton
                        onClick={handleIconButton}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Pet ID
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav aria-label="menu links">
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawer
                    }}
                        variant="permanent"
                        open={isOpen}
                        onClose={handleIconButton}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smUp implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawer
                    }}
                        ModalProps={{
                        keepMounted: true
                    }}
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        variant="temporary"
                        open={isOpen}
                        onClose={handleIconButton}>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.mainContent}>
                <div className={classes.toolbar}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra dolor
                        et sem euismod pretium. Pellentesque sit amet mollis nibh. Morbi nec varius
                        risus. Proin sit amet odio elit. In urna lorem, condimentum nec fringilla id,
                        maximus vel ligula. Aliquam odio justo, bibendum eu nisi eu, hendrerit interdum
                        augue. In sit amet velit velit. Nam nisi urna, tempus non facilisis a, mollis
                        eget felis.
                    </Typography>
                    <Typography paragraph>
                        Curabitur placerat risus elit, vitae ultrices enim cursus id. Suspendisse vitae
                        felis est. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Maecenas eu tempor erat. In maximus libero facilisis
                        lacus aliquam, a sodales urna scelerisque. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus. Sed vitae placerat est.
                    </Typography>
                </div>
            </main>
        </div>
    );
}

export default Home;