import React, { Component } from 'react';
import './Short.css';

export default class CheckGrid extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} alt=''/>
        </div>
        <hr className="component--hr" />
        <div className='checkgrid--list'>
          <table className='checkgrid--table'>
            <thead>
              <tr>
                <th></th>
                {this.props.list.ryul.map((ele, RIdx) => {
                  return <th key={RIdx.toString()} className=''>{ele}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.list.hang.map((hangEle, hIdx) => {
                return (
                  <tr key={hangEle}>
                    <td>{hangEle}</td>
                    {this.props.list.ryul.map((ryulEle, rIdx) => {
                      if (this.props.ans[hIdx][rIdx] === 1)
                        return <td key={rIdx.toString() + ryulEle} className="checked"> <input type='radio' checked disabled /></td>;
                      else
                        return <td key={rIdx.toString() + ryulEle}><input type='radio' disabled /></td>
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
