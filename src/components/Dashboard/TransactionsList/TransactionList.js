import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carets from "./Carets";

class TransactionsList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactions: props.transactions,
            transactionsToDisplay: 5,
            sortBy: "date",
            direction: "desc"
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleTableOrder = this.handleTableOrder.bind(this);
    }

    handleClick() {
        this.setState({ transactionsToDisplay: this.state.transactionsToDisplay + 5 });
    }

    handleTableOrder(column) {
        const { direction, transactions } = this.state;
        const orderedTransactions = transactions.sort((a, b) => {
            if (column === "date") {

                if (direction === "asc") {
                    return new Date(b.unformatted_created_at) - new Date(a.unformatted_created_at);
                } else {
                    return new Date(a.unformatted_created_at) - new Date(b.unformatted_created_at);
                }

            } else {

                if (direction === "asc") {
                    return b[column] - a[column];
                } else {
                    return a[column] - b[column];
                }

            }
        });

        this.setState({
            transactions: orderedTransactions,
            sortBy: column,
            direction: this.state.direction === "desc" ? "asc" : "desc"
        });
    }

    render() {

        const { direction, transactions, transactionsToDisplay, sortBy } = this.state;

        return (
            <div className="transactions-table">
                <Card className="shadow mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <span className="dashboard-card-header">{ "Transaction History" }</span>
                        <i className="fas fa-table fa-lg"/>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <Table
                            className="full-table"
                            hover
                            striped
                        >
                            <thead>
                                <tr>
                                    <th>
                                        <span
                                            id="transacting-table-date-column"
                                            onClick={ () => this.handleTableOrder("date") }
                                        >
                                            <span>{ "Date" }</span>
                                            <div>
                                                <Carets
                                                    direction={direction}
                                                    sortBy={sortBy === "date"}
                                                />
                                            </div>
                                        </span>
                                    </th>
                                    <th>{ "Category" }</th>
                                    <th>
                                        <span
                                            id="transacting-table-amount-column"
                                            onClick={ () => this.handleTableOrder("amount") }
                                        >
                                            <span>{ "Transaction Amount" }</span>
                                            <div>
                                                <Carets
                                                    direction={direction}
                                                    sortBy={sortBy === "amount"}
                                                />
                                            </div>
                                        </span>
                                    </th>
                                    <th>{ "Balance" }</th>
                                    <th>{ "" }</th>
                                </tr>
                            </thead>
                            <tbody>
                                { transactions.map((transaction, index) => (
                                    index < transactionsToDisplay ?
                                        <tr className="transaction-list-row" key={index}>
                                            <td>{ transaction.created_at }</td>
                                            <td className="text-capitalize">{ transaction.category }</td>
                                            <td>{ transaction.amount_with_currency }</td>
                                            <td>{ transaction.balance_at_the_time }</td>
                                            <td><i className="fas fa-times delete-transaction-btn"></i></td>
                                        </tr>
                                    : null
                                )) }
                            </tbody>
                        </Table>
                        <Table
                            className="text-center m-0 compact-table"
                            hover
                            striped
                        >
                            <thead>
                                <tr>
                                    <th className="text-left pr-0">
                                        <div>{ "Category" }</div>
                                        <div>{ "Date" }</div>
                                    </th>
                                    <th className="text-right text-nowrap pl-0">
                                        <div>{ "Transaction Amount" }</div>
                                        <div>{ "Balance" }</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { transactions.map((transaction, index) => (
                                    index < transactionsToDisplay ?
                                        <tr key={index}>
                                            <td className="text-left pr-0">
                                                <div className="text-capitalize">{ transaction.category }</div>
                                                <div style={{ fontSize: "0.8rem" }}>{ transaction.created_at }</div>
                                            </td>
                                            <td className="text-right pl-0">
                                                <div>{ transaction.amount_with_currency }</div>
                                                <div style={{ fontSize: "0.8rem" }}>{ transaction.balance_at_the_time }</div>
                                            </td>
                                        </tr>
                                    : null
                                )) }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                { transactionsToDisplay < transactions.length ?
                    <Button
                        className="et-button"
                        onClick={ this.handleClick }
                        size="sm"
                    >
                        { "Load more transactions" }
                    </Button>
                    : null
                }
            </div>
        );
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionsList;
