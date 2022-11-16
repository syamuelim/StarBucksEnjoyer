import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';

const titleStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    left: '95px',
    top: '171px',
}

const subTitleStyle = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
    lineHeight: '34px',
}

const contentStyle = {
    width: '400.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
}

const titleBarStyle = {
    width: "1268x",
    height: "71px",
    left: '84px',
    top: '234px',
    background: 'rgba(255, 167, 38, 0.35)',
    borderRadius: '28px'
}

const contentBarStyle = {
    width: "1268x",
    height: "87px",
    background: 'rgba(226, 227, 234, 0.51)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '28px',
}

class History extends Component {
    render() {
        return (
            <div>
                <Typography component="div" sx={titleStyle} ml={15} mt={3}>
                    Latest Actions
                </Typography>
                <Stack spacing={2} >
                    <Box sx={titleBarStyle}  mt={2.5}>
                        <Stack direction="row" mt={2.5}>
                            <Box sx={{ flexGrow: .2 }} />
                            <Typography component="div" sx={subTitleStyle}>
                                Login Time
                            </Typography>
                            <Box sx={{ flexGrow: .67 }} />
                    
                            <Typography component="div" sx={subTitleStyle}>
                                Time stayed online
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={contentBarStyle}>
                        <Stack direction="row" mt={3}>
                            <Box sx={{ flexGrow: .225 }} />
                            <Typography component="div" sx={contentStyle}>
                            23:59 HKT 6 Nov
                            </Typography>

                            <Box sx={{ flexGrow: .8 }} />
                            <Typography component="div" sx={contentStyle}>
                            00:12:42
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={contentBarStyle}>
                        <Stack direction="row" mt={3}>
                            <Box sx={{ flexGrow: .225 }} />
                            <Typography component="div" sx={contentStyle}>
                            23:59 HKT 6 Nov
                            </Typography>

                            <Box sx={{ flexGrow: .8 }} />
                            <Typography component="div" sx={contentStyle}>
                            00:12:42
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={contentBarStyle}>
                        <Stack direction="row" mt={3}>
                            <Box sx={{ flexGrow: .225 }} />
                            <Typography component="div" sx={contentStyle}>
                            23:59 HKT 6 Nov
                            </Typography>

                            <Box sx={{ flexGrow: .8 }} />
                            <Typography component="div" sx={contentStyle}>
                            00:12:42
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={contentBarStyle}>
                        <Stack direction="row" mt={3}>
                            <Box sx={{ flexGrow: .225 }} />
                            <Typography component="div" sx={contentStyle}>
                            23:59 HKT 6 Nov
                            </Typography>

                            <Box sx={{ flexGrow: .8 }} />
                            <Typography component="div" sx={contentStyle}>
                            00:12:42
                            </Typography>
                        </Stack>
                    </Box>

                    
                </Stack>
            </div>
        );
    }

}

export default History