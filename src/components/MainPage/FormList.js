import React, { Component } from 'react';
import FormWrapperByDate from './FormWrapperByDate';
import axios from 'axios';
class FormList extends Component {
  state = {
    forms: [],
    dataSortedByDate: {},
  };

  async componentDidMount() {
    let forms = await axios
      .get('/api/forms/view')
      .then((res) => {
        this.setState({
          forms: res.data.headers,
        });
        console.log(this.state.forms);
      })
      .catch((err) => console.log(err));

    const arr = [];
    this.state.forms.map((info) => {
      if (!arr.includes(info.date)) {
        arr.push(info.date);
      }
    });
    arr.map((dates) => {
      this.state.dataSortedByDate[dates] = [];
    });

    this.state.forms.map((info) => {
      this.state.dataSortedByDate[info.date] = [
        ...this.state.dataSortedByDate[info.date],
        info,
      ];
      // console.log(this.state.dataSortedByDate[info.date]);
    });
  }

  render() {
    const mainWrapperStyle = {
      margin: '0 auto',
      width: '80vh',
    };

    return (
      <div className='main--contents--wrapper' style={mainWrapperStyle}>
        {Object.keys(this.state.dataSortedByDate).map((data) => {
          return (
            <FormWrapperByDate
              date={data}
              data={this.state.dataSortedByDate[data]}
            />
          );
        })}
      </div>
    );
  }
}

export default FormList;
