import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Library from './components/Library';
import Book from "./components/Book";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Library">
          <Library />
        </Route>
        <Route exact path="/Book">
          <Book />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;