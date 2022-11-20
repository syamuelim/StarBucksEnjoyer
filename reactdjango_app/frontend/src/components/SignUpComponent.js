import React, { Component, useState, useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


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


function SignUpComponent() {
    const navigate = useNavigate()
    const email = useRef('')
    const name = useRef('')
    const addFace = () => {
        let modelPath = ''
        fetch("http://127.0.0.1:8000/backend/FaceRecognition/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('model trained')
                },
                (error) => {
                    console.log(error)
                }
            )
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.current.value, email: email.current.value })
        };
        fetch('http://127.0.0.1:8000/backend/student/', options)
            .then(res => res.json())
            .then(
                (result) => {
                    navigate('/')
                },
                (error) => {
                    console.log(error)
                }
            );
    }


    return (
        <Box sx={{ height: '100%', width: '100%' }} ml={10}>


            <Stack spacing={3}>
                <Typography component="div" sx={titleStyle} mt={18}>
                    Create an Account
                </Typography>
                <Typography component="div" sx={contentStyle} >
                    USERNAME
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField inputRef={name} Required id="TFuserName" label="name" variant="outlined" sx={textFieldStyle} />
                <Typography component="div" sx={contentStyle}>
                    EMAIL
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField inputRef={email} Required id="TFemail" label="email" variant="outlined" sx={textFieldStyle} />

            </Stack>
            <Stack spacing={2}>
                <Box></Box>
                <Button variant="contained" sx={btnStyle1} mt={5} onClick={
                    addFace
                } >
                    <Typography component="div" sx={btnText} mt={1}>
                        ADD YOUR FACE ID
                    </Typography>
                </Button>


            </Stack>



        </Box>
    );

}

export default SignUpComponent;