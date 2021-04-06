import React, { useReducer } from "react";
import { useDispatch } from 'react-redux';
import { formatDate } from "./../../../utilities/formatters";
import { getFilteredTransactions } from "./../../../data/actions/api";
import "react-datepicker/dist/react-datepicker.css";

import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
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

    // React hook
    const [state, dispatch] = useReducer(reducer, initialFormState);

    // Redux dispatch
    const reduxDispatch = useDispatch();

    const componentDidUpdate = () => {
        if (Date.parse(state.endDate) < Date.parse(state.startDate)) {
            this.setState({
                endDate: "",
                formattedEndDate: "",
                filtersHaveChanged: false
            });
        }
    }

    const handleDateRange = (date, type, formattedType) => {

        const { filtersHaveChanged } = state;

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

        reduxDispatch(getFilteredTransactions(state));
        this.setState({ filtersHaveChanged: false });
    }

    const { endDate, startDate, filtersHaveChanged } = state;
    const currencies = ["GBP", "EUR", "USD", "AUD", "ILS"];

    return (
        <Form className="d-flex flex-wrap align-items-end filters" onSubmit={ handleSubmit }>
            <div className="d-flex flex-column">
                <label className="m-0">{"Start Date"}</label>
                <DatePicker
                    endDate={ endDate }
                    onChange={ (date) => handleDateRange(date, "startDate", "formattedStartDate") }
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
                    onChange={ (date) => handleDateRange(date, "endDate", "formattedEndDate") }
                    selected={ endDate }
                    selectsEnd
                    startDate={ startDate }
                />
            </div>
            <DropdownButton
                id="dropdown-item-button"
                title={ state.currency }
            >
                {currencies.map((currency, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => handleCurrency(currency)}
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

export default Filters;
