import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../App.css';

class Header extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className='header'>
        <Link to='/forms' className='logo'>
          <span style={{ color: '#333333' }}>Pom</span>
          <span style={{ color: '#92a8d1' }}>p</span>
        </Link>
        <div className='spacer'></div>
        <div className='header--userinfo'>
          <span className='header--username'>{this.props.username}</span>
          <span className='header--logout'>
            {this.props.logoutBtn === 'true' ? <Logout /> : ''}
          </span>
        </div>
      </div>
    );
  }
=======
    render() {
        return (
            <div className="header">
                <Link to="/forms" className="header--logo">
                    <span style={{color: "#333333"}}>Pom</span>
                    <span style={{color: "#92a8d1"}}>p</span>
                </Link>
                <div className="spacer"></div>
                <div className="header--userinfo">
                    <span className="header--username">{this.props.username}</span>
                    <span className="header--logout">{this.props.logoutBtn === "true" ? <Logout/> : ''}</span>
                </div>
                
            </div>
        );
    }
>>>>>>> 8f34f533b9668d2fffa40756a20a389e1729f233
}

export default Header;
