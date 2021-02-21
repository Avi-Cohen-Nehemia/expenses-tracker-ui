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

    it("renders without errors or warnings", () => {
        render(<DashboardCard {...defaultProps}/>);
    });

    it("displays the content and title props as text", () => {
        const { getByText } = render(<DashboardCard {...defaultProps}/>);

        expect(getByText(defaultProps.content)).toBeInTheDocument();
        expect(getByText(defaultProps.title)).toBeInTheDocument();
    });

    it("passes the icon and cardClasses to the correct elements", () => {
        render(<DashboardCard {...defaultProps}/>);

        const cardContainer = document.querySelector(".card");
        expect(cardContainer).toHaveClass(defaultProps.cardClass);

        const cardIcon = document.querySelector("i");
        expect(cardIcon).toHaveClass(defaultProps.icon);
    });
});
