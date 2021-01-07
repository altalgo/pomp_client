import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='login--wrapper'>
          <div className='logo'>
            <span style={{ color: '#3E3E3E' }}>Pom</span>
            <span style={{ color: '#92A8D1' }}>p</span>
          </div>
          <div className='btn--wrapper'>
            <div
              className='btn--kakao'
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/kakaoLogin.png'
                })`,
              }}></div>
            <div
              className='btn--google'
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/googleLogin.png'
                })`,
              }}></div>
          </div>
          <div className='loginform--wrapper'>
            <form action=''>
              <input type='text' />
              <input type='password' />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
