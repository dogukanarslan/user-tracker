import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Employees } from './pages/Employees/Employees';
import { CreateEmployee } from './pages/CreateEmployee/CreateEmployee';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './redux/slices/employeesSlice';

const store = configureStore({ reducer: { employees: employeesReducer } });

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/employees" component={Employees} />
            <Route path="/create-employee" component={CreateEmployee} />
            <Route path="/" render={() => <Redirect to="/employees" />} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
