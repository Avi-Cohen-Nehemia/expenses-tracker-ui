import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

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
    };

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
    };

    handleSubmit(e) {

        const { username, password, confirmPassword } = this.state;
        const formIsValid = username.length > 2 || password.length > 7 || password.length < 21 || (password === confirmPassword);

        e.preventDefault();

        if (formIsValid) {
            this.props.createNewUser(this.state);
        }
    }

    render() {

        const { username, password, confirmPassword } = this.state;

        return(
            <>
                <h2 className="mt-5 text-center">{"Sign Up"}</h2>
                <Form
                    className="mt-5"
                    onSubmit={this.handleSubmit}
                >
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="signup-form-username">
                                <Form.Label>{"Username"}</Form.Label>
                                <Form.Control
                                    aria-describedby="password-description"
                                    onChange={(e) => this.handleChange(e, "username")}
                                    required
                                    value={username}
                                    type="text"
                                    style={{border: username.length >= 3 ? "2px solid green" : ""}}
                                />
                                <Form.Text
                                    id="password-description"
                                    muted
                                >
                                    {"Username must be at least 3 characters long"}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="signup-form-password">
                                <Form.Label>{"Password"}</Form.Label>
                                <Form.Control
                                    aria-describedby="password-description"
                                    onChange={(e) => this.handleChange(e, "password")}
                                    required
                                    value={password}
                                    type="password"
                                    style={{border: password.length > 7 && password.length < 21 ? "2px solid green" : ""}}
                                />
                                <Form.Text id="password-description" muted>{"Password length must be between 8-20 characters"}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="signup-form-confirm-password">
                                <Form.Label>{"Confirm Password"}</Form.Label>
                                <Form.Control
                                    onChange={(e) => this.handleChange(e, "confirmPassword")}
                                    required
                                    value={this.state.confirmPassword}
                                    type="password"
                                    style={{border: confirmPassword.length > 0 && confirmPassword === password ? "2px solid green" : ""}}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me"/>
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

                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Link to="/login"><p>{"Already have an account? Log in here"}</p></Link>
                    </Col>
                </Row>
            </>
        )
    };
};

export default Signup;