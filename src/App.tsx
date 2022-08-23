import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Employees } from './pages/Employees/Employees';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/employees" component={Employees} />
          <Route path="/create-employee" component={CreateEmployee} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
