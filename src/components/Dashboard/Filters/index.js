import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: new Date(),
            endDate: "",
            formattedStartDate: "",
            formattedEndDate: "",
            filtersHaveChanged: false
        };

        this.handleDateRange = this.handleDateRange.bind(this);
    }

    componentDidMount() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // add 1 to month as they are 0 indexed (e.g January displays 0)
        this.setState({
            formattedStartDate: `${year}-${month + 1}-${day}`
        });
    }

    handleDateRange(date, type, formattedType) {
        const { startDate, endDate, filtersHaveChanged } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        this.setState({
            [type]: date,
            [formattedType]: `${year}-${month + 1}-${day}`,
            filtersHaveChanged: type === "endDate" ? true : filtersHaveChanged
        }, () => {
            if (Date.parse(endDate) < Date.parse(startDate)) {
                this.setState({
                    endDate: "",
                    formattedEndDate: "",
                    filtersHaveChanged: false
                });
            }
        });
    }


    render() {

        const { endDate, startDate } = this.state;

        return (
            <div>
                <DatePicker
                    endDate={ endDate }
                    onChange={ (date) => this.handleDateRange(date, "startDate", "formattedStartDate") }
                    selected={ startDate }
                    selectsStart
                    startDate={ startDate }
                />
                <DatePicker
                    endDate={ endDate }
                    minDate={ startDate }
                    onChange={ (date) => this.handleDateRange(date, "endDate", "formattedEndDate") }
                    selected={ endDate }
                    selectsEnd
                    startDate={ startDate }
                />
                <Button
                    className="et-button"
                    disabled={ !this.state.filtersHaveChanged }
                >
                    {"Apply"}
                </Button>
            </div>
        );
    }
}

export default Filters;
