import React, { Component } from "react";
import PropTypes from 'prop-types';
import TransactionsList from "./TransactionsList";
import DashboardCard from "./DashboardCard";
import Card from 'react-bootstrap/Card';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import PieChartCard from "./PieChartCard";

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.calculateBarWidth = this.calculateBarWidth.bind(this);
    }

    componentDidMount() {

        const { getUserStats, loaded } = this.props;

        if (!loaded) {
            getUserStats();
        }
    }

    calculateBarWidth(amount) {

        const { totalIncome, totalExpense } = this.props;

        // make sure number is absolute
        let absoluteAmount = Math.abs(amount);

        // calculate relative % of the bars
        let total = totalIncome + totalExpense;

        return total ? `${absoluteAmount / total * 100}%` : "1%";
    }

    render() {

        const {
            balanceWithCurrency,
            transactions,
            totalExpense,
            totalExpenseWithCurrency,
            totalExpenseByCategory,
            mostSpentOnCategory,
            totalIncome,
            totalIncomeWithCurrency,
            loaded,
            logoutUser
        } = this.props;

        return (
            loaded ?
            <div className="dashboard-grid">
                <Navbar
                    handleLogout={ logoutUser }
                    selected="dashboard"
                />
                <h1 className="page-header display-3">{ "Dashboard" }</h1>
                <DashboardCard
                    cardClass="balance-card"
                    content={ balanceWithCurrency }
                    icon="fas fa-balance-scale fa-lg"
                    title="Balance"
                />
                <Card className={ "shadow comparison-card" }>
                    <Card.Header
                        className="d-flex justify-content-between align-items-center"
                    >
                        <span className="dashboard-card-header">{ "Compare" }</span>
                        <i className={ "fas fa-chart-bar fa-lg" }/>
                    </Card.Header>
                    <Card.Body className="comparison-card-grid p-3">
                            <h6 className="total-income-header m-0">{ "Total Income:" }</h6>
                            <div className="total-income-stats">
                                <h6 className="m-0">{ totalIncomeWithCurrency }</h6>
                                <div className="income-bar">
                                    <div
                                        className="expense-bar"
                                        style={{
                                            width: this.calculateBarWidth(totalIncome),
                                            backgroundColor: "green",
                                        }}
                                    />
                                </div>
                            </div>
                            <h6 className="total-expense-header m-0">{ "Total Expense:" }</h6>
                            <div className="total-expense-stats">
                                <h6 className="m-0">{ totalExpenseWithCurrency }</h6>
                                <div className="expense-bar-container">
                                    <div
                                        className="expense-bar"
                                        style={{
                                            width: this.calculateBarWidth(totalExpense),
                                            backgroundColor: "red",
                                        }}
                                    />
                                </div>
                            </div>
                    </Card.Body>
                </Card>

                <DashboardCard
                    cardClass="transaction-card"
                    content={ transactions.length ? transactions[0].amount : "N/A" }
                    icon="fas fa-exchange-alt fa-lg"
                    title="Last Transaction"
                />

                <DashboardCard
                    cardClass="category-card"
                    content={ mostSpentOnCategory ? mostSpentOnCategory : "N/A" }
                    icon="fas fa-search-dollar fa-lg"
                    title="Most Spent On"
                />

                <PieChartCard
                    data={ totalExpenseByCategory }
                />

                <TransactionsList
                    transactions={ transactions }
                />
            </div>
            : <Spinner stylingClasses="dashboard-spinner"/>
        );
    }
}

Dashboard.propTypes = {
    balanceWithCurrency: PropTypes.string.isRequired,
    getUserStats: PropTypes.func.isRequired,
    transactions: PropTypes.array.isRequired,
    totalExpense: PropTypes.number.isRequired,
    totalExpenseWithCurrency: PropTypes.string.isRequired,
    totalExpenseByCategory: PropTypes.array.isRequired,
    mostSpentOnCategory: PropTypes.string.isRequired,
    totalIncome: PropTypes.number.isRequired,
    totalIncomeWithCurrency: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

export default Dashboard;
