import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {AppBar, IconButton, Toolbar, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme }  from '@material-ui/core/styles';
import useStyles from '../styles/hooks/homeStyles.js';
import CustomDrawer from '../components/CustomDrawer.js';

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