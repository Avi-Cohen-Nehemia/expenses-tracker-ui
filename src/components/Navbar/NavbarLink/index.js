import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ destination, icon, text, altText, styling, iconClasses, selected }) => {
    return (
        <>
            <Link
                to={destination}
                className={"side-navbar-link text-decoration-none" + (selected ? " font-weight-bold text-white selected-link" : "")}
            >
                <p className="m-0">{text}</p>
                <img
                    className={ iconClasses }
                    src={ icon }
                    alt={ altText }
                    style={ styling }
                />
            </Link>
            <hr/>
        </>
    );
};

export default NavbarLink;