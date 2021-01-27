import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "../FormInput";
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
        e.preventDefault();
        this.props.addTransaction(this.state);
    }

    render() {

        return(
            <>
                <h2 className="mt-5 text-center">{"Sign Up"}</h2>
                <Form className="mt-5" onSubmit={this.handleSubmit}>
                    <FormInput
                        controlId="signup-form-username"
                        inputLabel="Username"
                        inputType="text"
                        inputValue={this.state.username} 
                        onChange={(e) => this.handleChange(e, "username")}
                    />

                    <FormInput
                        controlId="signup-form-password"
                        inputLabel="Password"
                        inputType="password"
                        inputValue={this.state.password}
                        onChange={(e) => this.handleChange(e, "password")}
                    />

                    <FormInput
                        controlId="signup-form-confirm-password"
                        inputLabel="Confirm Password"
                        inputType="password"
                        inputValue={this.state.confirmPassword}
                        onChange={(e) => this.handleChange(e, "confirmPassword")}
                    />

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
