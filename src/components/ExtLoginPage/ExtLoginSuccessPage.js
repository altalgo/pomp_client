import React, { Component } from 'react';
import '../../fonts/fonts.css';
import './ExtLoginPage.css';

class ExtLoginSuccessPage extends Component {
    render() {
        return (
            <div className="success--message">
                <span className="style--pomp pom">Pom</span>
                <span className="style--pomp p">p</span>
                로그인에 성공하였습니다. 창을 닫아주세요.
            </div>
        );
    }
}

export default ExtLoginSuccessPage;