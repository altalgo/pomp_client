import React, { Component } from 'react';
import './Short.css';

export default class Dropdown extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} />
        </div>
        <div className='dropdown--list'>
        {this.props.list.map((ele) => { 
            return (ele === this.props.ans ? <div className="checked">{ele}</div> : <div>{ele}</div>)
            }
          )
        }
        </div>
        {/* <div className='dropdown--answer'>{this.props.ans}</div> */}
      </div>
    );
  }
}
