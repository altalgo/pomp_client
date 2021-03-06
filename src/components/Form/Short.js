import React, { Component } from 'react';
import './Short.css';

export default class Short extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img className="img" src={this.props.imgUrl} alt=''/>
        </div>
        <hr className="component--hr"/>
        <div className='short--answer'>{this.props.ans}</div>
      </div>
    );
  }
}
