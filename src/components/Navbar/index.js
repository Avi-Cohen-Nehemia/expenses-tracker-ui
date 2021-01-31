import React from "react";
import NavbarLink from "./NavbarLink";
import piggy from "../../assets/images/piggy.png"
import profile from "../../assets/images/profile-avatar.png"
import dashboard from "../../assets/images/dashboard.png"
import logout from "../../assets/images/logout.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="side-navbar">
            <NavbarLink
                destination="/"
                icon={ piggy }
                text="Expenses Tracker"
                altText="piggy bank logo"
                styling={{height: "70px", width: "70px"}}
            />

            <Link
                to="/profile"
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Profile"}</p>
                <img
                    className="mt-1 mb-3"
                    src={ profile }
                    alt="profile logo"
                    style={{ height: "35px", width: "40px" }}
                />
            </Link>
            <Link
                to="/dashboard"
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Dashboard"}</p>
                <img
                    className="mb-2"
                    src={ dashboard }
                    alt="dashboard logo"
                    style={{ height: "50px", width: "50px" }}
                />
            </Link>
            <Link
                to="#"
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Logout"}</p>
                <img
                    className="mt-2 mb-3 ml-2"
                    src={ logout }
                    alt="logout logo"
                    style={{ height: "35px", width: "40px" }}
                />
            </Link>
        </nav>
    );
};

export default Navbar;