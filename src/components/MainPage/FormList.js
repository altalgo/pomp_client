import React, { Component } from 'react';
import FormListItem from './FormListItem';
import FormWrapperByDate from './FormWrapperByDate';

class FormList extends Component {
    constructor(props) {
        super(props);

    }

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
    
    state = {
        forms: [
            {
                id: 1,
                name: "[중급 - 윤인섭] ICPC Sinchon 2021 Winter Algorithm Camp 강의 피드백",
                timestamp: "22:37:04",
                date: "2021.01.09"
            }, {
                id: 2,
                name: "[초급 - 강효규] ICPC Sinchon 2021 Winter Algorithm Camp 강의 피드백",
                timestamp: "22:43:42",
                date: "2021.01.09"
            }, {
                id: 3,
                name: "[고급 - 이국렬] ICPC Sinchon 2021 Winter Algorithm Camp 강의 피드백",
                timestamp: "22:43:42",
                date: "2021.01.10"
            },
        ]
    };

    

    // componentDidMount = () => {
    //     this.callAPI().then((data) => {
    //         this.setState({
    //             forms: data
    //         })
    //     })
    // }

    // callAPI = async () => {
    //     let res = await fetch('url').then((res) => {
    //         if (res.ok) return res.json();
    //         throw new Error('error');
    //     })
    // }

    render() {
        const mainWrapperStyle = {
            margin: "0 auto",
            width: "80vh"
        };

        return (
            <div className="main--contents--wrapper" style={mainWrapperStyle}>
                { /* 여기 코드 한줄로 예쁘게 못고치나? */ }

                {Object.keys(this.dataSortedByDate).map((data) => {
                    return <FormWrapperByDate date={data} data={this.dataSortedByDate[data]}/>
                })}
            </div>
        );
    }
}

export default FormList;