import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import TransactionsList from "./TransactionsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
                <Link to="/add-transaction" className="text-decoration-none mt-2">
                    <Button variant="primary" size="sm">{"Add New Transaction"}</Button>
                </Link>
            </>
        );
    };
};

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
};

export default Dashboard;
