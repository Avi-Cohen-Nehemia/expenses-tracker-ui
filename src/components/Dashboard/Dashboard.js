import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import TransactionsList from "./TransactionsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

class Dashboard extends Component {

    render() {

        const { balance, getUserStats, transactions } = this.props;

        return (
            <div className="dashboard-grid" style={{maxWidth: "450px"}}>
                <Navbar
                    selected="dashboard"
                    handleLogout={ this.props.logoutUser }
                />
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
