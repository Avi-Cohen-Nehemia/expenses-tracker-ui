import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import homeImage from "../../assets/images/home-picture2.jpg"
import "../../assets/css/landing-page.css";


const LandingPage = () => {
    return (
        <>
            <div className="landing-page">
                <div className="mx-3" style={{ marginTop: "30%" }}>
                    <h1 className="text-center mt-5">
                        {"Welcome to Expenses Tracker"}
                    </h1>
                    <Row className="mt-5">
                        <Col md={{ span: 6, offset: 3 }}>
                            <Link to="/login" className="text-decoration-none">
                                <Button variant="success" size="lg" block>{"Log In"}</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={{ span: 6, offset: 3 }}>
                            <Link to="/signup" className="text-decoration-none">
                                <Button variant="primary" size="lg" block>{"Sign Up"}</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <div>
                    <img
                        src={ homeImage }
                        alt="person counting money"
                        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                    />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
