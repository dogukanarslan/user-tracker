import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/create-user">Create</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/users">Users</Route>
          <Route path="/create-user">Create User</Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
