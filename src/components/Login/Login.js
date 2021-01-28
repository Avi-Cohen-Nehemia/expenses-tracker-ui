import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: "",
            password: "",
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
        this.props.login(this.state);
    }

    render() {

        const { username, password } = this.state;

        return(
            <>
                <h2 className="mt-5 text-center">{"Log In"}</h2>
                <Form
                    className="mt-5"
                    onSubmit={this.handleSubmit}
                >
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="login-form-username">
                                <Form.Label>{"Username"}</Form.Label>
                                <Form.Control
                                    onChange={(e) => this.handleChange(e, "username")}
                                    required
                                    value={username}
                                    type="text"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="login-form-password">
                                <Form.Label>{"Password"}</Form.Label>
                                <Form.Control
                                    onChange={(e) => this.handleChange(e, "password")}
                                    required
                                    value={password}
                                    type="password"
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
                        <Link to="/signup"><p>{"Don't have an account? Sign up here"}</p></Link>
                    </Col>
                </Row>
            </>
        )
    };
};

export default Login;
