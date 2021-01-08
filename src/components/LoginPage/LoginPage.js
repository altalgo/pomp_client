import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './LoginPage.css';
import axios from 'axios';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {email: this.state.email, password: this.state.password}
    console.log(data);
    axios.post('/api/auth/login', data)
      .then(response => {
        if (response.data.loginSuccess) {
          window.location.href="/forms";
        } else {
          alert(response.data.error);
          window.location.reload();
        };
      })
      .catch(err => console.log(err));
  };

  handleEmailChange = (e) => {
    this.setState({
      email : e.target.value
    })
  };
  handlePasswordChange = (e) => {
    this.setState({
      password : e.target.value
    })
  };
  
  render() {
    const {email, password} = this.state;
    return (
      <div className='container'>
        <div className='login--wrapper'>
          <div className='logo'>
            <span style={{ color: '#3E3E3E' }}>Pom</span>
            <span style={{ color: '#92A8D1' }}>p</span>
          </div>
          <div className='btn--wrapper'>
            <a href='/api/auth/google'>
              <div className='btn--google--wrapper'>
                <img className='btn--google' src={'/img/loginGoogle.png'} />
              </div>
            </a>
            <a href='/api/auth/kakao'>
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
            <form className='login--form' method="post" onSubmit={this.handleSubmit}>
              <div className='loginform--input--wrapper'>
                <label htmlFor='email' style={{ marginLeft: '0.6rem' }}>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='example@email.com'
                  value={email}
                  onChange={this.handleEmailChange}
                />
                <label htmlFor='password' style={{ marginLeft: '0.6rem' }}>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='**********'
                  value={password}
                  onChange={this.handlePasswordChange}
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
            <a className='register--link' href='/register'>
              Create an account
            </a>
          </div>
        </div>
      </div>
    );
  }
}
