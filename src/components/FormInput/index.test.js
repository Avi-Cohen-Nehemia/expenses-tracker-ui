import React from "react";
import { render } from "@testing-library/react";
import FormInput from "./index";

describe("<FormInput />", () => {

    const defaultProps = {
        description: "random-description",
        descriptionID: "description-id",
        inputValue: "",
        controlId: "control-id",
        inputLabel: "input-label",
        inputType: "text",
        inputPlaceholder: "",
        onChange: jest.fn(),
        required: false
    }

    it("renders without errors or warnings", () => {
        render(<FormInput {...defaultProps}/>);
    });

    // it("displays the content and title props as text", () => {
    //     const { getByText } = render(<DashboardCard {...defaultProps}/>);

    //     expect(getByText(defaultProps.content)).toBeInTheDocument();
    //     expect(getByText(defaultProps.title)).toBeInTheDocument();
    // });

    // it("passes the icon and cardClasses to the correct elements", () => {
    //     render(<DashboardCard {...defaultProps}/>);

    //     const cardContainer = document.querySelector(".card");
    //     expect(cardContainer).toHaveClass(defaultProps.cardClass);

    //     const cardIcon = document.querySelector("i");
    //     expect(cardIcon).toHaveClass(defaultProps.icon);
    // });
});
