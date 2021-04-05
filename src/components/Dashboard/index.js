import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserStats, logout } from "../../data/actions/api";
import history from "../../history";

// components used in Dashboard
import Card from 'react-bootstrap/Card';
import DashboardCard from "./DashboardCard";
import Filters from "./Filters";
import Navbar from "./../Navbar";
import PieChartCard from "./PieChartCard";
import Spinner from "./../Spinner";
import TransactionsList from "./TransactionsList";


const Dashboard = () => {

    // import global state values using redux hooks
    const {
        balanceWithCurrency,
        totalIncome,
        totalIncomeWithCurrency,
        totalExpense,
        totalExpenseWithCurrency,
        totalExpenseByCategory,
        mostSpentOnCategory,
        transactions,
        loaded,
        submittingForm,
    } = useSelector((state) => state);

    // import redux dispatch using hooks
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loaded) {
            dispatch(getUserStats());
        }
    }, []);

    const calculateBarWidth = (amount) => {

        // make sure number is absolute
        let absoluteAmount = Math.abs(amount);

        // calculate relative % of the bars
        let total = totalIncome + totalExpense;

        return total ? `${absoluteAmount / total * 100}%` : "1%";
    }

    const logoutUser = () => {
        dispatch(logout());
        history.push("/");
    }

    return (
        <div className="dashboard-grid">
            <Navbar
                handleLogout={ logoutUser }
                selected="dashboard"
            />
            <h1 className="page-header display-3">{ "Dashboard" }</h1>
            <Filters />
            { loaded && !submittingForm ?
            <>
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
                                            width: calculateBarWidth(totalIncome),
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
                                            width: calculateBarWidth(totalExpense),
                                            backgroundColor: "red",
                                        }}
                                    />
                                </div>
                            </div>
                    </Card.Body>
                </Card>

                <DashboardCard
                    cardClass="transaction-card"
                    content={ transactions.length ? transactions[0].amount_with_currency : "N/A" }
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
            </>
            : <Spinner stylingClasses="new-dashboard-spinner"/>
            }
        </div>
    );
}

export default Dashboard;
