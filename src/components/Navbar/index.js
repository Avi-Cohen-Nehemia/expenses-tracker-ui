import React, { Component } from "react";
import PropTypes from 'prop-types';
import NavbarLink from "./NavbarLink";
import piggy from "../../assets/images/piggy.png";
import profile from "../../assets/images/profile-avatar.png";
import dashboard from "../../assets/images/dashboard.png";
import logout from "../../assets/images/logout.png";
import receipt from "../../assets/images/receipt.png";
import Swal from "sweetalert2";

class Navbar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            showMobileNavbar: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    handleClick() {
        this.setState({ showMobileNavbar: !this.state.showMobileNavbar })
    }

    logoutUser() {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.handleLogout();
            }
        });
    }

    render() {

        const { selected } = this.props;
        const { showMobileNavbar } = this.state;

        return (
            <nav
                className="side-navbar"
                id={ showMobileNavbar ? "mobile-side-navbar" : "" }
            >
                <div className="burger">
                    <i
                        className="d-sm-block d-md-none fas fa-bars fa-2x text-white mr-3"
                        onClick={ this.handleClick }
                    />
                </div>
                <NavbarLink
                    altText="piggy bank logo"
                    destination="/"
                    icon={ piggy }
                    isVisible={ showMobileNavbar }
                    styling={{ height: "70px", width: "70px" }}
                    text="Expenses Tracker"
                />
                <NavbarLink
                    altText="dashboard logo"
                    destination="/dashboard"
                    icon={ dashboard }
                    iconClasses="mb-2"
                    isVisible={ showMobileNavbar }
                    selected={ selected === "dashboard"}
                    styling={{ height: "50px", width: "50px" }}
                    text="Dashboard"
                />
                <NavbarLink
                    altText="profile logo"
                    destination="/profile"
                    icon={ profile }
                    iconClasses="mt-1 mb-3"
                    isVisible={ showMobileNavbar }
                    selected={ selected === "profile"}
                    styling={{ height: "35px", width: "40px" }}
                    text="Profile"
                />
                <NavbarLink
                    altText="add transaction logo"
                    destination="/add-transaction"
                    icon={ receipt }
                    iconClasses="mt-2 mb-3"
                    isVisible={ showMobileNavbar }
                    selected={ selected === "add-transaction"}
                    styling={{ height: "40px", width: "45px" }}
                    text="Add Transaction"
                />
                <NavbarLink
                    altText="logout logo"
                    destination="#"
                    handleClick={ this.logoutUser }
                    icon={ logout }
                    iconClasses="mt-2 mb-3 ml-1"
                    isVisible={ showMobileNavbar }
                    styling={{ height: "35px", width: "40px" }}
                    text="Logout"
                />
            </nav>
        );
    }
}

Navbar.propTypes = {
    handleLogout: PropTypes.func.isRequired,
    selected: PropTypes.string
};

export default Navbar;
