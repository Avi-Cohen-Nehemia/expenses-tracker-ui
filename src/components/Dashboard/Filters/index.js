import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            newFiltersToApply: false
        };

        this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
    }

    handleDateRangeChange() {

    }

    render() {

        const { endDate, startDate, filersHaveChanged } = this.state;

        return (
            <div>
                <DatePicker
                    endDate={ endDate }
                    inline
                    onChange={ this.handleDateRangeChange }
                    selected={ startDate }
                    selectsRange
                    startDate={ startDate }
                />
                <Button
                    className="et-button"
                    disabled={ !filersHaveChanged }
                >
                    {"Apply"}
                </Button>
            </div>
        );
    }
}

export default Filters;
