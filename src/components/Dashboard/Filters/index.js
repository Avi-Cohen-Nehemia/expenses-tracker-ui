import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            from: null,
            to: null,
            newFiltersToApply: false
        };
    }

    render() {
        return (
            <div>
                <Button
                    className="et-button"
                    disabled={ !this.state.filersHaveChanged }
                >
                    {"Apply"}
                </Button>
            </div>
        );
    }
}

export default Filters;
