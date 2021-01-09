import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import axios from 'axios';
class mainPage extends Component {
  state = {
    username: '',
    isAuth: '',
  };

  async componentDidMount() {
    let res = await axios.get('/api/auth/user').then((res) => {
      if (res.data.isAuth) {
        this.setState({
          username: res.data.username,
          isAuth: res.data.isAuth,
        });
      } else {
        this.props.history.push('/login'); // Redirect
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          username={this.state.username}
          logoutBtn={this.state.isAuth ? 'true' : 'false'}
        />
        <div></div>
      </Fragment>
    );
  }
}

export default withRouter(mainPage);
