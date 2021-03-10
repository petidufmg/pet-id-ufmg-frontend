import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {AppBar, IconButton, Toolbar, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme }  from '@material-ui/core/styles';
import useStyles from '../styles/hooks/homeStyles.js';
import CustomDrawer from '../components/CustomDrawer.js';
import MainContent from '../components/MainContent.js';

function Home() {

    const classes = useStyles();
    const theme = useTheme();

    const [isOpen,
        setOpen] = useState(false);

    function handleIconButton() {
        setOpen(!isOpen);
    }

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
                        <CustomDrawer/>
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
                        <CustomDrawer/>
                    </Drawer>
                </Hidden>
            </nav>
            <MainContent/>
        </div>
    );
}

export default Home;