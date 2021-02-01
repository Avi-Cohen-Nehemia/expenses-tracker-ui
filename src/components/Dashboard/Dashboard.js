import React, { Component } from "react";
import PropTypes from 'prop-types';
import TransactionsList from "./TransactionsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        };
    };

    render() {

        const { transactions } = this.props;

        return (
            <div className="dashboard-grid">
                <Navbar
                    selected="dashboard"
                    handleLogout={ this.props.logoutUser }
                />
                <h1 className="page-header display-3">{"Dashboard"}</h1>
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
            </div>
        );
    };
};

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
};

export default Dashboard;
