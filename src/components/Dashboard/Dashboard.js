import React, { Component } from "react";
import PropTypes from 'prop-types';
import TransactionsList from "./TransactionsList";
import DashboardCard from "./DashboardCard";
import Card from 'react-bootstrap/Card'
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

        const { balance, transactions, totalExpense, totalIncome } = this.props;

        return (
            <div className="dashboard-grid">
                <Navbar
                    selected="dashboard"
                    handleLogout={ this.props.logoutUser }
                />
                <h1 className="page-header display-3">{"Dashboard"}</h1>
                <DashboardCard
                    cardClass="balance-card"
                    content={balance}
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
                    <Card.Body className="d-flex flex-column justify-content-around align-items-start pl-2">
                        <div className="d-flex" style={{width: "100%"}}>
                            <h6 className="m-0 text-center" style={{width: "45%"}}>{"Total Income:"}</h6>
                            <div className="d-flex ml-2 align-items-center" style={{width: "55%"}}>
                                <h6 className="m-0" style={{width: "40%"}}>{totalIncome}</h6>
                                <div style={{width: "60%"}}>
                                    <div
                                        className="ml-2"
                                        style={{
                                            width: this.calculateBarWidth(totalExpense, totalIncome, totalIncome),
                                            height: "0.5rem",
                                            backgroundColor: "green"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex" style={{width: "100%"}}>
                            <h6 className="m-0 text-center" style={{width: "45%"}}>{"Total Expense:"}</h6>
                            <div className="d-flex ml-2 align-items-center" style={{width: "55%"}}>
                                <h6 className="m-0" style={{width: "40%"}}>{totalExpense}</h6>
                                <div style={{width: "60%"}}>
                                    <div
                                        className="ml-2"
                                        style={{
                                            width: this.calculateBarWidth(totalExpense, totalIncome, totalExpense),
                                            height: "0.5rem",
                                            backgroundColor: "red"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <DashboardCard
                    cardClass="transaction-card"
                    content={this.props.transactions[0].amount}
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
        );
    };
};

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
};

export default Dashboard;
