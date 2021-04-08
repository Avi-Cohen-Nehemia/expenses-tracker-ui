import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createNewUser } from "../../data/actions/api";

// components
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "../Spinner";

// assets
import homeImage from "../../assets/images/home-picture2.jpg";

// local state + reducer
const initialSignupState = {
    username: "",
    password: "",
    confirmPassword: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_INPUT_CHANGE" :
            return {
                ...state,
                ...action.payload
            };
        default : return;
    }
};

const Signup = () => {

    const [state, dispatch] = useReducer(reducer, initialSignupState);
    const { username, password, confirmPassword } = state;

    // redux dispatch + global state
    const reduxDispatch = useDispatch();
    const { submittingForm } = useSelector((state) => state);

    const handleChange = (e, input) => {

        let value = e.currentTarget.value;

        dispatch({
            type: "HANDLE_INPUT_CHANGE",
            payload: {
                [input]: value
            }
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (password === confirmPassword) {
            reduxDispatch(createNewUser(state));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid form submission.',
                text: 'Password confirmation does not match your password',
            });
        }
    }

    return(
        <div className="signup-page">
            { submittingForm ? <Spinner stylingClasses="dashboard-spinner"/> :
                <div className="my-auto signup-form">
                    <h2 className="text-center">{ "Sign Up" }</h2>
                    <Form
                        className="mt-4"
                        noValidate
                        onSubmit={ handleSubmit }
                    >
                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="signup-form-username">
                                    <Form.Label>{ "Username" }</Form.Label>
                                    <Form.Control
                                        aria-describedby="password-description"
                                        onChange={ (e) => handleChange(e, "username") }
                                        required
                                        style={{border: username.length >= 3 ? "2px solid green" : ""}}
                                        type="text"
                                        value={ username }
                                    />
                                    <Form.Text
                                        id="password-description"
                                        muted
                                    >
                                        { "Username must be between 3 and 20 characters long" }
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="signup-form-password">
                                    <Form.Label>{"Password"}</Form.Label>
                                    <Form.Control
                                        aria-describedby="password-description"
                                        onChange={ (e) => handleChange(e, "password") }
                                        required
                                        style={{border: password.length > 7 && password.length < 21 ? "2px solid green" : ""}}
                                        type="password"
                                        value={ password }
                                    />
                                    <Form.Text id="password-description" muted>{"Password length must be between 8-20 characters"}</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="signup-form-confirm-password">
                                    <Form.Label>{ "Confirm Password" }</Form.Label>
                                    <Form.Control
                                        onChange={ (e) => handleChange(e, "confirmPassword") }
                                        required
                                        style={{border: confirmPassword.length > 7 && confirmPassword === password ? "2px solid green" : ""}}
                                        type="password"
                                        value={ confirmPassword }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Button type="submit" variant="primary">
                                    { "Submit" }
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Row className="mt-4">
                        <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                            <Link to="/login">
                                <p>{ "Already have an account? Log in here" }</p>
                            </Link>
                        </Col>
                    </Row>
                </div>
            }
            <div>
                <img
                    alt="person counting money"
                    className="signup-cover-image"
                    src={ homeImage }
                />
            </div>
        </div>
    )

}

export default Signup;
