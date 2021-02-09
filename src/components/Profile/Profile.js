import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import DashboardCard from "../Dashboard/DashboardCard";

class Profile extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        }
    }

    render() {

        const { username, loaded, logoutUser } = this.props;

        return (
            loaded ?
            <div className="profile-grid">
                <Navbar
                    handleLogout={ logoutUser }
                    selected="profile"
                />
                <h1 className="page-header display-3 p-0">{ "Profile" }</h1>
                <DashboardCard
                    cardClass="username-card"
                    content={ username }
                    icon="fas fa-user fa-lg"
                    title="Username"
                />
            </div>
            : <Spinner />
        );
    }
}

Profile.propTypes = {
    getUserStats: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
};

export default Profile;
