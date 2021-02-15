import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import ProfileCard from "./ProfileCard";

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: props.userName,
            email: props.userEmail,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e, input) {
        e.preventDefault();

        this.props.editUserDetails(input, this.state[input]);
    }

    render() {

        const { userEmail, loaded, logoutUser, userName, submittingForm } = this.props;
        const { email, name } = this.state;

        return (
            loaded ?
            <div className="profile-grid">
                <Navbar
                    handleLogout={ logoutUser }
                    selected="profile"
                />
                <h1 className="page-header display-3 p-0">{ "Profile" }</h1>
                {
                    submittingForm ?
                    <Spinner stylingClasses="add-transaction-spinner"/> :
                    <>
                        <ProfileCard
                            cardClass="username-card"
                            content={ userName }
                            handleChange={ (e) => this.handleChange(e, "name") }
                            handleSubmit={ (e) => this.handleSubmit(e, "name")}
                            icon="fas fa-user fa-lg"
                            inputType="text"
                            inputValue={ name }
                            title="Username"
                        />
                        <ProfileCard
                            cardClass="email-card"
                            content={ userEmail ? userEmail : "N/A" }
                            handleChange={ (e) => this.handleChange(e, "email") }
                            handleSubmit={ (e) => this.handleSubmit(e, "email") }
                            icon="far fa-envelope fa-lg"
                            inputToSubmit="emailInput"
                            inputType="email"
                            inputValue={ email }
                            title="Email"
                        />
                    </>
                }
            </div>
            : <Spinner stylingClasses="add-transaction-spinner"/>
        );
    }
}

Profile.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    getUserStats: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired
};

export default Profile;
