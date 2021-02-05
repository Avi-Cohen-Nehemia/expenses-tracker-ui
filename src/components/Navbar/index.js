import React, { Component } from "react";
import NavbarLink from "./NavbarLink";
import piggy from "../../assets/images/piggy.png"
import profile from "../../assets/images/profile-avatar.png"
import dashboard from "../../assets/images/dashboard.png"
import logout from "../../assets/images/logout.png"
import receipt from "../../assets/images/receipt.png"

class Navbar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            showMobileNavbar: false
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({ showMobileNavbar: !this.state.showMobileNavbar })
    }

    render() {

        const { selected, handleLogout } = this.props;

        return (
            <nav
                className="side-navbar"
                id={ this.state.showMobileNavbar ? "mobile-side-navbar" : "" }
            >
                <div className="burger">
                    <i
                        className="d-sm-block d-md-none fas fa-bars fa-2x text-white mr-3"
                        onClick={ this.handleClick }
                    />
                </div>
                <NavbarLink
                    destination="/"
                    icon={ piggy }
                    text="Expenses Tracker"
                    altText="piggy bank logo"
                    styling={{height: "70px", width: "70px"}}
                    isVisible={ this.state.showMobileNavbar }
                />
                <NavbarLink
                    destination="/dashboard"
                    icon={ dashboard }
                    text="Dashboard"
                    altText="dashboard logo"
                    styling={{ height: "50px", width: "50px" }}
                    iconClasses="mb-2"
                    selected={ selected === "dashboard"}
                    isVisible={ this.state.showMobileNavbar }
                />
                <NavbarLink
                    destination="/profile"
                    icon={ profile }
                    text="Profile"
                    altText="profile logo"
                    styling={{ height: "35px", width: "40px" }}
                    iconClasses="mt-1 mb-3"
                    selected={ selected === "profile"}
                    isVisible={ this.state.showMobileNavbar }
                />
                <NavbarLink
                    destination="/add-transaction"
                    icon={ receipt }
                    text="Add Transaction"
                    altText="add transaction logo"
                    styling={{ height: "40px", width: "45px" }}
                    iconClasses="mt-2 mb-3"
                    selected={ selected === "add-transaction"}
                    isVisible={ this.state.showMobileNavbar }
                />
                <NavbarLink
                    destination="#"
                    icon={ logout }
                    text="Logout"
                    altText="logout logo"
                    styling={{ height: "35px", width: "40px" }}
                    iconClasses="mt-2 mb-3 ml-1"
                    handleClick={ handleLogout }
                    isVisible={ this.state.showMobileNavbar }
                />
            </nav>
        );
    }
}

export default Navbar;
