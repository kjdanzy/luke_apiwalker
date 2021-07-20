import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
// import Planets from './components/Planets';
// import People from './components/People';
import { Router } from '@reach/router'
import NavBar from './components/NavBar';
import Details from './components/Details';


function App() {

  return (
    <div className="container">
      <NavBar path="/" />
      <Router>
        <Details path="/:category/:id" />
        {/* <People path="/:people/:id" >People</People>
        <Planets path="/:planets/:id">Planets</Planets> */}
      </Router>
    </div>
  );
}

export default App;
