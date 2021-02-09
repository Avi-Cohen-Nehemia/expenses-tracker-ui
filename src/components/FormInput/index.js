import React, { Component } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class FormInput extends Component {

    render() {

        const {
            description,
            descriptionID,
            inputValue,
            inputType,
            inputLabel,
            controlId,
            inputPlaceholder,
            onChange,
            required
        } = this.props;

        return(
            <Row>
                <Col lg={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                    <Form.Group controlId={ controlId }>
                        <Form.Label>{ inputLabel }</Form.Label>
                        <Form.Control
                            aria-describedby={ descriptionID }
                            onChange={ onChange }
                            placeholder={ inputPlaceholder ? inputPlaceholder : "" }
                            required={required}
                            type={ inputType }
                            value={ inputValue }
                        />
                        <Form.Text id={ descriptionID } muted>{ description }</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
        )
    }
}

FormInput.propTypes = {
    description: PropTypes.string,
    descriptionID: PropTypes.string,
    inputValue: PropTypes.string.isRequired,
    controlId: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};

export default FormInput;
