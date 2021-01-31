import React from "react";
import piggy from "../../assets/images/piggy.png"
import profile from "../../assets/images/profile-avatar.png"
import dashboard from "../../assets/images/dashboard.png"
import logout from "../../assets/images/logout.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="side-navbar">
            <Link
                to="/"
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Expenses Tracker"}</p>
                <img
                    src={ piggy }
                    alt="piggy bank logo"
                    style={{ height: "75px", width: "75px" }}
                />
            </Link>
            <Link
                to="/profile"
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Profile"}</p>
                <img
                    className="mt-2 mb-3"
                    src={ profile }
                    alt="profile logo"
                    style={{ height: "40px", width: "45px" }}
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
                    style={{ height: "55px", width: "55px" }}
                />
            </Link>
            <div
                className="side-navbar-link text-decoration-none"
            >
                <p className="m-0">{"Logout"}</p>
                <img
                    className="mt-2 mb-3 ml-2"
                    src={ logout }
                    alt="logout logo"
                    style={{ height: "40px", width: "45px" }}
                />
            </div>
        </nav>
    );
};

export default Navbar;