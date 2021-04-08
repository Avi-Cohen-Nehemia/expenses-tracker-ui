import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStats, editUserDetails, logout } from "../../data/actions/api";
import history from "../../history";

// components
import Spinner from "../Spinner";
import Navbar from "../Navbar";
import ProfileCard from "./ProfileCard";

// local state + reducer
const initialProfileState = {
    name: "",
    email: "",
    editingInput: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_INPUT_CHANGE" :
            return {
                ...state,
                ...action.payload
            };
        default : return;
    }
};

const Profile = () => {

    const [state, dispatch] = useReducer(reducer, initialProfileState);
    const { email, name, editingInput } = state;

    // Redux hooks + global state
    const {
        userName,
        userEmail,
        loaded,
        submittingForm
    } = useSelector((state) => state);

    const reduxDispatch = useDispatch();

    useEffect(() => {

        if (!loaded) {
            reduxDispatch(getUserStats());
        }

        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                name: userName,
                email: userEmail,
            }
        });
    }, []);

    const handleClick = (num) => {
        dispatch({ editingInput: editingInput === num ? 0 : num })
    }

    const handleChange = (e, input) => {

        let value = e.currentTarget.value;

        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                [input]: value
            }
        });
    }

    const handleSubmit = (e, input) => {

        e.preventDefault();

        reduxDispatch(editUserDetails(input, state[input]));

        dispatch({
            type: "APPLY_CHANGES",
            payload: {
                editingInput: 0
            }
        });
    }

    const logoutUser = () => {
        reduxDispatch(logout());
        history.push("/");
    }

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
                        editingInput={ editingInput === 1 }
                        handleChange={ (e) => handleChange(e, "name") }
                        handleClick ={ () => handleClick(1) }
                        handleSubmit={ (e) => handleSubmit(e, "name")}
                        icon="fas fa-user fa-lg"
                        inputType="text"
                        inputValue={ name }
                        title="Username"
                    />
                    <ProfileCard
                        cardClass="email-card"
                        content={ userEmail ? userEmail : "N/A" }
                        editingInput={ editingInput === 2 }
                        handleChange={ (e) => handleChange(e, "email") }
                        handleClick ={ () => handleClick(2) }
                        handleSubmit={ (e) => handleSubmit(e, "email") }
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

export default Profile;
