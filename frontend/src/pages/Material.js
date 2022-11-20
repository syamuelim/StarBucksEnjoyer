import React, { Component, useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import History from '../components/History.js';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
const titleStyle = {
    fontSize: 'h4.fontSize',
    fontWeight: 'medium',
    lineHeight: '44px',
    gridArea: 'main',
}
const linkStyle = {
    width: '400.6px',
    height: '44.48px',
    fontSize: 'h6.fontSize',
    fontWeight: 'Regular',
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
const histSubTitleStyle = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
    lineHeight: '34px',
}




function Material() {
    const [materialList, setMaterialList] = useState([])
    const [ready, setReady] = useState(false)
    const [type, setType] = useState(sessionStorage.getItem('type'))


    useEffect(() => {
        let course_id = sessionStorage.getItem('course_id')
        const getMaterial = async () => {
            const list = await fetch("http://127.0.0.1:8000/backend/material/" + course_id)
                .then(res => res.json())
                .then(
                    (result) => {
                        for (let i in result) {
                            if (result[i].note_type != type) {
                                result.pop(i)
                            }
                        }
                        setMaterialList(result);
                        setReady(true)
                    }
                )
        }
        getMaterial()


    }, []);


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
                    {ready ?
                        (<Box sx={{ width: '95%', height: '780px', ml: 7 }} >
                            <Typography component="div" sx={titleStyle} ml={8} mt={3}>
                                Marterial
                            </Typography>
                            <Stack spacing={2} >
                                <Box sx={titleBarStyle} mt={2.5}>
                                    <Stack direction="row" mt={2.5}>
                                        <Box sx={{ flexGrow: .2 }} />
                                        <Typography component="div" sx={histSubTitleStyle}>
                                            Title
                                        </Typography>
                                        <Box sx={{ flexGrow: .67 }} />

                                        <Typography component="div" sx={histSubTitleStyle}>
                                            Link
                                        </Typography>

                                    </Stack>
                                </Box>
                                <Box>
                                    {materialList.map((mtl) => 

                                        <Box sx={contentBarStyle}>
                                            <Stack direction="row" mt={3}>
                                                <Box sx={{ flexGrow: .225 }} />
                                                <Typography component="div" sx={contentStyle} mt={3}>
                                                    {mtl.note_title}
                                                </Typography>

                                                <Box sx={{ flexGrow: .55 }} />
                                                <Button component="div" sx={linkStyle} mt={4} href='https://moodle.hku.hk/mod/resource/view.php?id=2665229'>
                                                    click
                                                </Button>
                                            </Stack>
                                        </Box>
                                    
                                    )}
                                </Box>
                            </Stack>
                        </Box>) :
                        null
                    }
                </Grid>
            </Stack>
        </Box>
    );

}

export default Material;