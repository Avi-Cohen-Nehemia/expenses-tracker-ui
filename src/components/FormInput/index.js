import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class FormInput extends Component {

    render() {

        const { description, descriptionID, inputValue, inputType, inputLabel, controlId, inputPlaceholder, onChange, required } = this.props;

        return(
            <Row>
                <Col xs={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <Form.Group controlId={ controlId }>
                        <Form.Label>{ inputLabel }</Form.Label>
                        <Form.Control
                            value={ inputValue }
                            onChange={ onChange }
                            placeholder={ inputPlaceholder ? inputPlaceholder : "" }
                            required={required}
                            type={ inputType }
                            aria-describedby={descriptionID}
                        />
                        <Form.Text id={descriptionID} muted>{description}</Form.Text>
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
    required: PropTypes.bool,
    inputPlaceholder: PropTypes.string
};

export default FormInput;
