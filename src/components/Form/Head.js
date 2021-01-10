import React, { Component } from 'react';

import './Short.css';

export default class Head extends Component {
  render() {
    const headerStyle = {
      width: "100%",
      backgroundColor: "white",
      height: "14rem",
      marginBottom: "3rem",
      display: "flex",
      flexDirection: "column",
      padding: "3.4rem 2rem"
    }

    const titleStyle = {
      fontFamily: "carmen-exbold",
      lineHeight: "1",
      fontSize: "2rem"
    }

    const descStyle = {
      height: "3rem",
      width: "35rem"
    }

    return (
      <div style={headerStyle}>
        <div className='title' style={titleStyle}>{this.props.title}</div>
        <div className='desc' style={descStyle}>{this.props.desc}</div>
      </div>
    );
  }
}
