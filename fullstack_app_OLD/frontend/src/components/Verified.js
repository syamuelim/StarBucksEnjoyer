import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import pass from '../assets/ok.png';
import { Grow } from "@mui/material";

const boxStyle = {
    background: 'rgba(255, 255, 255, 0.84)',
    border: '12.8125px solid rgba(255, 255, 255, 0.23)',
    boxShadow: '5.97917px 11.9583px 3.41667px rgba(0, 0, 0, 0.25)',
    borderRadius: '44.4167px',
    height: '750px',
}

const titleStyle = {
    width: '268px',
    height: '48px',
    fontFamily: 'Roboto',
    fontWeight: '200',
    fontSize: ' 41px',
    lineHeight: '48px',
    letterSpacing: ' 0.25625px',
    textTransform: 'uppercase',
    color: '#000000'


}

const subTitleStyle = {
    fontSize: 'h4.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    color: '#000000',
    top: '20px',
    left: '492.85px',
    top: '220.38px',
}

const contentSytle = {
    fontSize: 'h6.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
}


const imgStyle = {
    width: '225px',
    height: '225px',
    left: '500px',
    top: '307px',
    display: 'flex', justifyContent: 'center'
}

class Verified extends Component {
    render() {
        return (
            <Box sx={boxStyle}>
                <Stack spacing={2}>
                    <Typography component="div" sx={titleStyle}>
                        LEARNSMART
                    </Typography>
                    <Box sx={{ flexGrow: 3 }}></Box>
                    <Typography component="div" sx={subTitleStyle} mt={2}>
                        Welcome, Adrain!
                    </Typography>
                    <Stack direction="row" my={0}>
                        <Box sx={{ flexGrow: .5 }}></Box>
                        <Box textAlign="center" >
                            <Box sx={imgStyle} textAlign='center'>
                                <img src={pass} alt="pass" />
                            </Box>
                        </Box>
                    </Stack>
                    <Typography component="div" sx={contentSytle} mt={18}>
                        -- Face Verified --
                    </Typography>
                    <Typography component="div" sx={contentSytle} mt={25}>
                        Login at 23:59 HKT 5 Nov
                    </Typography>
                    <Typography component="div" sx={contentSytle} mt={25}>
                        Redirecting to Home ...
                    </Typography>

                </Stack>
            </Box>
        );
    }
}

export default Verified;