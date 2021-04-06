import React, { useEffect, useReducer } from "react";
import { useDispatch } from 'react-redux';
import { formatDate } from "./../../../utilities/formatters";
import { getFilteredTransactions } from "./../../../data/actions/api";
import "react-datepicker/dist/react-datepicker.css";

// components used
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// state + reducer
const initialFiltersState = {
    startDate: new Date("2-1-2021"),
    endDate: new Date(),
    formattedStartDate: formatDate(new Date("2-1-2021")),
    formattedEndDate: formatDate(new Date()),
    currency: "GBP",
    filtersHaveChanged: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "APPLY_CHANGES" :
            return {
                ...state,
                ...action.payload
            };
        default : return;
    }
};

const Filters = () => {

    // React hook
    const [state, dispatch] = useReducer(reducer, initialFiltersState);

    // Redux dispatch
    const reduxDispatch = useDispatch();

    const { endDate, startDate, filtersHaveChanged } = state;

    useEffect(() => {

        // clear end date if dates are in illogical order
        if (Date.parse(endDate) < Date.parse(startDate)) {
            dispatch({
                type: "APPLY_CHANGES",
                payload: {
                    endDate: "",
                    formattedEndDate: "",
                    filtersHaveChanged: false
                }
            });
        }

        // make sure apply is enabled only when both dates are defined
        if (!startDate || !endDate) {
            dispatch({
                type: "APPLY_CHANGES",
                payload: {
                    filtersHaveChanged: false
                }
            });
        }

    }, [endDate, startDate]);

    // select dates
    const handleDateRange = (date, type, formattedType) => {
        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                [type]: date,
                [formattedType]: formatDate(date),
                filtersHaveChanged: true
            }
        });
    }

    // select currency
    const handleCurrency = (currency) => {
        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                currency: currency,
                filtersHaveChanged: startDate && endDate ? true : false
            }
        });
    }

    // apply filters
    const handleSubmit = (e) => {

        e.preventDefault();

        reduxDispatch(getFilteredTransactions(state));
        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                filtersHaveChanged: false
            }
        });
    }

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
