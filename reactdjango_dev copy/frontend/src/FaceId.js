import React, { Component } from "react";
import Box from '@mui/material/Box';
import FaceIdComponent from './components/FaceIdComponent.js';

const boxStyle = {
    left: '310.06px',
    top: '59.79px',
}

export default class FaceId extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.style.backgroundColor = '#F1C3C3'
    }
    render() {
        return (
            <Box sx={{ width: '60%', height: "100%" }} align='center' my={5} ml={45}>
                <Box sx={{ width: '60%', height: "55%" }} align="center">
                    <FaceIdComponent></FaceIdComponent>
                    {/* <Verified></Verified> */}
                    {/* <Successful></Successful> */}
                </Box>
            </Box>
        );
    }
}