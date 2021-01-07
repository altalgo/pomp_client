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
            <a href='/auth/google'>
              <div className='btn--google--wrapper'>
                <img className='btn--google' src={'/img/loginGoogle.png'} />
              </div>
            </a>
            <a href='/auth/kakao'>
              <div className='btn--kakao--wrapper'>
                <img className='btn--kakao' src={'/img/loginKakao.png'} />
              </div>
            </a>
          </div>
          <div className='hr--wrapper'>
            <hr className='first--hr' />
            <div className='or--text'>or</div>
            <hr className='second--hr' />
          </div>
          <div className='loginform--wrapper'>
            <form action='/auth/login' className='login--form'>
              <div className='loginform--input--wrapper'>
                <label htmlFor='email' style={{ marginLeft: '0.6rem' }}>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='example@email.com'
                />
                <label htmlFor='password' style={{ marginLeft: '0.6rem' }}>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='**********'
                />
              </div>
              <button className='login--btn' type='submit'>
                LOGIN
              </button>
            </form>
          </div>
          <div className='register--btn'>
            New to <span style={{ color: '#3E3E3E' }}>Pom</span>
            <span style={{ color: '#92A8D1' }}>p</span>?{' '}
            <a className='register--link' href=''>
              Create an account
            </a>
          </div>
        </div>
      </div>
    );
  }
}
