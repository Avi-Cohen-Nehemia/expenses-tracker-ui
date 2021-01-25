import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class FormInput extends Component {

    render() {

        const { inputType, inputLabel, controlId } = this.props;

        return(
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form.Group controlId={ controlId }>
                        <Form.Label>{ inputLabel }</Form.Label>
                        <Form.Control type={ inputType }/>
                    </Form.Group>
                </Col>
            </Row>
        )
    };
};

FormInput.propTypes = {
    controlId: PropTypes.string,
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
};

export default FormInput;
