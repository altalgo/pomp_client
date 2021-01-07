// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/register' component={RegisterPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
