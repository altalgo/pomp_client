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
          <img src={this.props.imgUrl} alt=''/>
        </div>
        <hr className="component--hr"/>
        <div disabled className='long--answer'>
          {this.props.ans.split('\n').map((item, index) => {
            return (
              <span key={index}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
