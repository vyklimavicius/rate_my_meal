import React from 'react';
import HomeScreen from './components/HomeScreen.js';
import UserDashboard from './components/UserDashboard.js';
import SignUp from './components/SignUp.js';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/dashboard">
          <UserDashboard />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route>
          <NotFound />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
