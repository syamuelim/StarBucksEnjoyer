import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Action from './pages/Action.js';
import Home from './pages/Home.js';
import SignIn from './pages/SignIn.js';
import SignUP from './pages/SignUp.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' exact component={<Home/>} />
        <Route path='/action' component={Action}/>
        <Route path='/signup' component={SignUP}/>
        <Route path='/SignIn' component={SignIn}/>
      </Routes>
    </Router>
  );
}

export default App;
