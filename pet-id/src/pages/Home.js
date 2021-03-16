import React from 'react';
import {Hidden} from '@material-ui/core';
import {useState} from 'react';
import CustomDrawer from '../components/CustomDrawer.js';
import CustomAppBar from '../components/CustomAppBar.js';
import Search from '../pages/Search.js';
import {useRouteMatch} from 'react-router-dom';
import CustomTypography from '../components/CustomTypography.js';
import homeStyles from '../styles/hooks/homeStyles.js';

function Home() {

    const [isOpen,
        setOpen] = useState(false);
    const match = useRouteMatch();

    function handleDrawer() {
        setOpen(!isOpen);
    }

    const classes = homeStyles();

    return (
        <div className='home-div'>
            <CustomAppBar setDrawer={handleDrawer}/>
            <nav aria-label="menu links">
                <Hidden xsDown implementation="css">
                    <CustomDrawer isOpen={isOpen} handleDrawer={handleDrawer} variant="permanent"/>
                </Hidden>
                <Hidden smUp implementation="css">
                    <CustomDrawer isOpen={isOpen} handleDrawer={handleDrawer} variant="temporary"/>
                </Hidden>
            </nav>
            <main className={classes.mainContent}>
                {match.url === '/home'
                    ? <CustomTypography/>
                    : <Search/>}
            </main>
        </div>
    );
}

export default Home;