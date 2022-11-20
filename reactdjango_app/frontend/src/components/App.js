
import { render } from 'react-dom';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './../../static/css/App.css';
import NavBar from './NavBar.js';
import Home from './../Home.js';
import SignIn from './../SignIn.js';
import SignUP from './../SignUp.js';
import FaceId from './../FaceId.js';
import Action from './../Action.js';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
              <NavBar/>
              <Routes>
                <Route path='/home' exact element={<Home/>} />
                <Route path='/action' element={<Action/>}/>
                <Route path='/signup' element={<SignUP/>}/>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/faceid' element={<FaceId/>}/>
              </Routes>
            </Router>
          );
}
}

const AppDiv = document.getElementById("app")
render(<App />, AppDiv)
