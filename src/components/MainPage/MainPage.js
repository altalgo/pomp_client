import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import FormList from './FormList';

class mainPage extends Component {
  state = {
    username: '',
    isAuth: '',
  };

  async componentDidMount() {
    await axios.get('/api/auth/user').then((res) => {
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
      <>
        <div className="contents--wrapper">
          <Header
            username={this.state.username}
            logoutBtn={this.state.isAuth ? 'true' : 'false'}
          />
          <FormList />
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(mainPage);
