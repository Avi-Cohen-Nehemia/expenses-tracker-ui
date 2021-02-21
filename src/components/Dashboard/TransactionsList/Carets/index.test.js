import React from "react";
import { render } from "@testing-library/react";
import Carets from "./index";

describe("<Carets />", () => {

    const defaultProps = {
        direction: "asc",
        sortBy: false
    }

    it("renders without errors or warnings", () => {
        render(<Carets {...defaultProps}/>);
    });

    it("renders up AND down caret when sortBy is false", () => {
        render(<Carets {...defaultProps}/>);

        const upCaret = document.querySelector(".caret-up");
        const downCaret = document.querySelector(".caret-down");

        expect(upCaret).toBeInTheDocument();
        expect(downCaret).toBeInTheDocument();
    });
});
