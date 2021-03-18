import React, { Component } from "react";
import { formatDate } from "./../../../utilities/formatters";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Filters extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: new Date(),
            endDate: "",
            formattedStartDate: formatDate(new Date()),
            formattedEndDate: "",
            currency: "GBP",
            filtersHaveChanged: false
        };

        this.handleDateRange = this.handleDateRange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (Date.parse(this.state.endDate) < Date.parse(this.state.startDate)) {
            this.setState({
                endDate: "",
                formattedEndDate: "",
                filtersHaveChanged: false
            });
        }
    }

    handleDateRange(date, type, formattedType) {

        const { filtersHaveChanged } = this.state;

        this.setState({
            [type]: date,
            [formattedType]: formatDate(date),
            filtersHaveChanged: type === "endDate" ? true : filtersHaveChanged
        });
    }

    handleCurrency(currency) {
        this.setState({ currency: currency });
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.getFilteredTransactions(this.state)
        this.setState({ filtersHaveChanged: false });
    }
    render() {

        const { endDate, startDate, filtersHaveChanged } = this.state;

        return (
            <Form className="d-flex align-items-end filters" onSubmit={ this.handleSubmit }>
                <div className="d-flex flex-column">
                    <label className="m-0">{"Start Date"}</label>
                    <DatePicker
                        endDate={ endDate }
                        onChange={ (date) => this.handleDateRange(date, "startDate", "formattedStartDate") }
                        selected={ startDate }
                        selectsStart
                        startDate={ startDate }
                    />
                </div>
                <div className="d-flex flex-column">
                    <label className="m-0">{"End Date"}</label>
                    <DatePicker
                        endDate={ endDate }
                        minDate={ startDate }
                        onChange={ (date) => this.handleDateRange(date, "endDate", "formattedEndDate") }
                        selected={ endDate }
                        selectsEnd
                        startDate={ startDate }
                    />
                </div>
                <DropdownButton id="dropdown-item-button" title={ this.state.currency }>
                    <Dropdown.Item
                        as="button"
                        onClick={() => this.handleCurrency("GBP")}
                    >
                        {"GBP"}
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => this.handleCurrency("EUR")}
                    >
                        {"EUR"}
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() => this.handleCurrency("USD")}
                    >
                        {"USD"}
                    </Dropdown.Item>
                </DropdownButton>
                <Button
                    className="et-button"
                    disabled={ !filtersHaveChanged }
                    type="submit"
                >
                    {"Apply"}
                </Button>
            </Form>
        );
    }
}

Filters.propTypes = {
    getFilteredTransactions: PropTypes.func.isRequired
};

export default Filters;
