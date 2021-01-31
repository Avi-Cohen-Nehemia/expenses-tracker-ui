import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import TransactionsList from "./TransactionsList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.logoutUser();
    }

    render() {

        const { balance, getUserStats, transactions } = this.props;

        return (
            <div className="mx-auto" style={{maxWidth: "450px"}}>
                <Navbar selected="dashboard"/>
                <Header
                    getUserStats={ getUserStats }
                    balance={ balance }
                />
                <TransactionsList
                    transactions={ transactions }
                />
                <Link to="/add-transaction" className="text-decoration-none mt-2">
                    <Button
                        className="my-2"
                        variant="primary"
                        size="sm"
                    >
                        {"Add New Transaction"}
                    </Button>
                </Link>
                <Button
                        className="my-2"
                        variant="primary"
                        size="sm"
                        onClick={this.handleClick}
                    >
                        {"Logout"}
                </Button>
            </div>
        );
    };
};

Dashboard.propTypes = {
    balance: PropTypes.string,
    getUserStats: PropTypes.func,
    transactions: PropTypes.array
};

export default Dashboard;
