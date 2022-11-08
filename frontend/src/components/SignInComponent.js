import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const titleStyle = {
    fontSize: 'h4.fontSize',
    fontWeight: 'medium',
    lineHeight: '44px',
    gridArea: 'main',
}

const contentStyle = {
    fontSize: 'h6.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    color: '#5F5F5F',
}

const textFieldStyle = {
    background: '#FFFFFF',
    borderRadius: '8px',
    width: '488px',
    height: '52px',
}
const btnStyle1 = {
    background: 'rgba(241, 195, 195, 0.6)',
    borderRadius: '1px',
    width: '488px',
    height: '52px',
}
const btnStyle2 = {
    background: 'rgba(207, 117, 117, 0.71)',
    borderRadius: '1px',
    width: '488px',
    height: '52px',
}
const btnText = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h6.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
    lineHeight: '34px',
}


class SignInComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.style.backgroundColor = ' #E2E3EA'
    }
    render() {
        return (
            <Box sx={{ height: '100%', width: '100%' }} ml={10}>


                <Stack spacing={3}>
                    <Typography component="div" sx={titleStyle} mt={18}>
                        Login To Your Account
                    </Typography>
                    <Typography component="div" sx={contentStyle} >
                        USERNAME
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <TextField Required id="TFuserName" label="name" variant="outlined" sx={textFieldStyle} />
                    <Typography component="div" sx={contentStyle}>
                        PASSWORD
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <TextField Required id="TFpassword" label="password" variant="outlined" sx={textFieldStyle} />
                    <Button variant="contained" sx={btnStyle1} mt={5}>
                        <Typography component="div" sx={btnText} mt={1}>
                            PASSWORD LOGIN
                        </Typography>
                    </Button>
                    <Stack spacing={.2} direction="row">
                        <Box sx={{ flexGrow:.335 }}> </Box>
                        <Typography component="div" sx={contentStyle} >
                            OR
                        </Typography>
                    </Stack>
                    <Button variant="contained" sx={btnStyle2}>
                        <Typography component="div" sx={btnText} mt={1}>
                            FACE ID LOGIN
                        </Typography>
                    </Button>
                </Stack>


            </Box>
        );
    }
}

export default SignInComponent;