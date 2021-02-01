import React, { Component } from "react";
import PropTypes from 'prop-types';
import TransactionsList from "./TransactionsList";
import DashboardCard from "./DashboardCard";
import Card from 'react-bootstrap/Card'
import Spinner from "../Spinner"
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.calculateBarWidth = this.calculateBarWidth.bind(this);
    };

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        };
    };

    calculateBarWidth(totalIncome, totalExpense, amount) {

        //remove £ symbol and convert string to float
        let totalIncomeNumber = parseFloat(totalIncome.replace("£", ""));
        let totalExpenseNumber = parseFloat(totalExpense.replace("£", ""));
        let amountNumber = parseFloat(amount.replace("£", ""));

        // calculate relative % of the bars
        let total = totalIncomeNumber + totalExpenseNumber;

        return `${amountNumber / total * 100}%`;
    }

    render() {

        const { balance, transactions, totalExpense, totalIncome, loaded } = this.props;

        return (
            loaded ?
            <div className="dashboard-grid">
                <Navbar
                    selected="dashboard"
                    handleLogout={ this.props.logoutUser }
                />
                <h1 className="page-header display-3">{"Dashboard"}</h1>
                <DashboardCard
                    cardClass="balance-card"
                    content={ balance }
                    icon="fas fa-balance-scale fa-lg"
                    title="Balance"
                />
                <Card className={"shadow comparison-card"}>
                    <Card.Header
                        className="d-flex justify-content-between align-items-center"
                    >
                        <span className="dashboard-card-header">{"Compare"}</span>  
                        <i className={"fas fa-chart-bar fa-lg"}/>
                    </Card.Header>
                    <Card.Body className="comparison-card-grid p-3">
                            <h6 className="total-income-header m-0">{"Total Income:"}</h6>
                            <div className="total-income-stats">
                                <h6 className="m-0">{ totalIncome }</h6>
                                <div className="income-bar">
                                    <div
                                        style={{
                                            width: this.calculateBarWidth(totalExpense, totalIncome, totalIncome),
                                            height: "0.5rem",
                                            backgroundColor: "green"
                                        }}
                                    />
                                </div>
                            </div>
                            <h6 className="total-expense-header m-0">{"Total Expense:"}</h6>
                            <div className="total-expense-stats">
                                <h6 className="m-0">{ totalExpense }</h6>
                                <div className="expense-bar">
                                    <div
                                        style={{
                                            width: this.calculateBarWidth(totalExpense, totalIncome, totalExpense),
                                            height: "0.5rem",
                                            backgroundColor: "red"
                                        }}
                                    />
                                </div>
                            </div>
                    </Card.Body>
                </Card>
                <DashboardCard
                    cardClass="transaction-card"
                    content={ transactions[0].amount }
                    icon="fas fa-exchange-alt fa-lg"
                    title="Last Transaction"
                />
                <DashboardCard
                    cardClass="category-card"
                    icon="fas fa-search-dollar fa-lg"
                    title="Most Spent On"
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
            : <Spinner />
        );
    };
};

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
};

export default Dashboard;
