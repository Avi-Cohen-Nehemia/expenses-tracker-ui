import React, { useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import history from "../../history";
import { login } from "../../data/actions/api";

// components
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "../Spinner";

// assets
import homeImage from "../../assets/images/home-picture2.jpg"


const initialLoginState = {
    username: "",
    password: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "APPLY_CHANGES" :
            return {
                ...state,
                ...action.payload
            };
        default : return;
    }
};

const Login = ({ submittingForm, accessToken, isLoggedIn } ) => {

    const [state, dispatch] = useReducer(reducer, initialLoginState);
    const { username, password } = state;

    const reduxDispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn && accessToken) {
            history.push("/dashboard");
        }
    }, [])

    const handleChange = (e, input) => {
        let value = e.currentTarget.value;
        this.setState({ [input]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reduxDispatch(login(state));
    }

    return(
        <div className="login-page">
            { submittingForm  ? <Spinner stylingClasses="dashboard-spinner"/> :
                <div className="my-auto login-form">
                    <h2 className="text-center">{ "Log In" }</h2>
                    <Form
                        className="mt-3"
                        noValidate
                        onSubmit={ handleSubmit }
                    >
                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Form.Group controlId="login-form-username">
                                    <Form.Label>{ "Username" }</Form.Label>
                                    <Form.Control
                                        onChange={ (e) => handleChange(e, "username") }
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
                                        onChange={ (e) => handleChange(e, "password") }
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

Login.propTypes = {
    accessToken: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired
};

export default Login;
