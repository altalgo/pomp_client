import React, { Component } from 'react';
import './Short.css';

export default class Date extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <hr className="component--hr"/>
        <div className='date'><i className="far fa-calendar"></i><span className="emp--text"> 날짜</span> {this.props.ans}</div>
      </div>
    );
  }
}
