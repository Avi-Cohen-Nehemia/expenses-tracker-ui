import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from 'react-bootstrap/Table'

class TransactionsList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactionsToDisplay: 5,
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({
            transactionsToDisplay: this.state.transactionsToDisplay + 5,
        });
    };

    render() {
        return (
            <div className="transactions-table">
                <h4>{"Recent Transactions"}</h4>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Balance</th>
                            <th>Transaction Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.transactions.map((transaction, index) => (
                            index < this.state.transactionsToDisplay ?
                                <tr key={index}>
                                    <td>{ index + 1 }</td>
                                    <td>{ transaction.created_at }</td>
                                    <td className="text-capitalize">{ transaction.category }</td>
                                    <td>{ transaction.balance_at_the_time }</td>
                                    <td>{ transaction.amount }</td>
                                </tr>
                            : null
                        )) }
                    </tbody>
                </Table>
                {/* <ListGroup>
                    { this.props.transactions.map((transaction, index) => (
                        index < this.state.transactionsToDisplay ?
                        <ListGroup.Item
                            className="d-flex justify-content-between"
                            variant={ transaction.type === "income" ? "success" : "danger" }
                            key={index}
                        >
                            <div className="d-flex flex-column justify-content-between">
                                <span className="text-capitalize">{transaction.category}</span>
                                <span style={{fontSize: "0.8rem"}}>{transaction.created_at}</span>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <span>{transaction.amount}</span>
                                <span className="text-right" style={{fontSize: "0.8rem"}}>{transaction.balance_at_the_time}</span>
                            </div>
                        </ListGroup.Item>
                        : null
                    )) }
                </ListGroup> */}
                { this.state.transactionsToDisplay < this.props.transactions.length ?
                    <p
                        className="text-info mt-2 active"
                        onClick={this.handleClick}
                        style={{cursor: "pointer"}}
                    >
                        {"Load more transactions"}
                    </p>
                    : null
                }
                
            </div>
        );
    };
};

TransactionsList.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionsList;
