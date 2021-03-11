import React from 'react';
import {Hidden} from '@material-ui/core';
import {useState} from 'react';
import CustomDrawer from '../components/CustomDrawer.js';
import MainContent from '../components/MainContent.js';
import CustomAppBar from '../components/CustomAppBar.js';

function Home() {

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
                    <CustomDrawer isOpen={isOpen} handleDrawer={handleDrawer} variant="permanent"/>
                </Hidden>
                <Hidden smUp implementation="css">
                    <CustomDrawer isOpen={isOpen} handleDrawer={handleDrawer} variant="temporary"/>
                </Hidden>
            </nav>
            <MainContent/>
        </div>
    );
}

export default Home;