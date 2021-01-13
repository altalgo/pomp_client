import React, { Component } from 'react';
import FormListItem from './FormListItem';

class FormWrapperByDate extends Component {
    render() {
        const dateStyle = {
            margin: "3.2rem 1rem 0",
            lineHeight: "1",
            fontSize: "1.1em",
            color: "#555",
            fontFamily: "carmen-bold"
        }
        return (
            <div className="form--wrapper--by--date">
                <h5 style={dateStyle}>{this.props.date} ↓</h5>
                {this.props.data.map((info, key) => {
                    // console.log(info);
                    return <FormListItem info={info} key={key} />
                })}
            </div>
        );
    }
}

export default FormWrapperByDate;