import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Forms.css';
import Head from '../Form/Head';
import Short from '../Form/Short';
import Long from '../Form/Long';
import Radio from '../Form/Radio';
import Check from '../Form/Check';
import Date from '../Form/Date';
import Time from '../Form/Time';
import Dropdown from '../Form/Dropdown';
import Linear from '../Form/Linear';
import ObjectiveGrid from '../Form/ObjectiveGrid';
import CheckGrid from '../Form/CheckGrid';
import Header from '../Header';
import Footer from '../Footer';

class FormData extends Component {

  state = {
    form: [],
    username: '',
    isAuth: '',
  }

  async componentDidMount(){
    const id = this.props.location.pathname.split('/')[2]
    await axios.get(`/api/forms/view/${id}`).then(res => {this.setState({form: res.data.form.data});  console.log(this.state.form)}).catch(err => console.log(err));
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
        <div className='forms--wrapper'>
          {this.state.form.map(data => {
            if(data.type === -1){
              return <Head
              title={data.title}
              desc={data.desc}
              />
            }else if(data.type === 0){
              return <Short title={data.title} desc={data.desc} imgUrl={data.imgUrl} ans={data.ans}/>
            }else if(data.type === 1){
              return <Long title={data.title} desc={data.desc} imgUrl={data.imgUrl} ans={data.ans}/>
            }else if(data.type === 2){
              return <Radio 
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 3){
              return <Check 
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 4){
              return <Dropdown
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 5){
              return <Linear
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 6){
              return <ObjectiveGrid 
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 7){
              return <CheckGrid
                title={data.title}
                desc={data.desc}
                imgUrl={data.imgUrl}
                list={data.list}
                ans={data.ans}
              />
            }else if(data.type === 8){
                return <Date title={data.title} desc={data.desc} imgUrl={data.imgUrl} ans={data.ans}/>
            }else if(data.type===9){
              return <Time title={data.title} desc={data.desc} imgUrl={data.imgUrl} ans={data.ans}/>
            }
          })}
        </div>
        <Footer/>
      </Fragment>

    );
  }
}

export default withRouter(FormData);
