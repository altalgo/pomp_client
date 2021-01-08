import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Logout extends Component {
    logoutHandler = async () => {
        let res = await axios.get('/api/auth/logout').then((res) => {
            if (res.data.logoutSuccess) {
                this.props.history.push('/'); // Redirect
            } else {
                alert("로그아웃 실패");
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Link to="" onClick={this.logoutHandler}>logout</Link>
            </Fragment>
        );
    }
}

export default withRouter(Logout);