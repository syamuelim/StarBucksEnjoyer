// import './../../static/css/App.css';
import { render } from 'react-dom';
import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate, Switch } from 'react-router-dom';

// import NavBar from './NavBar.js';
// import Action from './Action.js';
// import Home from './Home.js';
// import SignIn from './SignIn.js';
// import SignUP from './SignUp.js';
import FaceId from './../FaceId.js';
import Action from './../Action.js';

// function App() {

//   return (
//     <Router>
//       <NavBar/>
//       <Routes>
//         {/* <Route path='/home' exact element={<Home/>} /> */}
//         {/* <Route path='/action' element={<Action/>}/>
//         <Route path='/signup' element={<SignUP/>}/>
//         <Route path='/' element={<SignIn/>}/> */}
//         <Route path='/faceid' element={<FaceId/>}/>
//       </Routes>
//     </Router>
//   );
// }

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return <FaceId></FaceId>
        return (
            <Router>
              {/* <NavBar/> */}
              <Switch>
              {/* <Routes> */}
                {/* <Route path='/home' exact element={<Home/>} /> */}
                <Route path='/action' component={Action}/>
                {/* <Route path='/signup' element={<SignUP/>}/> */}
                {/* <Route path='/' element={<SignIn/>}/> */}
                {/* <Route path="/"><p> this is the default page </p> </Route> */}
                {/* <Route path='/faceid'><p> this is the faceid page </p> </Route> */}
                <Route path='/faceid' component={FaceId}/>
              
              </Switch>
              {/* </Routes> */}
            </Router>
          );
}
}

const AppDiv = document.getElementById("app")
render(<App />, AppDiv)
