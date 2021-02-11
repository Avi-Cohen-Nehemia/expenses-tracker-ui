import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import ProfileCard from "./ProfileCard";

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: props.username,
            email: props.email,
        }
    }

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        }
    }

    render() {

        const { loaded, logoutUser } = this.props;
        const { username, email } = this.state;

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
                    icon="fas fa-user fa-lg"
                    title="Username"
                />
                <ProfileCard
                    cardClass="email-card"
                    content={ email ? email : "N/A" }
                    icon="far fa-envelope fa-lg"
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
