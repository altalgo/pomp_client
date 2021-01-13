import React, { Component } from 'react';
import './Short.css';

export default class Youtube extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>{this.props.title}</div>
                <div className='desc'>{this.props.desc}</div>
                <div className='img--wrapper'>
                    <iframe title='Youtube' src={this.props.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        );
    }
}
