import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class TransactionsList extends Component {


    render() {
        return (
            <ListGroup>
                { this.props.transactions.map((transaction, index) => (
                    <ListGroup.Item key={index}>{transaction.amount}</ListGroup.Item>
                )) }
            </ListGroup>
        );
    };
};

export default TransactionsList;
