import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteTransaction } from "../../../data/actions/api";

// components used in TransactionList
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carets from "./Carets";
import Swal from "sweetalert2";

// component's initial state + reducer
const initialTransactionListState = {
    transactionsToDisplay: 5,
    sortBy: "date",
    direction: "desc",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "APPLY_CHANGES":
            return {
                ...state,
                ...action.payload
            };

        default: return;
    }
}

const TransactionsList = ({ transactions }) => {

    // React hook + destructor state
    const [state, dispatch] = useReducer(reducer, initialTransactionListState);
    const { direction, transactionsToDisplay, sortBy } = state;

    // Redux action dispatch
    const reduxDispatch = useDispatch();

    // display more transactions
    const handleClick = () => {
        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                transactionsToDisplay: transactionsToDisplay + 5
            }
        });
    }

    const handleTableOrder = (column) => {

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

        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                transactions: orderedTransactions,
                sortBy: column,
                direction: direction === "desc" ? "asc" : "desc"
            }
        });
    }

    const handleDeleteTransaction = (transactionID) => {
        Swal.fire({
            title: 'Are you sure you want to delete this transaction?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete'
        }).then((result) => {
            if (result.isConfirmed) {
                reduxDispatch(deleteTransaction(transactionID));
            }
        });
    }

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
                                        onClick={ () => handleTableOrder("date") }
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
                                        onClick={ () => handleTableOrder("amount") }
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
                                        <td>
                                            <i
                                                className="fas fa-times delete-transaction-btn"
                                                onClick={() => handleDeleteTransaction(transaction.transaction_id)}
                                            />
                                        </td>
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
                    className="et-button mb-3"
                    onClick={ handleClick }
                    size="sm"
                >
                    { "Load more transactions" }
                </Button>
                : null
            }
        </div>
    );
}

TransactionsList.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionsList;
