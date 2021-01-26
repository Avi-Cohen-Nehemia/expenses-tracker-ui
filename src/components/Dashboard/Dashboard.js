import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import TransactionsList from "./TransactionsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {


    render() {

        const { balance, getUserStats, transactions } = this.props;

        return (
            <>
                <Header
                    getUserStats={ getUserStats }
                    balance={ balance }
                />
                <TransactionsList
                    transactions={ transactions }
                />
                <Link to="/add-transaction" className="text-decoration-none mt-2">
                    <Button
                        className="my-2"
                        variant="primary"
                        size="sm"
                    >
                        {"Add New Transaction"}
                    </Button>
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
