import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
// import ComingNoti from './components/ComingNoti.js';

import TimeTable from './components/TimeTable.js';

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


function Home()  {

        return (
            <Box sx={{ width: '100%' , backgroundColor: 'rgba(226, 227, 234, 0.27)'}}>
                <Stack spacing={2}>
                    <div></div>
                    <Grid container spacing={2}>
                        <Grid xs={1}></Grid>
                        <Grid xs={11}>
                            <Typography component="div">
                                <Box sx={titleStyle}>Wellcome, Adrian</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={2}>
                        <Grid xs={3}></Grid>
                        <Grid xs={9}>
                        <Typography component="div">
                            <Box sx={subTitleStyle}>You have a class in coming hour!</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={3}></Grid>
                        <Grid xs={9}> */}
                            {/* <ComingNoti></ComingNoti> */}
                            <TimeTable></TimeTable>
                        {/* </Grid>
                    </Grid> */}
                </Stack>
            </Box>
        );
    
}

export default Home;