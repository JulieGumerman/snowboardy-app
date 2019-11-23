import React from 'react';
import { Route } from "react-router-dom"
import './App.scss';

import Login from "./components/Login";
import Register from "./components/Register";
import Mountains from "./components/Mountains";

function App() {
  return (
    <div className="App">
      <h1>So many mountains,</h1>
      <h1>so little time... </h1>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register} />
      <Route path="/mountains" component={Mountains} />
    </div>
  );
}

export default App;
