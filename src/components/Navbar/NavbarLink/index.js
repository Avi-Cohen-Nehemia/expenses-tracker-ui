import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ destination, icon, text, altText, styling, iconClasses, selected, handleClick }) => {
    return (
        <>
            <Link
                to={ destination }
                className={"side-navbar-link text-decoration-none d-none d-md-flex" + (selected ? " font-weight-bold text-white selected-link" : "")}
                onClick={ handleClick }
            >
                <p className="m-0">{ text }</p>
                <img
                    className={ iconClasses }
                    src={ icon }
                    alt={ altText }
                    style={ styling }
                />
            </Link>
            <hr className="d-none d-md-block"/>
        </>
    );
};

export default NavbarLink;