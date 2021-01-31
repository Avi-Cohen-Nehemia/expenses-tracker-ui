import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ destination, icon, text, altText, styling, iconClasses }) => {
    return (
        <Link
            to={destination}
            className="side-navbar-link text-decoration-none"
        >
            <p className="m-0">{text}</p>
            <img
                className={ iconClasses }
                src={ icon }
                alt={ altText }
                style={ styling }
            />
        </Link>
    );
};

export default NavbarLink;