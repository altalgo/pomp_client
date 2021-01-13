import React, { Component } from 'react'
import './Short.css';

export default class SectionTitle extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
      </div>
    );
  }
}
