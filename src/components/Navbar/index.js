import React from "react";
import NavbarLink from "./NavbarLink";
import piggy from "../../assets/images/piggy.png"
import profile from "../../assets/images/profile-avatar.png"
import dashboard from "../../assets/images/dashboard.png"
import logout from "../../assets/images/logout.png"

const Navbar = ({ selected }) => {
    return (
        <nav className="side-navbar">
            <NavbarLink
                destination="/"
                icon={ piggy }
                text="Expenses Tracker"
                altText="piggy bank logo"
                styling={{height: "70px", width: "70px"}}
            />
            <NavbarLink
                destination="/profile"
                icon={ profile }
                text="Profile"
                altText="profile logo"
                styling={{ height: "35px", width: "40px" }}
                iconClasses="mt-1 mb-3"
            />
            <NavbarLink
                destination="/dashboard"
                icon={ dashboard }
                text="Dashboard"
                altText="dashboard logo"
                styling={{ height: "50px", width: "50px" }}
                iconClasses="mb-2"
                selected={ selected === "dashboard"}
            />
            <NavbarLink
                destination="#"
                icon={ logout }
                text="Logout"
                altText="logout logo"
                styling={{ height: "35px", width: "40px" }}
                iconClasses="mt-2 mb-3 ml-2"
            />
        </nav>
    );
};

export default Navbar;