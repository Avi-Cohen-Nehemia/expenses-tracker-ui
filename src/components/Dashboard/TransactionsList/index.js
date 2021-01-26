import React, { Component } from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup"

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
                </ListGroup>
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
                
            </>
        );
    };
};

TransactionsList.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionsList;
