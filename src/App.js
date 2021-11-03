import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from "react";

import Collaps from './pages/Collaps'
import Home from './pages/Home'
import Count from './pages/Count'
import DarkLightMood from './pages/DarkLightMood'
// import Mood from './pages/Mood'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <Router className="App">
      <div>
        <Nav />
        <switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/counting">
            <Count />
          </Route>

          <Route path="/collaps">
            <Collaps />
          </Route>

          <Route path="/darkLightMoods">
            <DarkLightMood />
          </Route>

          {/* <Route path="/DarkLightMood" component={DarkLightMood} /> */}
          {/* <Route path="/mood">
          <Mood /> 
          </Route>*/}
        </switch>
      </div>
    </Router>
  );
}

export default App;
