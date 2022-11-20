import React, { Component, useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, } from 'react-router-dom'





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

const contentSytle = {
    fontSize: 'h6.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
}


function SignInComponent() {
    const email = useRef('')
    const password = useRef('')
    async function login() {
        if (email.current.value === '') {
            alert('please enter a valid email')
        }

        fetch("http://127.0.0.1:8000/backend/student/" + email.current.value)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result == '') {
                        alert('user not found')
                    } else {
                        console.log(result[0].student_id)
                        if (result[0].email == email.current.value && password.current.value == password.current.value) {
                            alert('login successful')
                            console.log('success', result.name)
                            window.sessionStorage.setItem("user", result[0].student_id);
                            navigate('/home')
                        }
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
        
    }

    const navigate = useNavigate()
    return (
        <Box sx={{ height: '100%', width: '100%' }} ml={10}>

            <Stack spacing={3}>
                <Typography component="div" sx={titleStyle} mt={18}>
                    Login To Your Account
                </Typography>
                <Typography component="div" sx={contentStyle} >
                    EMAIL
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField required inputRef={email} id="TFuserName" label="email" variant="outlined" sx={textFieldStyle} />
                <Typography component="div" sx={contentStyle}>
                    PASSWORD
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <TextField required inputRef={password} id="TFpassword" label="password" variant="outlined" sx={textFieldStyle} />
                <Button variant="contained" sx={btnStyle1} onClick={
                    login
                } mt={5}>
                    <Typography component="div" sx={btnText} mt={1}>
                        PASSWORD LOGIN
                    </Typography>
                </Button>

                <Button variant="contained" sx={btnStyle2}>
                    <Typography component="div" sx={btnText} onClick={() => {
                        navigate('/faceid')
                    }} mt={1}>
                        FACE ID LOGIN
                    </Typography>
                </Button>
            </Stack>
            <Stack direction="row" my={0}>

                <Typography component="div" sx={contentSytle} mt={5} onClick={() => {
                    navigate('/signup')
                }} >
                    Don't have an account?
                    <Button variant="text" sx={contentSytle} >
                        Sign UP
                    </Button>
                </Typography>
            </Stack>



        </Box>
    );

}

export default SignInComponent;