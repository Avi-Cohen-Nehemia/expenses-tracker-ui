import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

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
            <>
                <h4>{"Recent Transactions"}</h4>
                <ListGroup style={{maxWidth: "400px"}}>
                    { this.props.transactions.map((transaction, index) => (
                        index < this.state.transactionsToDisplay ?
                        <ListGroup.Item
                            className="d-flex justify-content-between"
                            variant={ transaction.type === "income" ? "success" : "danger" }
                            key={index}
                        >
                            <span>{transaction.category}</span>
                            <span>{transaction.amount}</span>
                        </ListGroup.Item>
                        : null
                    )) }
                </ListGroup>
                <p
                    className="text-info mt-2 active"
                    onClick={this.handleClick}
                    style={{cursor: "pointer"}}
                >
                    {'Load more transactions'}
                </p>
            </>
        );
    };
};

export default TransactionsList;
