import React from "react";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import FormInput from "./index";

describe("<FormInput />", () => {

    const defaultProps = {
        description: "random-description",
        descriptionID: "description-id",
        inputValue: "wombats",
        controlId: "control-id",
        inputLabel: "input-label",
        inputType: "text",
        inputPlaceholder: "",
        onChange: jest.fn(),
        required: true
    }

    it("renders without errors or warnings", () => {
        render(<FormInput {...defaultProps}/>);
    });

    it("creates the input attributes using the correct props", () => {
        render(<FormInput {...defaultProps}/>);

        const inputLabel = document.querySelector(".form-label");
        expect(inputLabel).toHaveAttribute("for", defaultProps.controlId);
        expect(inputLabel).toHaveTextContent(defaultProps.inputLabel);

        const input = document.querySelector(".form-control");
        expect(input).toHaveAttribute("aria-describedby", defaultProps.descriptionID);
        expect(input).toHaveAttribute("placeholder", defaultProps.inputPlaceholder);
        expect(input).toHaveAttribute("required");
        expect(input).toHaveAttribute("type", defaultProps.inputType);
        expect(input).toHaveAttribute("value", defaultProps.value);
    });
});
