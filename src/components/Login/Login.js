import React, { Component } from "react";
import PropTypes from 'prop-types';
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
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        const { accessToken, isLoggedIn } = this.props;

        if (isLoggedIn && accessToken) {
            history.push("/dashboard");
        }
    }

    handleChange(e, input) {
        let value = e.currentTarget.value;
        this.setState({ [input]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {

        const { username, password } = this.state;
        const { submittingForm } = this.props;

        return(
            <div className="login-page">
                { submittingForm  ? <Spinner stylingClasses="dashboard-spinner"/> :
                    <div className="my-auto login-form">
                        <h2 className="text-center">{ "Log In" }</h2>
                        <Form
                            className="mt-3"
                            noValidate
                            onSubmit={ this.handleSubmit }
                        >
                            <Row>
                                <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                    <Form.Group controlId="login-form-username">
                                        <Form.Label>{ "Username" }</Form.Label>
                                        <Form.Control
                                            onChange={ (e) => this.handleChange(e, "username") }
                                            required
                                            type="text"
                                            value={ username }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                    <Form.Group controlId="login-form-password">
                                        <Form.Label>{ "Password" }</Form.Label>
                                        <Form.Control
                                            onChange={ (e) => this.handleChange(e, "password") }
                                            required
                                            type="password"
                                            value={ password }
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
                                <Link to="/signup"><p>{ "Don't have an account? Sign up here" }</p></Link>
                            </Col>
                        </Row>
                    </div>
                }
                <div>
                    <img
                        alt="person counting money"
                        className="cover-image"
                        src={ homeImage }
                    />
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    accessToken: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired
};

export default Login;
