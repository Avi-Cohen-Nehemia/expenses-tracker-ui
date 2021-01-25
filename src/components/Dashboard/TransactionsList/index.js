import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class TransactionsList extends Component {


    render() {
        return (
            <>
                <h4>{"Recent Transactions"}</h4>
                <ListGroup style={{maxWidth: "400px"}}>
                    { this.props.transactions.map((transaction, index) => (
                        <ListGroup.Item
                            className="d-flex justify-content-between"
                            variant={ transaction.type === "income" ? "success" : "danger" }
                            key={index}
                        >
                            <span>{transaction.category}</span>
                            <span>{transaction.amount}</span>
                        </ListGroup.Item>
                    )) }
                </ListGroup>
            </>
        );
    };
};

export default TransactionsList;
