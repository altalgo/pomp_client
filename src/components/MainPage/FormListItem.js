import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormListItem extends Component {
    render() {
        const itemStyle = {
            width: "50rem",
            height: "4.5rem",
            backgroundColor: "rgb(223, 228, 242)",
            margin: "1.4rem auto",
            borderRadius: "2.4rem",
            padding: "1.7rem 1.8rem",
            display: "flex",
            justifyContent: "flex-end",
        };

        return (
            <div style={itemStyle}>
                <h4 style={{display: "inline-block", fontFamily: "Noto Sans KR", "margin": 0}}>{this.props.info.name}</h4>
                <span style={{fontSize:"0.8em", color:"#999"}}>{this.props.info.timestamp}</span>
                <div style={{flexGrow: 1}}></div>
                <Link to={"/forms/" + this.props.info.id}>→</Link>
            </div>
        );
    }
}

export default FormListItem;