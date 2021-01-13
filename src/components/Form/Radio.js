import React, { Component } from 'react';
import './Radio.css';
import './Short.css';

export default class Radio extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>{this.props.title}</div>
                <div className='desc'>{this.props.desc}</div>
                <div className='img--wrapper'>
                    <img src={this.props.imgUrl} alt='' />
                </div>
                <hr className="component--hr" />
                <div className='radio--list'>
                    {this.props.list.map((ele, idx) => {
                        return (ele === this.props.ans) ? (
                            <div className='checked' key={'checked' + idx.toString()}>
                                <input type='radio' checked disabled />
                                {ele}
                            </div>)
                            : (
                                <div key={'radio' + idx.toString()}>
                                    <input type='radio' disabled />
                                    {ele}
                                </div>);
                    })}
                </div>
            </div>
        );
    }
}
