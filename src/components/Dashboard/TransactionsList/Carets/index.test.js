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
});
