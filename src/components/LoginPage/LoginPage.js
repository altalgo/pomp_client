import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './LoginPage.css';
import axios from 'axios';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: this.state.email, password: this.state.password };
    // console.log(data);
    axios
      .post('/api/auth/login', data)
      .then((response) => {
        if (response.data.loginSuccess) {
          // axios.get('/api/auth/user').then((response) => {
          //   console.log(response);
          // });
          window.location.href = '/forms';
        } else {
          alert(response.data.error);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='login--container'>
        <div className='login--wrapper'>
          <div className='logo'>
            <a href='/'>
              <span style={{ color: '#3E3E3E' }}>Pom</span>
              <span style={{ color: '#92A8D1' }}>p</span>
            </a>
          </div>
          <div className='btn--wrapper'>
            <a href='/api/auth/google'>
              <div className='btn--google--wrapper'>
                <img className='btn--google' src={'/img/loginGoogle.png'} alt='' />
              </div>
            </a>
            <a href='/api/auth/kakao'>
              <div className='btn--kakao--wrapper'>
                <img className='btn--kakao' src={'/img/loginKakao.png'} alt='' />
              </div>
            </a>
          </div>
          <div className='hr--wrapper'>
            <hr className='first--hr' />
            <div className='or--text'>or</div>
            <hr className='second--hr' />
          </div>
          <div className='loginform--wrapper'>
            <form
              className='login--form'
              method='post'
              onSubmit={this.handleSubmit}>
              <div className='loginform--input--wrapper'>
                <label htmlFor='email'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='example@email.com'
                  value={email}
                  onChange={this.onHandleChange}
                  className='login--input'
                />
                <label htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='**********'
                  value={password}
                  onChange={this.onHandleChange}
                  className='login--input'
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
