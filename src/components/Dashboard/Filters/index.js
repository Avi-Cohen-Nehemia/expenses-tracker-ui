import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import DateFilter from "./DateFilter";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            newFiltersToApply: false
        };
    }

    handleDateRangeChange() {

    }

    render() {
        return (
            <div>
                <DateFilter />
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
