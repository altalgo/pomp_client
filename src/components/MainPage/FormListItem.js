import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormListItem extends Component {
    render() {
        return (
            <Link to={"/forms/" + this.props.info.id} className="form--list--item--linkbox">
                <div className="form--list--item">
                    <h4 className="form--list--title">{
                        this.props.info.data.title.length > 39 ? 
                        this.props.info.data.title.substring(0, 38) + "..." : this.props.info.data.title
                    }</h4>
                    <span className="form--list--timestamp">{this.props.info.timestamp}</span>
                    <div className="spacer"></div>
                    <div className="form--list--item--arrow">→</div>
                </div>
            </Link>
        );
    }
}

export default FormListItem;