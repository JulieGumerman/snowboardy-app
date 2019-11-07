import React from 'react';
import { Route } from "react-router-dom"
import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";
import Mountains from "./components/Mountains";

function App() {
  return (
    <div className="App">
      <h1>Hey from the App component. </h1>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register} />
      <Route path="/mountains" component={Mountains} />
    </div>
  );
}

export default App;
