import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { AddTransaction } from "./AddTransaction";

describe("<AddTransaction />", () => {

    const defaultProps = {
        addTransaction: jest.fn(),
        logoutUser: jest.fn(),
        submittingForm: false
    }

    it("renders without errors or warnings", () => {
        render(<AddTransaction {...defaultProps}/>);
    });

    it("displays a form while the form is not being submitted", () => {
        render(<AddTransaction {...defaultProps}/>);

        const form = document.querySelector("form");
        expect(form).toBeInTheDocument();

        const spinner = document.querySelector(".add-transaction-spinner")
        expect(spinner).not.toBeInTheDocument();
    });

    it("displays a spinner while the form is being submitted", () => {
        const newProps = {
            ...defaultProps,
            submittingForm: true
        }

        render(<AddTransaction {...newProps}/>);

        const form = document.querySelector("form");
        expect(form).not.toBeInTheDocument();

        const spinner = document.querySelector(".add-transaction-spinner")
        expect(spinner).toBeInTheDocument();
    });

    it("auto selects 'groceries' category when 'expense' type is selected, and 'paycheck' when 'income' is selected", () => {
        render(<AddTransaction {...defaultProps}/>);

        // assert category input starts as paycheck by default
        const categoriesInput = document.querySelector("#add-transaction-category");
        expect(categoriesInput.value).toBe("paycheck");

        // select "expense" in type input
        const typeInput = document.querySelector("#add-transaction-type");
        fireEvent.change(typeInput, { target: { value: "expense" } })

        // assert category value changed to groceries automatically
        expect(categoriesInput.value).toBe("groceries");

        // select "income" in type input
        fireEvent.change(typeInput, { target: { value: "income" } })

        // assert category value changed to groceries automatically
        expect(categoriesInput.value).toBe("paycheck");
    });

    it("renders the form with the correct initial categories options", () => {
        render(<AddTransaction {...defaultProps}/>);
        const incomeCategories = ["paycheck", "gift", "other"];

        const categoriesInput = document.querySelector("#add-transaction-category");

        incomeCategories.forEach((category) => {
            const option = within(categoriesInput).getByText(category);
            expect(option).toBeInTheDocument();
        })
    });

    it("changes the available category list to expense categories when expense type is selected", () => {
        render(<AddTransaction {...defaultProps}/>);
        const expenseCategories = ["groceries", "shopping", "rent", "bills", "entertainment", "fuel", "takeaway"];

        // assert expense categories do NOT exist in the document initially
        const categoriesInput = document.querySelector("#add-transaction-category");
        expenseCategories.forEach((category) => {
            const option = within(categoriesInput).queryByText(category)
            expect(option).not.toBeInTheDocument();
        })

        // select "expense" in transaction type input
        const typeInput = document.querySelector("#add-transaction-type");
        fireEvent.change(typeInput, { target: { value: "expense" } })

        // assert expense categories exist in the document
        expenseCategories.forEach((category) => {
            const option = within(categoriesInput).getByText(category);
            expect(option).toBeInTheDocument();
        })
    });

    it("submits the form when submit is clicked",() => {
        const { getByRole } = render(<AddTransaction {...defaultProps}/>);

        // click the submit button
        const button = getByRole("button", {type: "submit"});
        fireEvent(button, new MouseEvent("click"));

        // assert addTransaction() has been triggered
        expect(defaultProps.addTransaction).toHaveBeenCalled();
    })
});
