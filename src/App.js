import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components//MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        {/* / -> 로그인 상태면 forms 이동 */}
        <Route exact path='/' component={Auth(LoginPage, false)}></Route>
        <Route exact path='/forms' component={Auth(MainPage, true)}></Route>
        <Route
          exact
          path='/register'
          component={Auth(RegisterPage, false)}></Route>
      </Switch>
    </Router>
  );
}

export default App;
