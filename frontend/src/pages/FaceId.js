import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import { spacing } from '@mui/system';
import FaceIdComponent from '../components/FaceIdComponent.js';
import Verified from '../components/Verified.js';
import Successful from '../components/Successful.js';

const boxStyle = {
    left: '310.06px',
    top: '59.79px',
}

class FaceId extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = '#F1C3C3'
    }
    render() {
        return (
            <Box sx={{ width: '60%', height: "100%" }} align='center' my={5} ml={45}>
                <Box sx={{ width: '60%', height: "55%" }} align="center">
                    {/* <FaceIdComponent></FaceIdComponent> */}
                    {/* <Verified></Verified> */}
                    <Successful></Successful>
                </Box>
            </Box>
        );
    }
}

export default FaceId;