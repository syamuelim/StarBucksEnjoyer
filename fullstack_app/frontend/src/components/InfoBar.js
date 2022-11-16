import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import { Stack } from '@mui/system';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Button from '@mui/material/Button';

const colors = require('../assets/color.js');
const btnStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    color: '#106BC5',
    top: '60px'

};

class InfoBar extends Component {
    render() {
        return (
            <Toolbar color="#F8C7C7">
                    <Box sx={{ flexGrow: .25 }} />
                    <Button variant="text" sx={btnStyle}>Zoom</Button>
                    <Box sx={{ flexGrow: .3 }} />
                    <Button variant="text"  sx={btnStyle}>Lecture</Button>
                    <Box sx={{ flexGrow: .2 }} />
                    <Button variant="text"  sx={btnStyle}>Tutorial</Button>
            </Toolbar>
        );
    }
}

export default InfoBar;
