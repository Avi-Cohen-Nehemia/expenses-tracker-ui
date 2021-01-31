import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="side-navbar">
            <Link to="/">
                
            </Link>
            <Link to="/profile">

            </Link>
            <Link to="/dashboard">

            </Link>
            <Button>{"Logout"}</Button>
        </nav>
    );
};

export default Navbar;