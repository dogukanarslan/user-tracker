import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/employees">Employees</Route>
          <Route path="/create-employee">Create Employee</Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
