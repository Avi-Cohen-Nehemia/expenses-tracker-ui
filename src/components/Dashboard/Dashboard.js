import React, { Component } from "react";
import Header from "./Header";
import TransactionsList from "./TransactionsList";

class Dashboard extends Component {


    render() {
        return (
            <>
                <Header
                    getUserStats={ this.props.getUserStats }
                    balance={ this.props.balance }
                />
                <TransactionsList
                    transactions={ this.props.transactions }
                />
            </>
        );
    };
};

export default Dashboard;
