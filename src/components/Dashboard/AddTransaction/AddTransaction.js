import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "../../FormInput";
import Navbar from "../../Navbar";
import Spinner from "../../Spinner";

class AddTransaction extends Component {

    constructor(props) {

        super(props);

        this.state = {
            transactionAmount: "",
            transactionType: "income",
            transactionCategory: "paycheck",
            submittingForm: props.submittingForm
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidUpdate(prevProps) {
        if (this.props.submittingForm !== prevProps.submittingForm) {
            this.setState({ submittingForm: this.props.submittingForm });
        }
    }

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
        this.setState({
            transactionAmount: "",
            transactionType: "income",
            transactionCategory: "paycheck",
        });
    }

    render() {

        const { transactionAmount, transactionCategory, transactionType, submittingForm } = this.state;
        const incomeCategories = ["paycheck", "gift", "other"];
        const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway", "other"];
        const displayedCategories = transactionType === "expense" ? expenseCategories : incomeCategories;

        return(
            <div className="add-transaction-grid">
                <Navbar
                    selected="add-transaction"
                    handleLogout={ this.props.logoutUser }
                />
                <h1 className="add-transaction-page-header display-3">{"Add Transaction"}</h1>
                { submittingForm ? <Spinner /> :
                    <div className="add-transaction-form">
                    <Form onSubmit={this.handleSubmit}>
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
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
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
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                                <Form.Group controlId="add-transaction-category">
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
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                                <Button
                                    variant="primary"
                                    type="submit"
                                >
                                    {"Submit"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div> }
            </div>
        )
    };
};

export default AddTransaction;
