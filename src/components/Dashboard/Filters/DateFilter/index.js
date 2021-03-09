import React, { Component } from "react";
import Form from 'react-bootstrap/Form'

class DateFilter extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <>
                <Form.Group controlId="start-date">
                    <Form.Label>{"Start Date"}</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group controlId="end-date">
                    <Form.Label>{"End Date"}</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </>
        );
    }
}

export default DateFilter;