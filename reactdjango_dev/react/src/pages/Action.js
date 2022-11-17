import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import History from '../components/History.js';
import { spacing } from '@mui/system';
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


class Action extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.style.backgroundColor = 'rgba(226, 227, 234, 0.27)'
    }
    render() {
        return (
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <div></div>
                    <Grid container spacing={2}>
                        <Grid xs={1}></Grid>
                        <Grid xs={11}>
                            <Typography component="div">
                                <Box sx={titleStyle}>Wellcome, Adrian</Box>
                            </Typography>
                        </Grid>
                        <Box sx={{ width: '95%', height: '780px' ,ml:7}} >
                        <History pl={5}></History>
                    </Box>
                    </Grid>



                </Stack>
            </Box>
        );
    }
}

export default Action;