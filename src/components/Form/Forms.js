import React, { Component, Fragment } from 'react';
import './Forms.css';
import Head from './Head';
import Short from './Short';
import Long from './Long';
import Radio from './Radio';
import Check from './Check';
import Dropdown from './Dropdown';
import ObjectiveGrid from './ObjectiveGrid';
import Header from '../Header';
import axios from 'axios';
class Forms extends Component {
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
      <div>
        <Header
          username={this.state.username}
          logoutBtn={this.state.isAuth ? 'true' : 'false'}
        />
          <div className='forms--wrapper'>
          <Head title={'안녕하세요'} desc={'안녕하세요'} />
          <Short
            title={'안녕하세요'}
            desc={'안녕하세요'}
            imgUrl={
              'https://lh3.googleusercontent.com/Tz5enT0dpGhp2bgI8OLrkIuZK53mcBzEno9PclyR7mCNLiGoz0UH1aJKKajQxgJrwF3kL8UWwlSkJkpZKh2XXVRYe7E1TyK0e1YvKKcrk8acROziQTQjXkxNLGtRz0kRshir4hntHLiu77GG'
            }
            ans={'안녕하세요'}
          />
          <Long
            title={'안녕하세요'}
            desc={'안녕하세요'}
            ans={'안녕하세요\n안녕하세요\n안녕하세요\n안녕하세요\n'}
          />
          <Radio
            title={'좋아하는 음식이 뭐에요'}
            desc={'세개의 선택지중 하나를 고르세요'}
            list={['고기', '파스타', '타코']}
            ans={'고기'}
          />
          <Check
            title={'이름이 뭐에요'}
            desc={'세개의 선택지중 모두 고르세요'}
            list={['경근', '동주', '수연']}
            ans={['경근', '동주']}
          />
          <Dropdown
            title={'어디에 사세요'}
            desc={'세개의 선택지중 하나를 고르세요'}
            list={['고기', '파스타', '타코']}
            ans={'고기'}
          />
          <ObjectiveGrid
            title={'세트메뉴를 좋아하세요'}
            desc={'좌표중에서 고르세요'}
            list={{
              hang: ['고기', '파스타', '타코'],
              ryul: ['물', '사이다', '환타'],
            }}
            ans={[
              { hang: '고기', ryul: '물' },
              { hang: '파스타', ryul: '환타' },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Forms;
