import React, { Component } from 'react';
import FormWrapperByDate from './FormWrapperByDate';
import axios from 'axios';
import './FormList.css';
class FormList extends Component {
  state = {
    forms: [],
    dataSortedByDate: {},
  };

  async componentDidMount() {
    await axios
      .get('/api/forms/view')
      .then((res) => {
        this.setState({
          forms: res.data.headers,
        });
        console.log(this.state.forms);
      })
      .catch((err) => console.log(err));

    const arr = [];
    this.state.forms.forEach((info) => {
      if (!arr.includes(info.date)) {
        arr.push(info.date);
      }
    });
    arr.forEach((dates) => {
      this.state.dataSortedByDate[dates] = [];
      const nextState = JSON.parse(JSON.stringify(this.state.dataSortedByDate));
      this.setState({ dataSortedByDate: nextState });
    });

    this.state.forms.forEach((info) => {
      this.state.dataSortedByDate[info.date] = [
        ...this.state.dataSortedByDate[info.date],
        info,
      ];
      const nextState = JSON.parse(JSON.stringify(this.state.dataSortedByDate));
      this.setState({ dataSortedByDate: nextState });
    });
  }

  render() {
    return (
      <div className='main--contents--wrapper'>
        {Object.keys(this.state.dataSortedByDate).map((data, key) => {
          return (
            <FormWrapperByDate
              date={data}
              data={this.state.dataSortedByDate[data]}
              key={key}
            />
          );
        })}
      </div>
    );
  }
}

export default FormList;
