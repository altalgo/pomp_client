import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/forms" className="logo">
                    <span style={{color: "#333333"}}>Pom</span>
                    <span style={{color: "#92a8d1"}}>p</span>
                </Link>
                <div className="spacer"></div>
                <div className="header--userinfo">
                    <span className="header--username">{this.props.username}</span>
                    <span className="header--logout">{this.props.logoutBtn == "true" ? <Link to="">logout</Link> : ''}</span>
                </div>
                
            </div>
        );
    }
}

export default Header;