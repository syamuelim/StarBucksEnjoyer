import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Action from './pages/Action.js';
import Home from './pages/Home.js';
import SignIn from './pages/SignIn.js';
import SignUP from './pages/SignUp.js';
import FaceId from './pages/FaceId.js';
import FaceIdSignUp from './components/FaceIdSignUp';
import Material from './pages/Material.js';


function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' exact element={<Home/>} />
        <Route path='/action' element={<Action/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/material' element={<Material/>}/>
        <Route path='/faceid' element={<FaceId/>}/>
        <Route path='/faceid/signup' element={<FaceIdSignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
