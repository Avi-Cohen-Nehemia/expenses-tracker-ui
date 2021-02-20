import React from "react";
import PropTypes from 'prop-types';
import { HashRouter as Router, Link } from "react-router-dom";

const NavbarLink = ({ destination, icon, isVisible, text, altText, styling, iconClasses, selected, handleClick }) => {
    return (
        <Router>
            <Link
                className={
                    "side-navbar-link text-decoration-none d-none d-md-flex"
                    + (selected ? " font-weight-bold text-white selected-link" : "")
                    + (isVisible ? " d-flex" : "")
                }
                onClick={ handleClick }
                to={ destination }
            >
                <p className="m-0">{ text }</p>
                <img
                    alt={ altText }
                    className={ iconClasses }
                    src={ icon }
                    style={ styling }
                />
            </Link>
            <hr className={ "d-none d-md-block" + (isVisible ? " d-flex" : "") }/>
        </Router>
    );
};

NavbarLink.propTypes = {
    destination: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    styling: PropTypes.object,
    iconClasses: PropTypes.string,
    selected: PropTypes.bool,
    handleClick: PropTypes.func
};

export default NavbarLink;
