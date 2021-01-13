import React, { Component } from 'react';

export default class Check extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} alt='' />
        </div>
        <hr className="component--hr"/>
        <div className='check--list'>
          {this.props.list.map((ele, idx) => {
            return this.props.ans.includes(ele) ? (
              <div className='checked' key={ele + idx.toString()}>
                <input type='radio' checked disabled />
                {ele}
              </div>
            ) : (
              <div key={ele + idx.toString()}>
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
