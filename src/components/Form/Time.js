import React, { Component } from 'react';
import './Short.css';

export default class Date extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='date'><i class="far fa-clock"></i> <span className="emp--text">시간</span> {this.props.ans}</div>
      </div>
    );
  }
}
