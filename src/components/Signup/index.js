import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormInput from '../FormInput';

class Signup extends Component {

    render() {

        return(
            <>
                <h2 className="mt-5 text-center">{'Sign Up'}</h2>
                <Form className="mt-5">
                    <FormInput
                        inputType='text'
                        inputLabel='Username'
                        controlId='signup-form-username'
                    />

                    <FormInput
                        inputType='password'
                        inputLabel='Password'
                        controlId='signup-form-password'
                    />

                    <FormInput
                        inputType='password'
                        inputLabel='Confirm Password'
                        controlId='signup-form-confirm-password'
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
