import React from "react";
import { render } from "@testing-library/react";
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

    // it("displays a 404 image", () => {
    //     const { getByRole } = render(<AddTransaction />);

    //     expect(getByRole("img", {alt: "404 error"})).toBeInTheDocument();
    // });
});
