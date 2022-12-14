import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import SignInComponent from '../components/SignInComponent.js';
import cover from '../assets/cover.png';
import FaceIdComponent from '../components/FaceIdComponent.js'


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
        window.sessionStorage.setItem("user", "");

    }
    render() {
        return (
                <Stack direction="row" sx={{height:'100%'}} spacing={2}>
                    <img src={cover} alt="cover" />
                    {/* <SignInComponent></SignInComponent> */}
                    <FaceIdComponent sx={{paddingTopL: '30',alignItems: 'center'}}></FaceIdComponent>
                </Stack>
        );
    }
}

export default SignUp;