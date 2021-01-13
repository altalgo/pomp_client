import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormListItem extends Component {
    render() {
        return (
            <div className="form--list--item">
                <h4 style={{display: "inline-block", fontFamily: "Noto Sans KR", "margin": 0}}>{this.props.info.data.title}</h4>
                <span style={{fontSize:"0.8em", color:"#999"}}>{this.props.info.timestamp}</span>
                <div style={{flexGrow: 1}}></div>
                <Link to={"/forms/" + this.props.info.id}>→</Link>
            </div>
        );
    }
}

export default FormListItem;