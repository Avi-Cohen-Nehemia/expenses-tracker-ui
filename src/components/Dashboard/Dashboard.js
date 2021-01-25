import React, { Component } from "react";
import Header from './Header';

class Dashboard extends Component {


    render() {
        return (
            <Header
                getUserStats={ this.props.getUserStats }
                balance={ this.props.balance }
            />
        );
    };
};

export default Dashboard;
