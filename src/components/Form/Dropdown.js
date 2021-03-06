import React, { Component } from 'react';
import './Radio.css';
import './Short.css';

export default class Radio extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} alt=''/>
        </div>
        <hr className="component--hr"/>
        <div className='dropdown--list'>
          {this.props.list.map((ele) => {
            return ele === this.props.ans ? (
              <div className='checked'>
                <input type='radio' checked disabled />
                {ele}
              </div>
            ) : (
              <div>
                <input type='radio' disabled />
                {ele}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
