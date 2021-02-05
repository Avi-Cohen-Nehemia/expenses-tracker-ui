import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner"
import Navbar from "../Navbar";
import DashboardCard from "../Dashboard/DashboardCard";

class Profile extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        };
    };

    render() {

        const { username, loaded } = this.props;

        return (
            loaded ?
            <div className="profile-grid">
                <Navbar
                    selected="profile"
                    handleLogout={ this.props.logoutUser }
                />
                <h1 className="page-header display-3">{ "Profile" }</h1>
                <DashboardCard
                    cardClass="username-card"
                    content={ username }
                    icon="fas fa-user fa-lg"
                    title="Username"
                />
            </div>
            : <Spinner />
        );
    };
};

Profile.propTypes = {
    getUserStats: PropTypes.func,
};

export default Profile;
