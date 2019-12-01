import React from 'react';
import { Route } from "react-router-dom"
import './App.scss';

import Login from "./components/Login";
import Register from "./components/Register";
import Mountains from "./components/Mountains";
import { PrivateRoute } from "./components/PrivateRoute";
import MountainDetails from "./components/MountainDetails";

function App() {
  return (
    <div className="App">
      <h1>So many mountains,</h1>
      <h1>so little time... </h1>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/mountains" component={Mountains} />
      <Route path={`/mountains/:id` } component={MountainDetails}/>
    </div>
  );
}

export default App;
