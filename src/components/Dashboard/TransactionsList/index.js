import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class TransactionsList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactionsToDisplay: 5,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ transactionsToDisplay: this.state.transactionsToDisplay + 5 });
    }

    render() {
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
                                    <th>{ "#" }</th>
                                    <th>{ "Date" }</th>
                                    <th>{ "Category" }</th>
                                    <th>{ "Transaction Amount" }</th>
                                    <th>{ "Balance" }</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.transactions.map((transaction, index) => (
                                    index < this.state.transactionsToDisplay ?
                                        <tr key={index}>
                                            <td>{ index + 1 }</td>
                                            <td>{ transaction.created_at }</td>
                                            <td className="text-capitalize">{ transaction.category }</td>
                                            <td>{ transaction.amount }</td>
                                            <td>{ transaction.balance_at_the_time }</td>
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
                                { this.props.transactions.map((transaction, index) => (
                                    index < this.state.transactionsToDisplay ?
                                        <tr key={index}>
                                            <td className="text-left pr-0">
                                                <div className="text-capitalize">{ transaction.category }</div>
                                                <div style={{ fontSize: "0.8rem" }}>{ transaction.created_at }</div>
                                            </td>
                                            <td className="text-right pl-0">
                                                <div>{ transaction.amount }</div>
                                                <div style={{ fontSize: "0.8rem" }}>{ transaction.balance_at_the_time }</div>
                                            </td>
                                        </tr>
                                    : null
                                )) }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                { this.state.transactionsToDisplay < this.props.transactions.length ?
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
