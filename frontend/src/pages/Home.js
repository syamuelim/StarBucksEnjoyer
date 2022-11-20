import React, { Component, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Stack } from '@mui/system';
import ComingNoti from '../components/ComingNoti.js';
import TimeTable from '../components/TimeTable.js';
import Button from '@mui/material/Button';
import InfoBar from '../components/InfoBar.js'
import Toolbar from '@mui/material/Toolbar';

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


function Home() {
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    const [ready, setReady] = useState(false)
    const [haveClass, setHaveClass] = useState(false)
    const [upComingClass, setUpComingClass] = useState(null)
    const [upComingCourse, setCompingCourse] = useState(null)
    const [courseList, setCourseList] = useState([])


    let classList = []
    let enrollment = []
    //let upComingClass = []
    // let upComingCourse = []
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
                                            console.log('eroll', enrollment)
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

                                                                    console.log('class list', classList)
                                                                    let currentTime = new Date().getTime() + 28800000;

                                                                    for (let i in enrollment) {
                                                                        for (let j in classList) {
                                                                            if (classList[j].course_id == enrollment[i].course_id) {
                                                                                console.log(classList[j].date)
                                                                                let classTime = Date.parse(classList[j].date + 'T' + classList[j].start_time + 'Z')
                                                                                console.log(classTime, currentTime, classTime - currentTime)
                                                                                if (classTime - currentTime < 3600000 && classTime - currentTime > 0) {


                                                                                    setUpComingClass(classList[j])
                                                                                    fetch("http://127.0.0.1:8000/backend/course/" + classList[j].course_id)
                                                                                        .then(res => res.json())
                                                                                        .then((course) => {
                                                                                            const ucCourse = course;
                                                                                            setCompingCourse(course)
                                                                                            console.log('course', upComingCourse, course)
                                                                                            setHaveClass(true)
                                                                                            setReady(true)
                                                                                        }
                                                                                        )

                                                                                    console.log(upComingCourse)
                                                                                    break
                                                                                }
                                                                                else {
                                                                                    otherClass.push(classList[j])
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    console.log(upComingCourse, upComingClass, otherClass)
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
                                            console.log('list', courseList)


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
        console.log(enrollment, courseList, classList)

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
                                            <Button variant="text" sx={infoBtnStyle}>Lecture</Button>
                                            <Box sx={{ flexGrow: .2 }} />
                                            <Button variant="text" sx={infoBtnStyle}>Tutorial</Button>
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
                            }}>
                                <TimeTable ></TimeTable>
                                <Button onClick={() => console.log(classList)} ></Button>
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