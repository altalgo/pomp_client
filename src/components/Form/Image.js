import React, { Component } from 'react'
import './Short.css';

export default class Image extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='img--wrapper'>
          <img className="img" src={this.props.imgUrl} alt=''/>
        </div>
      </div>
    );
  }
}
