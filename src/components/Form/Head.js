import React, { Component } from 'react';
import './Head.css';
import './Short.css';

export default class Head extends Component {
  moreButtonHandler = () => {
    console.log("누르지마");
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
    const headerStyle = {
      width: "100%",
      backgroundColor: "white",
      height: "auto",
      marginBottom: "3rem",
      display: "flex",
      flexDirection: "column",
      padding: "4rem 2rem 3rem"
    }

    const titleStyle = {
      fontFamily: "carmen-exbold",
      lineHeight: "1",
      fontSize: "2rem"
    }

    return (
      <div style={headerStyle}>
        <div className='title' style={titleStyle}>{this.props.title}</div>
        <div className='desc desc--closed'> {this.props.desc}</div>
        <button className="more--btn" onClick={this.moreButtonHandler}>↓</button>
      </div>
    );
  }
}
