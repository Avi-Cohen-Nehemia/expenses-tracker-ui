import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-picture2.jpg"

class LandingPage extends Component {

    render() {

        return (
            <div className="landing-page">
                <div className="my-auto welcome">
                    <h1 className="text-center">
                        {"Welcome to Expenses Tracker"}
                    </h1>
                    <Row className="mt-4">
                        <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                            <Link to="/login" className="text-decoration-none">
                                <Button variant="success" size="lg" block>{"Log In"}</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                            <Link to="/signup" className="text-decoration-none">
                                <Button variant="primary" size="lg" block>{"Sign Up"}</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div className="blah2">
                    <img
                        src={ homeImage }
                        alt="person counting money"
                        className="cover-image"
                    />
                </div>
            </div>
        );
    }
};

export default LandingPage;
