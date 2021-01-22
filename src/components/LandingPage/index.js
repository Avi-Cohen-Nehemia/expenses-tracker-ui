import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <>
            <h1 className="text-center mt-5">
                {"Welcome to Expenses Tracker"}
            </h1>
            <Row className="mt-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <Link to="/signup">
                        <Button variant="success" size="lg" block>{"Sign Up"}</Button>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <Link to="/login">
                        <Button variant="primary" size="lg" block>{"Log In"}</Button>
                    </Link>
                </Col>
            </Row>
        </>
    );
};

export default LandingPage;
