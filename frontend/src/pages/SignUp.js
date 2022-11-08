import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import SignUpComponent from '../components/SignUpComponent.js';
import cover from '../assets/cover.png';


const titleStyle = {
    fontSize: 'h4.fontSize',
    fontWeight: 'medium',
    lineHeight: '44px',
    gridArea: 'main',
}
const subTitleStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
}



class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.style.backgroundColor = 'rgba(226, 227, 234, 0.27)'
    }
    render() {
        return (
                <Stack direction="row" sx={{height:'100%'}}>
                    <img src={cover} alt="cover" />
                    <SignUpComponent></SignUpComponent>
                </Stack>
        );
    }
}

export default SignUp;