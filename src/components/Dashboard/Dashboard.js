import React, { Component } from "react";
import PropTypes from 'prop-types';
import TransactionsList from "./TransactionsList";
import DashboardCard from "./DashboardCard";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
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
                <DashboardCard
                    cardClass="balance-card"
                    content={this.props.balance}
                    icon="fas fa-balance-scale fa-lg"
                    title="Balance"
                />
                <DashboardCard
                    cardClass="comparison-card"
                    icon="fas fa-chart-bar fa-lg"
                    title="Compare"
                />
                <DashboardCard
                    cardClass="transaction-card"
                    content={this.props.transactions[0].amount}
                    icon="fas fa-exchange-alt fa-lg"
                    title="Last Transaction"
                />
                <DashboardCard
                    cardClass="category-card"
                    icon="fas fa-search-dollar fa-lg"
                    title="Category Most Spent On"
                />
                <DashboardCard
                    cardClass="pie-card"
                    icon="fas fa-chart-pie fa-lg"
                    title="Categories Chart"
                />
                <TransactionsList
                    transactions={ transactions }
                />
                {/* <Link to="/add-transaction" className="text-decoration-none mt-2">
                    <Button
                        className="my-2"
                        variant="primary"
                        size="sm"
                    >
                        {"Add New Transaction"}
                    </Button>
                </Link> */}
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
