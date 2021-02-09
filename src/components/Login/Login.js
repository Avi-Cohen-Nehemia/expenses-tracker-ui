import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-picture2.jpg"
import history from "../../history";
import Spinner from "../Spinner";

class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: "",
            password: "",
            loggingIn: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        if (this.props.isLoggedIn && this.props.accessToken) {
            history.push("/dashboard");
        };
    };

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({ loggingIn: true });
    }

    render() {

        const { username, password, loggingIn } = this.state;

        return(
            loggingIn ? <Spinner stylingClasses="dashboard-spinner"/> :
            <div className="login-page">
                <div className="my-auto login-form">
                    <h2 className="text-center">{"Log In"}</h2>
                    <Form
                        className="mt-3"
                        onSubmit={this.handleSubmit}
                    >
                        <Row>
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
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
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
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
                            <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit">
                                    {"Submit"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Row className="mt-4">
                        <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                            <Link to="/signup"><p>{"Don't have an account? Sign up here"}</p></Link>
                        </Col>
                    </Row>
                </div>
                <div>
                    <img
                        src={ homeImage }
                        alt="person counting money"
                        className="cover-image"
                    />
                </div>
            </div>
        )
    };
};

export default Login;
