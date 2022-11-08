import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import profile from '../assets/profile.png';
import { Grow } from "@mui/material";

const boxStyle = {
    background: 'rgba(146, 136, 136, 0.85)',
    border: '13.0208px solid rgba(255, 255, 255, 0.23)',
    boxShadow: '6.07639px 12.1528px 3.47222px rgba(0, 0, 0, 0.25)',
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
    color: '#FFFFFF'


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
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
    left: '10px'
}


const imgStyle = {
    width: '155.49px',
    height: '147.36px',
    left: '500px',
    top: '307px',
    display: 'flex', justifyContent: 'center'
}

const cardStyle = {
    width: ' 417.87px',
    height: ' 64px',
    background: '#FFFFFF',
    boxShadow: '3px 3px 9px rgba(190, 190, 190, 0.13)',
    borderRadius: '14px',
}

const textStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
    color: ' rgba(0, 0, 0, 0.45)',

}

class Successful extends Component {
    render() {
        return (
            <Box sx={boxStyle}>
                <Stack spacing={2}>
                    <Typography component="div" sx={titleStyle}>
                        WESHARE
                    </Typography>
                    <Box sx={{ flexGrow: 3 }}></Box>
                    <Typography component="div" sx={subTitleStyle} mt={2}>
                        Welcome, Adrain!
                    </Typography>
                    <Stack direction="row" my={0}>
                        <Box sx={{ flexGrow: .5 }}></Box>
                        <Box textAlign="center" >
                            <Box sx={imgStyle} textAlign='center'>
                                <img src={profile} alt="profile" />
                            </Box>
                        </Box>
                    </Stack>
                    <Stack direction="row" my={0}>
                        <Box sx={{ flexGrow: .2 }}></Box>
                        <Typography component="div" sx={contentSytle} mt={10} align="left">
                            Name
                        </Typography>
                    </Stack>
                    <Stack direction="row" my={0}>
                    <Box sx={{ flexGrow: .7 }}></Box>
                    <Box sx={cardStyle}>

                            <Typography component="div" sx={textStyle} mt={2} ml={2} align='left'>
                                Adrian Valentin
                            </Typography>
  
                    </Box>
                    </Stack>
                    <Stack direction="row" my={0}>
                        <Box sx={{ flexGrow: .24 }}></Box>
                        <Typography component="div" sx={contentSytle} mt={3} align="left">
                            Login Activity
                        </Typography>
                    </Stack>
                    <Stack direction="row" my={0}>
                    <Box sx={{ flexGrow: .7 }}></Box>
                    <Box sx={cardStyle}>

                            <Typography component="div" sx={textStyle} mt={2} ml={2} align='left'>
                                11 September 01:36
                            </Typography>
  
                    </Box>
                    </Stack>

                </Stack>
            </Box>
        );
    }
}

export default Successful;