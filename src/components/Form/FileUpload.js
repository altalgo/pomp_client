import { format } from 'path';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Short.css';

export default class FileUpload extends Component {
  OpenFileLink = () => {
    alert("Please login with account that you've submitted form.");
    window.location.href = this.props.ans;
  }
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img className="img" src={this.props.imgUrl} alt='' />
        </div>
        <div
          className='file--link'
          onClick={this.OpenFileLink}>Click To Open</div>
      </div>
    );
  }
}
