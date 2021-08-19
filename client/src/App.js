import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavMenu from './components/NavMenu'

import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <NavMenu/>

      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <h1>Register</h1>
          </Route>
          <Route path="/">
            <h1>Homee</h1>
          </Route>
        </Switch>


    </div>
  );
}

export default App;
