import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import ProfileCard from "./ProfileCard";
import Swal from "sweetalert2";

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: props.userName,
            email: props.userEmail,
            editingInput: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        }
    }

    handleClick(num) {
        this.setState({ editingInput: this.state.editingInput === num ? 0 : num })
    }

    handleChange(e, input) {
        let change = {};
        change[input] = e.currentTarget.value;
        this.setState(change);
    }

    handleSubmit(e, input) {

        e.preventDefault();

        const { email, name } = this.state;
        let formIsValid = true;
        let isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (input === "name" && name.length < 3) {
            formIsValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Invalid form submission.',
                text: 'Username must be at least 3 characters long',
            });
        }

        if (input === "email" && !email.match(isEmail) ) {
            formIsValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Invalid form submission.',
                text: 'Email must be a valid address',
            });
        }

        if (formIsValid) {
            this.props.editUserDetails(input, this.state[input]);
            this.setState({ editingInput: 0 });
        }
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
                            editingInput={ this.state.editingInput === 1 }
                            handleChange={ (e) => this.handleChange(e, "name") }
                            handleClick ={ () => this.handleClick(1) }
                            handleSubmit={ (e) => this.handleSubmit(e, "name")}
                            icon="fas fa-user fa-lg"
                            inputType="text"
                            inputValue={ name }
                            title="Username"
                        />
                        <ProfileCard
                            cardClass="email-card"
                            content={ userEmail ? userEmail : "N/A" }
                            editingInput={ this.state.editingInput === 2 }
                            handleChange={ (e) => this.handleChange(e, "email") }
                            handleClick ={ () => this.handleClick(2) }
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
