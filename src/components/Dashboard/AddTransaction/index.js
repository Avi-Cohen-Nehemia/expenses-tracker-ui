import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "../../FormInput";
import { Link } from "react-router-dom";

class AddTransaction extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactionAmount: "",
            transactionType: "income",
            transactionCategory: "paycheck",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    };

    handleCategoryChange(input, value) {
        if (input === "transactionType") {
            this.setState({
                transactionCategory: value === "income" ? "paycheck" : "groceries"
            });
        };
    };

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
        this.handleCategoryChange(input, e.currentTarget.value);
    };

    render() {

        const incomeCategories = ["paycheck", "gift", "other"];
        const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway", "paycheck", "gift", "other"];
        const displayedCategories = this.state.transactionType === "expense" ? expenseCategories : incomeCategories;

        return(
            <>
                <h2 className="mt-5 text-center">{"Add New Transaction"}</h2>
                <Form className="mt-5">
                    <FormInput
                        inputLabel="Amount"
                        inputPlaceholder="Enter Amount"
                        inputType="number"
                        inputValue={this.state.transactionAmount}
                        controlId="add-transaction-amount"
                        onChange={(e) => this.handleChange(e, "transactionAmount")}
                    />

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="add-transaction-type">
                                <Form.Label>{"Income or Expense"}</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="text-capitalize"
                                    value={this.state.transactionType}
                                    onChange={(e) => this.handleChange(e, "transactionType")}
                                >
                                    <option>{"income"}</option>
                                    <option>{"expense"}</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="add-transaction-type">
                                <Form.Label>{"Category"}</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="text-capitalize"
                                    value={this.state.transactionCategory}
                                    onChange={(e) => this.handleChange(e, "transactionCategory")}
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
                        <Col md={{ span: 6, offset: 3 }}>
                            <Button variant="primary" type="submit">
                                {"Submit"}
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Link to="/Dashboard"><p>{"Back to Dashboard"}</p></Link>
                    </Col>
                </Row>
            </>
        )
    };
};

export default AddTransaction;
