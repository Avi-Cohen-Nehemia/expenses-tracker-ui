import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "../FormInput";
import Navbar from "../Navbar";
import Spinner from "../Spinner";

export class AddTransaction extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactionAmount: "",
            transactionType: "income",
            transactionCategory: "paycheck"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(input, value) {
        if (input === "transactionType") {
            this.setState({
                transactionCategory: value === "income" ? "paycheck" : "groceries"
            });
        }
    }

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
        this.handleCategoryChange(input, e.currentTarget.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTransaction(this.state);
        this.setState({
            transactionAmount: "",
            transactionType: "income",
            transactionCategory: "paycheck",
        });
    }

    render() {

        const { transactionAmount, transactionCategory, transactionType } = this.state;
        const { logoutUser, submittingForm } = this.props;
        const incomeCategories = ["paycheck", "gift", "other"];
        const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway", "other"];
        const displayedCategories = transactionType === "expense" ? expenseCategories : incomeCategories;

        return(
            <div className="add-transaction-grid">
                <Navbar
                    handleLogout={ logoutUser }
                    selected="add-transaction"
                />
                <h1 className="add-transaction-page-header display-3">{"Add Transaction"}</h1>
                { submittingForm ? <Spinner stylingClasses="add-transaction-spinner"/> :
                    <div className="add-transaction-form">
                    <Form noValidate onSubmit={ this.handleSubmit }>
                        <FormInput
                            controlId="add-transaction-amount"
                            inputLabel="Amount"
                            inputPlaceholder="Enter Amount"
                            inputType="number"
                            inputValue={ transactionAmount }
                            onChange={ (e) => this.handleChange(e, "transactionAmount") }
                            required
                            tooltip
                            tooltipMessage={"All transactions are saved in GBP and can be viewed later in other currencies"}
                        />

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="add-transaction-type">
                                    <Form.Label>{ "Type" }</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="text-capitalize"
                                        onChange={ (e) => this.handleChange(e, "transactionType") }
                                        required
                                        value={ transactionType }
                                    >
                                        <option>{ "income" }</option>
                                        <option>{ "expense" }</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="add-transaction-category">
                                    <Form.Label>{ "Category" }</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="text-capitalize"
                                        onChange={ (e) => this.handleChange(e, "transactionCategory") }
                                        required
                                        value={transactionCategory}
                                    >
                                        { displayedCategories.map((category, index) => (
                                            <option key={ index }>
                                                { category }
                                            </option>
                                        )) }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Button
                                    type="submit"
                                    variant="primary"
                                >
                                    { "Submit" }
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div> }
            </div>
        )
    }
}

AddTransaction.propTypes = {
    addTransaction: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired
};

export default AddTransaction;
