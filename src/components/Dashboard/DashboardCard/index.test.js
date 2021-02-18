import React from "react";
import { render } from "@testing-library/react";
import DashboardCard from "./index";

describe("<DashboardCard />", () => {

    const defaultProps = {
        cardClass: "some-random-class",
        content: "I love wombats",
        title: "Australia",
        icon: "wombat-icon"
    }

    it("displays the content and title props as text", () => {
        const { getByText } = render(<DashboardCard {...defaultProps}/>);

        expect(getByText(defaultProps.content)).toBeInTheDocument();
        expect(getByText(defaultProps.title)).toBeInTheDocument();
    });

    it("passes the icon and cardClasses to the correct elements", () => {
        const { container } = render(<DashboardCard {...defaultProps}/>);
        
        expect(container.firstChild).toHaveClass(defaultProps.cardClass);
    });
});
