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

    // it("displays all the text correctly", () => {
    //     const { getByText } = render(<AddTransaction />);

    //     expect(getByText("Oops!")).toBeInTheDocument();
    //     expect(getByText("We can't seem to find the page you are looking for.")).toBeInTheDocument();
    //     expect(getByText("Navigate back to safety")).toBeInTheDocument();
    // });

    // it("displays a 404 image", () => {
    //     const { getByRole } = render(<AddTransaction />);

    //     expect(getByRole("img", {alt: "404 error"})).toBeInTheDocument();
    // });
});
