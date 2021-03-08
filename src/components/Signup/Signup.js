import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Swal from "sweetalert2";
import homeImage from "../../assets/images/home-picture2.jpg";

class Signup extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
    }

    handleSubmit(e) {

        const { password, confirmPassword } = this.state;

        e.preventDefault();

        if (password === confirmPassword) {
            this.props.createNewUser(this.state);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid form submission.',
                text: 'Password confirmation does not match your password',
            });
        }
    }

    render() {

        const { username, password, confirmPassword } = this.state;
        const { submittingForm } = this.props;

        return(
            <div className="signup-page">
                { submittingForm ? <Spinner stylingClasses="dashboard-spinner"/> :
                    <div className="my-auto signup-form">
                        <h2 className="text-center">{ "Sign Up" }</h2>
                        <Form
                            className="mt-4"
                            noValidate
                            onSubmit={ this.handleSubmit }
                        >
                            <Row>
                                <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                    <Form.Group controlId="signup-form-username">
                                        <Form.Label>{ "Username" }</Form.Label>
                                        <Form.Control
                                            aria-describedby="password-description"
                                            onChange={ (e) => this.handleChange(e, "username") }
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
                                            onChange={ (e) => this.handleChange(e, "password") }
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
                                            onChange={ (e) => this.handleChange(e, "confirmPassword") }
                                            required
                                            style={{border: confirmPassword.length > 0 && confirmPassword === password ? "2px solid green" : ""}}
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
}

Signup.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired
};

export default Signup;
