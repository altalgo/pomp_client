import React, { Component } from 'react';
import './Head.css';
import './Short.css';

export default class Head extends Component {
  moreButtonHandler = () => {
    let desc = document.querySelector('.desc');
    let moreBtn = document.querySelector('.more--btn'); // ??

    if (desc.classList.contains("desc--closed")) {
      desc.setAttribute("class", "desc desc--opened");
      moreBtn.innerText = "↑";
    } else if (desc.classList.contains("desc--opened")) {
      desc.setAttribute("class", "desc desc--closed");
      moreBtn.innerText = "↓";
    }
  }

  render() {
    return (
      <div className="form--header">
        <div className='form--title'>{this.props.title}</div>
        <div className='desc desc--closed'> {this.props.desc}</div>
        <button className="more--btn" onClick={this.moreButtonHandler}>↓</button>
      </div>
    );
  }
}
