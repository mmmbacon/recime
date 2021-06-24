import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './features/dashboard/Dashboard';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';

const App = () => (
  <Router>
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </Router>
);

export default App;
