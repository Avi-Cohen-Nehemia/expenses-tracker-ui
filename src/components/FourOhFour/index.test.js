import React from "react";
import { render } from "@testing-library/react";
import FourOhFour from "./index";

describe("<FourOhFour />", () => {

    it("renders without errors or warnings", () => {
        render(<FourOhFour />);
    });
});
