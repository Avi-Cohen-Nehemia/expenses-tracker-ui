import React, { useReducer } from "react";
import { formatDate } from "./../../../utilities/formatters";
import { getFilteredTransactions } from "./../../../data/actions/api";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const initialFiltersState = {
    startDate: new Date("1-1-2021"),
    endDate: new Date(),
    formattedStartDate: formatDate(new Date("1-1-2021")),
    formattedEndDate: formatDate(new Date()),
    currency: "GBP",
    filtersHaveChanged: false
}

const Filters = () => {

    const componentDidUpdate = () => {
        if (Date.parse(this.state.endDate) < Date.parse(this.state.startDate)) {
            this.setState({
                endDate: "",
                formattedEndDate: "",
                filtersHaveChanged: false
            });
        }
    }

    const handleDateRange = (date, type, formattedType) => {

        const { filtersHaveChanged } = this.state;

        this.setState({
            [type]: date,
            [formattedType]: formatDate(date),
            filtersHaveChanged: type === "endDate" ? true : filtersHaveChanged
        });
    }

    const handleCurrency = (currency) => {
        this.setState({
            currency: currency,
            filtersHaveChanged: true
        });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        this.props.getFilteredTransactions(this.state)
        this.setState({ filtersHaveChanged: false });
    }

    const { endDate, startDate, filtersHaveChanged } = this.state;
    const currencies = ["GBP", "EUR", "USD", "AUD", "ILS"];

    return (
        <Form className="d-flex flex-wrap align-items-end filters" onSubmit={ this.handleSubmit }>
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
            <DropdownButton
                id="dropdown-item-button"
                title={ this.state.currency }
            >
                {currencies.map((currency, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => this.handleCurrency(currency)}
                    >
                        { currency }
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <Button
                className="et-button filters-submit-button"
                disabled={ !filtersHaveChanged }
                type="submit"
            >
                {"APPLY"}
            </Button>
        </Form>
    );

}

Filters.propTypes = {
    getFilteredTransactions: PropTypes.func.isRequired
};

export default Filters;
