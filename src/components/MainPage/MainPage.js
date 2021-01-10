import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import axios from 'axios';
import FormList from './FormList';
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
    let forms = await axios
      .get('/api/forms/view')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    let form = await axios
      .get('/api/forms/view/3')
      // .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <Header
          username={this.state.username}
          logoutBtn={this.state.isAuth ? 'true' : 'false'}
        />
        <FormList />
      </Fragment>
    );
  }
}

export default withRouter(mainPage);
