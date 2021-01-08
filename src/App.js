import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components//MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage}></Route>
        <Route exact path='/forms' component={MainPage}></Route>
        <Route exact path='/register' component={RegisterPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
