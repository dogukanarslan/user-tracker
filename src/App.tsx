import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Users } from './pages/Users/Users';
import { CreateUser } from './pages/CreateUser/CreateUser';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './redux/slices/usersSlice';

const store = configureStore({ reducer: { users: usersReducer } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/create-user" component={CreateUser} />
            <Route path="/" render={() => <Redirect to="/users" />} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
