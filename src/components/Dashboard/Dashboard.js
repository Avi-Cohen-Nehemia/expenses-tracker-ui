import React, { Component } from "react";
import PropTypes from 'prop-types';
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

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
}

export default Dashboard;
