import React, { Component } from 'react';
import './Short.css';

export default class Radio extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} />
        </div>
        <div className='linear--list'>
          {this.props.list.map((ele) => {
            return ele === this.props.ans ? (
              <div className='option checked'>
                {ele} <input type='radio' checked disabled />
              </div>
            ) : (
              <div className='option'>
                {ele} <input type='radio' disabled />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
