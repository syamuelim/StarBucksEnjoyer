import React, { Component, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
// import ComingNoti from '../components/ComingNoti.js';
// import TimeTable from '../components/TimeTable.js';
import Button from '@mui/material/Button';
// import InfoBar from '../components/InfoBar.js'
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const HomeTitleStyle = {
    fontSize: 'h4.fontSize',
    fontWeight: 'medium',
    lineHeight: '44px',
    gridArea: 'main',
}
const HomeSubTitleStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    paddingRight: '20px',
}
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
const infoBtnStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    color: '#106BC5',
    top: '60px'

};

const TtitleStyle = {
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '44px',
    left: '95px',
    top: '171px',
}

const TsubTitleStyle = {
    width: '287.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Bold',
    lineHeight: '34px',
    lineHeight: '34px',
}

const TcontentStyle = {
    width: '400.6px',
    height: '44.48px',
    fontSize: 'h5.fontSize',
    fontWeight: 'Regular',
    lineHeight: '34px',
    lineHeight: '34px',
}

const TtitleBarStyle = {
    width: "1268x",
    height: "71px",
    left: '20%',
    top: '234px',
    background: 'rgba(255, 167, 38, 0.35)',
    borderRadius: '28px'
}

const TcontentBarStyle = {
    width: "1268x",
    height: "87px",
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '28px',
}


function Home() {
    const navigate = useNavigate()
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    const [ready, setReady] = useState(false)
    const [haveClass, setHaveClass] = useState(false)
    const [upComingClass, setUpComingClass] = useState(null)
    const [upComingCourse, setUpComingCourse] = useState(null)
    const [courseList, setCourseList] = useState([])
    const [scheduledClass, setScheduledClass] = useState([])

    let classList = []
    let enrollment = []
    let otherClass = []


    useEffect(() => {
        setName(window.sessionStorage.getItem('user'))
        setId(window.sessionStorage.getItem('id'));

        const getCourse = async () => {
            const list = await fetch("http://127.0.0.1:8000/backend/enrollment/")
                .then(res => res.json())
                .then(
                    (result) => {
                        for (let i in result) {
                            if (result[i].student_id == window.sessionStorage.getItem('id')) {
                                fetch("http://127.0.0.1:8000/backend/enrollment/" + result[i].student_id)
                                    .then(res => res.json())
                                    .then(
                                        (enroll) => {
                                            enrollment = enroll

                                            fetch("http://127.0.0.1:8000/backend/course/")
                                                .then(res => res.json())
                                                .then(
                                                    (course) => {

                                                        setCourseList(course)
                                                        fetch("http://127.0.0.1:8000/backend/class/")
                                                            .then(res => res.json())
                                                            .then(
                                                                (course) => {
                                                                    classList = course
                                                                    let currentTime = new Date().getTime() + 28800000;

                                                                    for (let i in enrollment) {
                                                                        for (let j in classList) {
                                                                            if (classList[j].course_id == enrollment[i].course_id) {
                                                                                let classTime = Date.parse(classList[j].date + 'T' + classList[j].start_time + 'Z')
                                                                                if (classTime - currentTime < 3600000 && classTime - currentTime > 0) {


                                                                                    setUpComingClass(classList[j])
                                                                                    fetch("http://127.0.0.1:8000/backend/course/" + classList[j].course_id)
                                                                                        .then(res => res.json())
                                                                                        .then((course) => {

                                                                                            setUpComingCourse(course)
                                                                                            setHaveClass(true)
                                                                                            setReady(true)
                                                                                        }
                                                                                        )
                                                                                    break
                                                                                }
                                                                                else {
                                                                                    otherClass.push(classList[j])
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    setScheduledClass(course)
                                                                    setReady(true)
                                                                },
                                                                (error) => {
                                                                    console.log(error)
                                                                }
                                                            )
                                                    },
                                                    (error) => {
                                                        console.log(error)
                                                    }
                                                )
                                        },
                                        (error) => {
                                            console.log(error)
                                        }
                                    )
                            }
                        }
                    },
                    (error) => {
                        console.log(error)
                    },

                )
        }
        getCourse()

    }, []);

    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(226, 227, 234, 0.27)' }}>
            {ready == true ? (

                <Stack spacing={2}>
                    <div></div>
                    <Grid container spacing={2}>
                        <Grid xs={1}></Grid>
                        <Grid xs={11}>
                            <Typography component="div">
                                <Box sx={HomeTitleStyle}>Wellcome, {name}</Box>

                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>

                    </Grid>
                    {haveClass == true ? (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography component="div">
                                <Box sx={HomeSubTitleStyle}>You have a class in coming hour!</Box>
                            </Typography>
                            <Box sx={boundStyle}>
                                <Stack spacing={2}>
                                    <Box sx={cardStyle1}>
                                        <Box sx={cardStyle2}>
                                            <Stack spacing={0.2}>
                                                <Box sx={{ mt: '15px' }}></Box>
                                                <Typography component="div" align='center' sx={titleStyle}>
                                                    {upComingCourse.course_code}
                                                </Typography>
                                                <Typography component="div" align='center' sx={titleStyle}>
                                                    {upComingCourse.course_name}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                        <Grid container spacing={2}>
                                            <Grid xs={2}>
                                                <Typography component="div" align='center' sx={textStyle1}>
                                                    {upComingCourse.lecturer}
                                                </Typography>
                                            </Grid>
                                            <Grid xs={6}></Grid>
                                            <Grid xs={4}>
                                                <Typography component="div" align='right' sx={textStyle1}>
                                                    {upComingClass.start_time}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid sx={{ ml: '90px' }}>
                                                <Typography component="div" align='center' sx={contentStyle}>
                                                    {upComingClass.message}
                                                </Typography>
                                            </Grid>
                                            <Grid >
                                                <Typography component="div" align='right' sx={textStyle1}>
                                                    {upComingClass.classroom}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography component="div" sx={contentStyle2} align="left">
                                            {upComingCourse.information}
                                        </Typography>
                                        <Toolbar color="#F8C7C7">
                                            <Box sx={{ flexGrow: .25 }} />
                                            <Button variant="text" sx={infoBtnStyle} href={upComingClass.zoom_link}>Zoom </Button>
                                            <Box sx={{ flexGrow: .3 }} />
                                            <Button variant="text" sx={infoBtnStyle} onClick={() => {
                                                sessionStorage.setItem('course_id', upComingClass.course_id);
                                                sessionStorage.setItem('type', 'lecture');
                                                navigate('/material')
                                            }}>Lecture</Button>
                                            <Box sx={{ flexGrow: .2 }} />
                                            <Button variant="text" sx={infoBtnStyle} onClick={() => {
                                                sessionStorage.setItem('course_id', upComingClass.course_id);
                                                sessionStorage.setItem('type', 'tutorial');
                                                navigate('/material')
                                            }}>Tutorial</Button>
                                        </Toolbar>

                                    </Box>

                                </Stack>
                            </Box>

                        </Box>
                    ) : (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} bgcolor="rgba(226, 227, 234, 0.27)">

                            <Stack spacing={2}>
                                <Box sx={TtitleBarStyle}>
                                    <Stack direction="row" mt={2.5}>
                                        <Box sx={{ flexGrow: .2 }} />
                                        <Typography component="div" sx={TsubTitleStyle}>
                                            Course
                                        </Typography>
                                        <Box sx={{ flexGrow: .18 }} />
                                        <Typography component="div" sx={TsubTitleStyle}>
                                            Date
                                        </Typography>
                                        <Box sx={{ flexGrow: .19 }} />
                                        <Typography component="div" sx={TsubTitleStyle}>
                                            Time
                                        </Typography>
                                        <Box sx={{ flexGrow: .18 }} />
                                        <Typography component="div" sx={TsubTitleStyle}>
                                            Classroom
                                        </Typography>
                                    </Stack>
                                    <Box sx={TcontentBarStyle} bgcolor="rgba(226, 227, 234, 0.27)"   >
                                        {scheduledClass.map((sclass) =>
                                            <Stack direction="row" mt={3}>
                                                <Box sx={{ flexGrow: .2 }} />
                                                <Typography component="div" mt={3} ml={2} sx={TcontentStyle}>
                                                    COMPXXXX YYYY
                                                </Typography>
                                                <Box sx={{ flexGrow: .5 }} />
                                                <Typography component="div" mt={3} sx={TcontentStyle}>
                                                    {sclass.date}
                                                </Typography>
                                                <Box sx={{ flexGrow: .1 }} />
                                                <Typography component="div" mt={3} sx={TcontentStyle}>
                                                    {sclass.start_time}
                                                </Typography>
                                                <Box sx={{ flexGrow: .1 }} />
                                                <Typography component="div" mt={3} sx={TcontentStyle}>
                                                    {sclass.classroom}
                                                </Typography>
                                            </Stack>
                                        )}
                                    </Box>
                                </Box>
                            </Stack>

                        </Box>


                    )
                    }

                </Stack>

            )
                : null
            }
        </Box>
    );

}

export default Home;