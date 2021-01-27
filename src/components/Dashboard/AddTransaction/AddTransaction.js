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
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTransaction(this.state);
    }

    render() {

        const { transactionAmount, transactionCategory, transactionType } = this.state;
        const incomeCategories = ["paycheck", "gift", "other"];
        const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway", "paycheck", "gift", "other"];
        const displayedCategories = transactionType === "expense" ? expenseCategories : incomeCategories;

        return(
            <>
                <h2 className="mt-5 text-center">{"Add New Transaction"}</h2>
                <Form className="mt-5" onSubmit={this.handleSubmit}>
                    <FormInput
                        inputLabel="Amount"
                        inputPlaceholder="Enter Amount"
                        inputType="number"
                        inputValue={transactionAmount}
                        controlId="add-transaction-amount"
                        onChange={(e) => this.handleChange(e, "transactionAmount")}
                        required
                    />

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="add-transaction-type">
                                <Form.Label>{"Income or Expense"}</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="text-capitalize"
                                    value={transactionType}
                                    onChange={(e) => this.handleChange(e, "transactionType")}
                                    required
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
                                    value={transactionCategory}
                                    onChange={(e) => this.handleChange(e, "transactionCategory")}
                                    required
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
                            <Button
                                variant="primary"
                                type="submit"
                            >
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
