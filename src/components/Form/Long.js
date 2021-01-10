import React, { Component } from 'react';
import './Long.css';
import './Short.css';

export default class Long extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} />
        </div>
        <textarea disabled className='long--answer'>{this.props.ans}</textarea>
      </div>
    );
  }
}
