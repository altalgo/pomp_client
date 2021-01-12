import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ExtLoginPage from './components/ExtLoginPage/ExtLoginPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Forms from './components/FormData/FormData'
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Auth(LoginPage, false)}></Route>
        <Route exact path='/extlogin' component={ExtLoginPage}></Route>
        <Route exact path='/forms' component={Auth(MainPage, true)}></Route>
        <Route exact path='/forms/:id' component={Auth(Forms, true)}></Route>
        <Route
          exact
          path='/register'
          component={Auth(RegisterPage, false)}></Route>
      </Switch>
    </Router>
  );
}

export default App;
