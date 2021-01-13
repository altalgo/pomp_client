/*global chrome*/
import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './ExtLoginPage.css';
import axios from 'axios';

export default class ExtLoginPage extends Component {
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
    console.log(data);
    axios
      .post('/api/auth/extlogin', data)
      .then((response) => {
        console.log(response)
        if (response.data.loginSuccess) {
          // https://stackoverflow.com/questions/41353594/reactjs-chrome-extension-message-passing-not-working/41354213

          // https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
          const script = document.createElement("script");
          script.innerHTML = `
          chrome.runtime.sendMessage("olhikehcbmkheggemandfhjekkbffiki",
          { msg: "loginedLocal", uuid: "`+ response.data.uuid + `" });
          `;
          document.body.appendChild(script);

          window.location.href = "/extloginsuccess";
        } else if (response.data.error) {
          // 가입되지 않은 회원입니다, 비밀번호가 틀렸습니다
          alert(response.data.error);
          // window.location.reload();
        } 
        alert(response.data.error);
        // else {
        //   // 이미 로그인한 상태일 때
        //   console.log(response.data);
        //   const script = document.createElement("script");
        //   script.innerHTML = `
        //   chrome.runtime.sendMessage("olhikehcbmkheggemandfhjekkbffiki",
        //   { msg: "loginedLocal", uuid: "`+ response.data.uuid + `" });
        //   `;
        //   document.body.appendChild(script);

        //   window.location.href = "/extloginsuccess";
        // }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='login--container'>
        <div className='login--wrapper'>
          <div className='logo'>
            <a href='/extlogin'>
              <span style={{ color: '#3E3E3E' }}>Pom</span>
              <span style={{ color: '#92A8D1' }}>p</span>
            </a>
          </div>
          <div className='btn--wrapper'>
            <a href='/api/auth/extgoogle'>
              <div className='btn--google--wrapper'>
                <img className='btn--google' src={'/img/loginGoogle.png'} alt='' />
              </div>
            </a>
            <a href='/api/auth/extkakao'>
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
                <label htmlFor='email' style={{ marginLeft: '0.6rem' }}>
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
                <label htmlFor='password' style={{ marginLeft: '0.6rem' }}>
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
