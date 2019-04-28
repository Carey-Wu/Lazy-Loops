import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import FinalGrid from "./components/BeatGrid/FinalGrid"
// import Keyboard from "./components/Keyboard"
// import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
// import Dashboard from './Pages/Dashboard';
// const Dashboard = require("./Dashboard/index.html")

const reload = () => window.location.reload();


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route
            exact path="/dashboard"
            component={Dashboard}
            /> */}
            <Route
            exact path="/"
            component={LandingPage}
            />
            <Route
            path="/Dashboard/dashboard.html"
            onEnter={reload}
            />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
