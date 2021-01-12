import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    nick: ''
  }

  validation = {
    'email': {
      status: false,
      message: '이메일을 확인해주세요.'
    },
    'password': {
      status: false,
      message: '비밀번호를 확인해주세요.'
    },
    'confirmPassword': {
      status: false,
      message: '비밀번호 확인이 일치하지 않습니다'
    }
  }

  check = {
      email : async () => {
      let emailRules = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
      let email = this.state.email;
      let p = document.getElementsByClassName("message--area email--message")[0];
      let res = await fetch('/api/auth/emailcheck', {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({
            'email': email
          })
      }).then(function(res) {
          if (res.ok)
              return res.json();
          throw new Error('네트워크 상태가 불안정합니다.');
      }).catch(function(error) {
          console.log(error);
      });
      if (res.status === "success") {
        p.setAttribute("class", "message--area email--message good");
        p.innerText = res.message;
        this.validation['email'].status = true;
      } else {
        p.setAttribute("class", "message--area email--message caution");
        p.innerText = res.message;
        console.log(p.innerText);
        this.validation['email'].status = false;
      }

      // input이 비어있을 때 오류메세지 출력 x
      if (!this.state.email) {
          p.innerText = "이메일을 입력해주세요";
          p.setAttribute("class", "message--area email--message caution");
          this.validation['email'].status = false;
      }
      else if (!emailRules.test(email)) {
          p.innerText = "이메일 주소를 다시 확인해주세요.";
          p.setAttribute("class", "message--area email--message caution");
          this.validation['email'].status = false;
      }
      // } else {
      //     p.innerText = "";
      //     p.setAttribute("class", "message--area email--message good");
      //     this.validation['email'].status = true;
      // }
    },
    
    password: () => {
      let pw = this.state.password;
      let p = document.getElementsByClassName("message--area password--message")[0];
      if (pw.length < 8) {
          p.innerText = "8자 이상 입력해주세요.";
          p.setAttribute("class", "message--area password--message caution");
          this.validation['password'].status = false;
      } else if (pw.search(/[0-9]/g) < 0) {
          p.innerText = "숫자를 최소 1자 이상 포함해주세요.";
          p.setAttribute("class", "message--area password--message caution");
          this.validation['password'].status = false;
      } else if (pw.search(/[!@#$%^&*()?_-~]/g) < 0) {
          p.innerText = "특수문자를 최소 1자 이상 포함해주세요.";
          p.setAttribute("class", "message--area password--message caution");
          this.validation['password'].status = false;
      } else {
          p.innerText = "안전한 비밀번호입니다.";
          p.setAttribute("class", "message--area password--message good");
          this.validation['password'].status = true;
      }
    },

    passwordCheck : () => {
    let p = document.getElementsByClassName("message--area confirm--password--message")[0];
    if (this.state.password !== this.state.confirmPassword) {
        p.setAttribute("class", "message--area confirm--password--message caution");
        p.innerText = "비밀번호가 일치하지 않습니다.";
        this.validation['confirmPassword'].status = false;
        console.log(p, p.innnerText);
    } else {
        p.setAttribute("class", "message--area confirm--password--message good");
        p.innerText = "비밀번호가 일치합니다.";
        this.validation['confirmPassword'].status = true;
    }
    // input이 비어있을 때 오류메세지 출력 x
    if (!this.state.confirmPassword) {
      p.innerText = "";
      this.validation['confirmPassword'].status = false;
    }
    // password validation false 일 때 confirmPassword p 비우기
    if(!this.validation['password'].status){
      p.innerText = "";
      this.validation['confirmPassword'].status = false;
    }
  },
}

  onHandleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(this.validation).every((v) => v.status === true)) {
      const data = { nick:this.state.nick, email: this.state.email, password: this.state.password };
      console.log(data);
      axios
        .post('/api/auth/join', data)
        .then((response) => {
          if (response.data.joinSuccess) {
            this.props.history.push('/forms');
          } else {
            alert(response.data.error);
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    } else {
      let invalidatedValue = Object.values(this.validation).find((e) => !e.status);
      alert(invalidatedValue.message);
    }
  };
  
  render() {
    return (
      <div className='register--container'>
        <div className='register--wrapper'>
          <div className='logo'>
            <a href="/">
              <span style={{ color: '#3E3E3E' }}>Pom</span>
              <span style={{ color: '#92A8D1' }}>p</span>
            </a>
          </div>
          <div className='register--form--wrapper'>
            <form
              className='register--form'
              method='post'
              onSubmit={this.handleSubmit}>
              <div className='register--form--input--wrapper'>
                <div className='inner--input--wrapper'>
                  <label htmlFor='email' style={{ marginLeft: '0.6rem' }}>
                    Email
                  </label>
                  <input
                    id='email'
                    type='text'
                    name='email'
                    placeholder='example@email.com'
                    onChange={this.onHandleChange}
                    onBlur={this.check.email}
                  />
                  <p className='message--area email--message'></p>
                </div>
                <div className='inner--input--wrapper'>
                  <label htmlFor='nick' style={{ marginLeft: '0.6rem' }}>
                    NickName
                  </label>
                  <input 
                  id='nick'
                  type='text' 
                  name='nick' 
                  placeholder='whoami' 
                  onChange={this.onHandleChange}
                  onBlur={this.check.nick}
                  />
                  <p className='message--area nick--message'></p>
                </div>
                <div className='inner--input--wrapper'>
                  <label htmlFor='password' style={{ marginLeft: '0.6rem' }}>
                    Password
                  </label>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='**********'
                    onChange={this.onHandleChange}
                    onBlur={this.check.password}
                  />
                  <p className='message--area password--message'></p>
                </div>
                <div className='inner--input--wrapper'>
                  <label
                    htmlFor='confirmPassword'
                    style={{ marginLeft: '0.6rem' }}>
                    Confirm Password
                  </label>
                  <input
                    id='confirm--password'
                    type='password'
                    name='confirmPassword'
                    placeholder='**********'
                    onChange={this.onHandleChange}
                    onBlur={this.check.passwordCheck}
                  />
                  <p className='message--area confirm--password--message'></p>
                </div>
              </div>
              <button className='login--btn' type='submit'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);