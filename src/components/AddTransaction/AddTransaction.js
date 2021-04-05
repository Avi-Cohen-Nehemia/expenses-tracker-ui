import React, { useReducer } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, logout } from "../../data/actions/api";
import history from "../../history";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "../FormInput";
import Navbar from "../Navbar";
import Spinner from "../Spinner";

const initialFormState = {
    transactionAmount: "",
    transactionType: "income",
    transactionCategory: "paycheck"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE" :
            return {
                ...state,
                [action.input]: action.value
            }
        case "HANDLE_CATEGORY_CHANGE" :
            return {
                ...state,
                [action.input]: action.value
            }
        case "SUBMIT_FORM" :
            return {
                ...initialFormState
            }

        default: return;
    }
};

const AddTransaction = () => {

    const [state, dispatch] = useReducer(reducer, initialFormState);

    const { submittingForm } = useSelector((state) => state);
    const reduxDispatch = useDispatch();

    const handleCategoryChange = (input, value) => {
        dispatch({
            type: "HANDLE_CATEGORY_CHANGE",
            input: input,
            value: value === "income" ? "paycheck" : "groceries"
        })
    }

    const handleChange = (e, input) => {

        if (input === "transactionType") {
            handleCategoryChange(input, e.currentTarget.value);
        }

        dispatch({
            type: "HANDLE_CHANGE",
            input: input,
            value: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reduxDispatch(addTransaction(state));
    }

    const logoutUser = () => {
        reduxDispatch(logout());
        history.push("/");
    }

    const incomeCategories = ["paycheck", "gift", "other"];
    const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway", "other"];
    const displayedCategories = state.transactionType === "expense" ? expenseCategories : incomeCategories;

    return(
        <div className="add-transaction-grid">
            <Navbar
                handleLogout={ logoutUser }
                selected="add-transaction"
            />
            <h1 className="add-transaction-page-header display-3">{"Add Transaction"}</h1>
            { submittingForm ? <Spinner stylingClasses="add-transaction-spinner"/> :
                <div className="add-transaction-form">
                <Form noValidate onSubmit={ handleSubmit }>
                    <FormInput
                        controlId="add-transaction-amount"
                        inputLabel="Amount"
                        inputPlaceholder="Enter Amount"
                        inputType="number"
                        inputValue={ state.transactionAmount }
                        onChange={ (e) => handleChange(e, "transactionAmount") }
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
                                    onChange={ (e) => handleChange(e, "transactionType") }
                                    required
                                    value={ state.transactionType }
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
                                    onChange={ (e) => handleChange(e, "transactionCategory") }
                                    required
                                    value={ state.transactionCategory }
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

export default AddTransaction;
