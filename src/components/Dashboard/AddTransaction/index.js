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
            transactionType: "income",
        };

        this.handleTransactionType = this.handleTransactionType.bind(this);
    };

    handleTransactionType(e) {

        let value = e.target.value;

        this.setState({
            transactionType: value === "income" ? "income" : "expense",
        });
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
                        inputType="number"
                        inputLabel="Amount"
                        inputPlaceholder="Enter Amount"
                        controlId="add-transaction-amount"
                    />

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="add-transaction-type">
                                <Form.Label>{"Income or Expense"}</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="text-capitalize"
                                    value={this.state.transactionType}
                                    onChange={(e) => this.handleTransactionType(e)}
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
                                <Form.Label>{"Income or Expense"}</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="text-capitalize"
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
