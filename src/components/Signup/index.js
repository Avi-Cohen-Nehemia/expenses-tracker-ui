import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Signup extends Component {

    render() {

        return(
            <>
                <h2 className="mt-5 text-center">{'Sign Up'}</h2>
                <Form className="mt-5">
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>{'Username'}</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="formBasicPassword" md="4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group controlId="formBasicPassword" md="4">
                                <Form.Label>{'Confirm Password'}</Form.Label>
                                <Form.Control type="password"/>
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
                                {'Submit'}
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }}>
                        <p>{'Already have an account? Log in here'}</p>
                    </Col>
                </Row>
            </>
        )
    };
};

export default Signup;
