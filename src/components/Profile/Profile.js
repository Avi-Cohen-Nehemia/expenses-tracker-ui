import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import ProfileCard from "./ProfileCard";

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            usernameInput: props.username,
            emailInput: props.email,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        }
    }

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
    }

    render() {

        const { email, loaded, logoutUser, username } = this.props;
        const { emailInput, usernameInput } = this.state;

        return (
            loaded ?
            <div className="profile-grid">
                <Navbar
                    handleLogout={ logoutUser }
                    selected="profile"
                />
                <h1 className="page-header display-3 p-0">{ "Profile" }</h1>
                <ProfileCard
                    cardClass="username-card"
                    content={ username }
                    handleChange={ (e) => this.handleChange(e, "usernameInput") }
                    icon="fas fa-user fa-lg"
                    inputType="text"
                    inputValue={ usernameInput }
                    title="Username"
                />
                <ProfileCard
                    cardClass="email-card"
                    content={ email ? email : "N/A" }
                    handleChange={ (e) => this.handleChange(e, "emailInput") }
                    icon="far fa-envelope fa-lg"
                    inputType="email"
                    inputValue={ emailInput }
                    title="Email"
                />
            </div>
            : <Spinner />
        );
    }
}

Profile.propTypes = {
    getUserStats: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

export default Profile;
