import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../App.css';
import './Header.css';

class Header extends Component {

  logoutHandler = (e) => {
    const script = document.createElement("script");
    script.innerHTML = `
    alert('Extension will also be logged out.');
    chrome.runtime.sendMessage("gmajhmdbmhadglgnommlpinilbaenalb",
    { msg: "logoutBrowser"});
    `;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className='header'>
        <Link to='/forms' className='header--logo'>
          <span style={{ color: '#333333' }}>Pom</span>
          <span style={{ color: '#92a8d1' }}>p</span>
        </Link>
        <div className='spacer'></div>
        <div className='header--userinfo'>
          <span className='header--username'>{this.props.username}</span>
          <span className='header--logout' onClick={this.logoutHandler}>
            {this.props.logoutBtn === 'true' ? <Logout /> : ''}
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
