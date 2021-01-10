import React, { Component } from 'react';

export default class Check extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} />
        </div>
        <div className='check--list'>
        {this.props.list.map((ele) => { 
            return (this.props.ans.includes(ele) ? <div className="checked">{ele}</div> : <div>{ele}</div>)
            }
          )
        }
        </div>
      </div>
    );
  }
}
