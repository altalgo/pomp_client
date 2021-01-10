import React, { Component } from 'react';
import './Short.css';

export default class ObjectiveGrid extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>{this.props.title}</div>
        <div className='desc'>{this.props.desc}</div>
        <div className='img--wrapper'>
          <img src={this.props.imgUrl} />
        </div>
        <div className='dropdown--list'>
          <table>
            <thead>
              <tr>
                <th></th>
                {this.props.list.ryul.map((ele, RIdx) => {
                  return <th className=''>{ele}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.list.hang.map((hangEle, hIdx) => {
                return (
                  <tr>
                    <td>{hangEle}</td>
                    {this.props.list.ryul.map((ryulEle, rIdx) => {
                      return <td className={hangEle + ' ' + ryulEle}></td>;
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
