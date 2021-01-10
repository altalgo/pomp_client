import React, { Component } from 'react';
import FormWrapperByDate from './FormWrapperByDate';
import axios from 'axios';
class FormList extends Component {
    state = {
        forms: []
    };

    componentDidMount() {
        const arr = [];
        this.state.forms.map((info) => {
            if (!arr.includes(info.date)) {
                arr.push(info.date);
            }
        })
        arr.map((dates) => {
            this.dataSortedByDate[dates] = [];
        });
        
        this.state.forms.map((info) => {
            this.dataSortedByDate[info.date] = [...this.dataSortedByDate[info.date], info];
            // console.log(this.dataSortedByDate[info.date]);
        })
    }

    dataSortedByDate = {};     

    async componentDidMount() {
        let forms = await axios
            .get('/api/forms/view')
            .then((res) => this.setState({
                forms: res.data
            }))
            .catch((err) => console.log(err));
    }


    render() {
        const mainWrapperStyle = {
            margin: "0 auto",
            width: "80vh"
        };

        return (
            <div className="main--contents--wrapper" style={mainWrapperStyle}>
                {Object.keys(this.dataSortedByDate).map((data) => {
                    return <FormWrapperByDate date={data} data={this.dataSortedByDate[data]}/>
                })}
            </div>
        );
    }
}

export default FormList;