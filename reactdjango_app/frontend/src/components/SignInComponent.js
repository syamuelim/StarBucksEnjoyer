import React, { Component, useState, useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import FaceIDPic from './../../static/images/FaceID.png';
import { useNavigate } from 'react-router-dom'
import Webcam from "react-webcam";


const boxStyle = {
    background: 'rgba(255, 255, 255, 0.84)',
    border: '12.8125px solid rgba(255, 255, 255, 0.23)',
    boxShadow: '5.97917px 11.9583px 3.41667px rgba(0, 0, 0, 0.25)',
    borderRadius: '44.4167px',
    height: '750px',
    width: '100%',
    top: '10%',
    position: 'relative',
    left: '50%'

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
    fontSize: 'h6.fontSize',
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

const btnStyle = {
    width: '416px',
    height: '49px',
    background: '#CF7575',
    borderRadius: '12.8125px',


}

const btnTextStyle = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
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

function SignInComponent() {

    const navigate = useNavigate()
    const [openWebCam, setOpenWebCam] = useState(false);
    const [photo, setPhoto] = useState(null);
    const videoElement = useRef(null);

    const videoConstraints = {
        width: 226,
        height: 226,
        facingMode: "user"
    }
    const capture = () => {
        // react version of ajax call
        fetch("http://127.0.0.1:8000/backend/FaceRecognition/")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result[0] != '') {
                        sessionStorage.setItem('user', result[0]);
                        navigate('/signup')

                    } else {
                        alert('user not found')
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    const openCam = () => {
        setOpenWebCam(true);
    }


    return (
        <Stack width="100%">
            <Box sx={{ flexGrow: .5 }}></Box>
            {/* <button onClick={runPython}> Click me </button> */}
            <Box sx={boxStyle}>
                <Stack spacing={2}>
                    <Box sx={{ flexGrow: 3 }}></Box>
                    <Typography component="div" sx={subTitleStyle} mt={2}>
                        Login To Your Account
                    </Typography>
                    <Stack direction="row" my={0}>
                        <Box sx={{ flexGrow: .5 }}></Box>
                        {!openWebCam ?
                            (
                                <Box textAlign="center" >
                                    <Box sx={imgStyle} textAlign='center'>
                                        <img src={FaceIDPic} alt="FaceIDPic" />
                                    </Box>
                                </Box>

                            ) :
                            (

                                <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} />

                            )}
                    </Stack>
                    <Box sx={{ flexGrow: .4 }}></Box>
                    <Box textAlign='center' >
                        <Button variant="contained" sx={btnStyle} align="center" >
                            {!openWebCam ?
                                (
                                    <Typography component="div" sx={btnTextStyle} mt={1} onClick={openCam}>
                                        SCAN MY FACE
                                    </Typography>
                                ) :
                                (
                                    <Typography component="div" sx={btnTextStyle} mt={1} onClick={capture}>
                                        SCAN MY FACE
                                    </Typography>
                                )
                            }
                        </Button>
                        <Stack direction="row" my={0}>
                            <Box sx={{ flexGrow: .5 }}>
                            </Box>
                            <Typography component="div" sx={contentSytle} mt={5}>
                                Don't have an account?
                                <Button variant="text" sx={contentSytle} onClick={() => {
                                    navigate('/signup')
                                }} >
                                    Sign UP
                                </Button>
                            </Typography>

                        </Stack>
                    </Box>


                </Stack>

            </Box>
        </Stack>
    );

}

export default SignInComponent;

// old code!
// import React, { Component, useRef } from "react";
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from '@mui/system/Unstable_Grid';
// import { Stack } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, } from 'react-router-dom'


// const titleStyle = {
//     fontSize: 'h4.fontSize',
//     fontWeight: 'medium',
//     lineHeight: '44px',
//     gridArea: 'main',
// }

// const contentStyle = {
//     fontSize: 'h6.fontSize',
//     fontWeight: 'Regular',
//     lineHeight: '44px',
//     color: '#5F5F5F',
// }

// const textFieldStyle = {
//     background: '#FFFFFF',
//     borderRadius: '8px',
//     width: '488px',
//     height: '52px',
// }
// const btnStyle1 = {
//     background: 'rgba(241, 195, 195, 0.6)',
//     borderRadius: '1px',
//     width: '488px',
//     height: '52px',
// }
// const btnStyle2 = {
//     background: 'rgba(207, 117, 117, 0.71)',
//     borderRadius: '1px',
//     width: '488px',
//     height: '52px',
// }
// const btnText = {
//     width: '287.6px',
//     height: '44.48px',
//     fontSize: 'h6.fontSize',
//     fontWeight: 'Bold',
//     lineHeight: '34px',
//     lineHeight: '34px',
// }

// const contentSytle = {
//     fontSize: 'h6.fontSize',
//     fontWeight: 'Regular',
//     lineHeight: '34px',
//     lineHeight: '34px',
// }


// function SignInComponent() {
//     const email = useRef('')
//     const password = useRef('')
//     async function login() {
//         if (email.current.value === '') {
//             alert('please enter a valid email')
//         }

//         fetch("http://127.0.0.1:8000/backend/student/" + email.current.value)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     if (result == '') {
//                         alert('user not found')
//                     } else {
//                         console.log(result[0].student_id)
//                         if (result[0].email == email.current.value && password.current.value == password.current.value) {
//                             alert('login successful')
//                             console.log('success', result.name)
//                             window.sessionStorage.setItem("user", result[0].student_id);
//                             window.sessionStorage.setItem("name", result[0].name);
//                             navigate('/home')
//                         }
//                     }
//                 },
//                 (error) => {
//                     console.log(error)
//                 }
//             )
        
//     }

//     const navigate = useNavigate()
//     return (
//         <Box sx={{ height: '100%', width: '100%' }} ml={10}>

//             <Stack spacing={3}>
//                 <Typography component="div" sx={titleStyle} mt={18}>
//                     Login To Your Account
//                 </Typography>
//                 <Typography component="div" sx={contentStyle} >
//                     EMAIL
//                 </Typography>
//             </Stack>
//             <Stack spacing={2}>
//                 <TextField required inputRef={email} id="TFuserName" label="email" variant="outlined" sx={textFieldStyle} />
//                 <Typography component="div" sx={contentStyle}>
//                     PASSWORD
//                 </Typography>
//             </Stack>
//             <Stack spacing={2}>
//                 <TextField required inputRef={password} id="TFpassword" label="password" variant="outlined" sx={textFieldStyle} />
//                 <Button variant="contained" sx={btnStyle1} onClick={
//                     login
//                 } mt={5}>
//                     <Typography component="div" sx={btnText} mt={1}>
//                         PASSWORD LOGIN
//                     </Typography>
//                 </Button>

//                 <Button variant="contained" sx={btnStyle2}>
//                     <Typography component="div" sx={btnText} onClick={() => {
//                         navigate('/faceid')
//                     }} mt={1}>
//                         FACE ID LOGIN
//                     </Typography>
//                 </Button>
//             </Stack>
//             <Stack direction="row" my={0}>

//                 <Typography component="div" sx={contentSytle} mt={5} onClick={() => {
//                     navigate('/signup')
//                 }} >
//                     Don't have an account?
//                     <Button variant="text" sx={contentSytle} >
//                         Sign UP
//                     </Button>
//                 </Typography>
//             </Stack>



//         </Box>
//     );

// }

// export default SignInComponent;