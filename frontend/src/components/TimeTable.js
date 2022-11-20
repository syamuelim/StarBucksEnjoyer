// import React, { Component } from "react";
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from '@mui/system/Unstable_Grid';
// import { Stack } from '@mui/system';

// const TtitleStyle = {
//     fontSize: 'h5.fontSize',
//     fontWeight: 'Regular',
//     lineHeight: '44px',
//     left: '95px',
//     top: '171px',
// }

// const TsubTitleStyle = {
//     width: '287.6px',
//     height: '44.48px',
//     fontSize: 'h5.fontSize',
//     fontWeight: 'Bold',
//     lineHeight: '34px',
//     lineHeight: '34px',
// }

// const TcontentStyle = {
//     width: '400.6px',
//     height: '44.48px',
//     fontSize: 'h5.fontSize',
//     fontWeight: 'Regular',
//     lineHeight: '34px',
//     lineHeight: '34px',
// }

// const TtitleBarStyle = {
//     width: "1268x",
//     height: "71px",
//     left: '84px',
//     top: '234px',
//     background: 'rgba(255, 167, 38, 0.35)',
//     borderRadius: '28px'
// }

// const TcontentBarStyle = {
//     width: "1268x",
//     height: "87px",
//     background: '#FFFFFF',
//     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//     borderRadius: '28px',
// }

// class TimeTable extends Component {
//     render() {
//         return (
//             <div>
//                 <Typography component="div" sx={titleStyle}>
//                     Your personal timetable
//                 </Typography>
//                 <Stack spacing={2}>
//                     <Box sx={titleBarStyle}>
//                         <Stack direction="row" mt={2.5}>
//                             <Box sx={{ flexGrow: .2 }} />
//                             <Typography component="div" sx={subTitleStyle}>
//                                 Course
//                             </Typography>
//                             <Box sx={{ flexGrow: .235 }} />
//                             <Typography component="div" sx={subTitleStyle}>
//                                 Date
//                             </Typography>
//                             <Box sx={{ flexGrow: .19 }} />
//                             <Typography component="div" sx={subTitleStyle}>
//                                 Time
//                             </Typography>
//                             <Box sx={{ flexGrow: .18 }} />
//                             <Typography component="div" sx={subTitleStyle}>
//                                 Classroom
//                             </Typography>
//                         </Stack>
//                     </Box>

//                     <Box sx={contentBarStyle}>
//                         <Stack direction="row" mt={3}>
//                             <Box sx={{ flexGrow: .2 }} />
//                             <Typography component="div" sx={contentStyle}>
//                             COMPXXXX YYYY
//                             </Typography>
//                             <Box sx={{ flexGrow: .5 }} />
//                             <Typography component="div" sx={contentStyle}>
//                                 7 Nov (Mon)
//                             </Typography>
//                             <Box sx={{ flexGrow: .1 }} />
//                             <Typography component="div" sx={contentStyle}>
//                                 12:30 - 14:20
//                             </Typography>
//                             <Box sx={{ flexGrow: .1 }} />
//                             <Typography component="div" sx={contentStyle}>
//                                 KKL101
//                             </Typography>
//                         </Stack>
//                     </Box>
                    
//                 </Stack>
//             </div>
//         );
//     }

// }

// export default TimeTable