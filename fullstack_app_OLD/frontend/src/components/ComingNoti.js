import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import Divider from '@mui/material/Divider';
import InfoBar from './InfoBar.js';

const boundStyle = {
    width: '1062px',
    height: '633px'
}

const cardStyle1 = {
    width: '971.4px',
    height: '525.23px',
    left: '242.17px',
    top: '280.77px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '28px'
}

const cardStyle2 = {
    width: '971.35px',
    height: '100.6px',
    left: '242.22px',
    top: '280.77px',

    background: 'rgba(237, 108, 2, 0.37)',
    borderRadius: '28px',
}

const titleStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
}

const textStyle1 = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
    lineHeight: '34px',
    color: '#ED6C02'
}

const contentStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
}

const contentStyle2 = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    ml: '100px',
    mr: '50px'
}

class ComingNoti extends Component {
    render() {
        return (
            <Box sx={boundStyle}>
                <Stack spacing={2}>
                    <Box sx={cardStyle1}>
                        <Box sx={cardStyle2}>
                            <Stack spacing={0.2}>
                                <Box sx={{ mt: '15px' }}></Box>
                                <Typography component="div" align='center' sx={titleStyle}>
                                    LOVE1001
                                </Typography>
                                <Typography component="div" align='center' sx={titleStyle}>
                                    Introductory Dating
                                </Typography>
                            </Stack>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid xs={2}>
                                <Typography component="div" align='center' sx={textStyle1}>
                                    LUO PING
                                </Typography>
                            </Grid>
                            <Grid xs={6}></Grid>
                            <Grid xs={4}>
                                <Typography component="div" align='right' sx={textStyle1}>
                                    09:30 - 21:30
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid sx={{ ml: '90px' }}>
                                <Typography component="div" align='center' sx={contentStyle}>
                                    Message : Guests invited today for mock practice!
                                </Typography>
                            </Grid>
                            <Grid >
                                <Typography component="div" align='right' sx={textStyle1}>
                                    MWT9
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography component="div"  sx={contentStyle2} align="left">
                            An intensive full-year course which covers :
                            Introduction to elementary theories in dating strategies.
                            Contrast between classical and modern style approaches.
                            Live mock dating for real-world preparation.
                        </Typography>
                        <InfoBar/>
                    </Box>

                </Stack>
            </Box>
        );
    }

}

export default ComingNoti;