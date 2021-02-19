import React from "react";
import { render } from "@testing-library/react";
import FourOhFour from "./index";

describe("<FourOhFour />", () => {

    it("renders without errors or warnings", () => {
        render(<FourOhFour />);
    });

    it("displays all the text correctly", () => {
        const { getByText } = render(<FourOhFour />);

        expect(getByText("Oops!")).toBeInTheDocument();
        expect(getByText("We can't seem to find the page you are looking for.")).toBeInTheDocument();
        expect(getByText("Navigate back to safety")).toBeInTheDocument();
    });
});
