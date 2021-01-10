import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const footerStyle = {
            backgroundColor: "#ccc",
            width: "100%",
            height: "15rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontSize: "0.9em",
            color: "#666"
        }

        return (
            <div style={footerStyle}>
                <div>
                    Team Altalgo.
                </div>
            </div>
        );
    }
}

export default Footer;