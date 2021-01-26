import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class FormInput extends Component {

    render() {

        const { inputValue, inputType, inputLabel, controlId, inputPlaceholder, onChange } = this.props;

        return(
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form.Group controlId={ controlId }>
                        <Form.Label>{ inputLabel }</Form.Label>
                        <Form.Control
                            value={ inputValue }
                            onChange={ onChange }
                            placeholder={ inputPlaceholder ? inputPlaceholder : "" }
                            type={ inputType }
                        />
                    </Form.Group>
                </Col>
            </Row>
        )
    };
};

FormInput.propTypes = {
    controlId: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string
};

export default FormInput;
