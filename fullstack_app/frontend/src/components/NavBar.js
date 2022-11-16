import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import {
    useNavigate
} from 'react-router-dom';

const colors = require('../assets/color.js');
const btnStyle = {
    width: '64px',
    height: '64px',
    color: 'rgba(0, 0, 0, 0.54)'

};

function NavBar() {
    const navigate = useNavigate();
    return (
           sessionStorage.getItem('user') == null ? (<AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: "#F8C7C7" }}>
                <Toolbar color="#F8C7C7">
                    <Box sx={{ flexGrow: .2 }} />
                    <IconButton aria-label="Home" onClick={() => {
                            navigate('/home')
                        }} >
                        <HomeIcon sx={btnStyle} />
                    </IconButton>
                    <Box sx={{ flexGrow: .3 }} />
                    <IconButton onClick={() => {
                            navigate('/action')
                        }} >
                        <HistoryIcon sx={btnStyle} />
                    </IconButton>
                    <Box sx={{ flexGrow: .2 }} />
                    <IconButton onClick={() => {
                            navigate('/')
                        }} >
                        <ExitToAppIcon sx={btnStyle} />
                    </IconButton>
                </Toolbar>
            </AppBar> ) : null
    );

}

export default NavBar;
