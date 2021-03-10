import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Hidden } from '@material-ui/core';
import { useTheme }  from '@material-ui/core/styles';
import useStyles from '../styles/hooks/homeStyles.js';
import CustomDrawer from '../components/CustomDrawer.js';
import MainContent from '../components/MainContent.js';
import CustomAppBar from '../components/CustomAppBar.js';

function Home() {

    const classes = useStyles();
    const theme = useTheme();

    const [isOpen,
        setOpen] = useState(false);

    function handleDrawer() {
        setOpen(!isOpen);
    }

    return (
        <div className='home-div'>
            <CustomAppBar setDrawer={handleDrawer}/>
            <nav aria-label="menu links">
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawer
                    }}
                        variant="permanent"
                        open={isOpen}
                        onClose={handleDrawer}>
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
                        onClose={handleDrawer}>
                        <CustomDrawer/>
                    </Drawer>
                </Hidden>
            </nav>
            <MainContent/>
        </div>
    );
}

export default Home;