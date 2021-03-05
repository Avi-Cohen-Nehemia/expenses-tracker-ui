import axios from "./../../axios";
import {
    updateUserStats,
    updateUserDetails,
    loginUser,
    logoutUser,
    reloadDashboard,
    submittingForm,
    changeUserDetails
} from "./state";
import history from "../../history";
import Swal from "sweetalert2";

export const login = (data) => {

    return (dispatch) => {

        // dispatch this method to display a spinner to the user while
        // they are waiting for their request to be processed
        dispatch(submittingForm());

        // make a post request to the login controller
        axios.post("login", {
            name: data.username,
            password: data.password,

        // if successful remove the spinner, log in the user and populate
        // the global state with all of their details and stats.
        }).then(({ data }) => {
            dispatch(submittingForm());
            dispatch(loginUser());
            dispatch(updateUserDetails(data));

        // then redirect the user automatically to their dashboard
        }).then(() => {
            history.push("/dashboard");

        // if an error occurred, remove the displayed spinner
        // and figure out which error to display
        }).catch(({ response }) => {

            const error = response.data.errors
            let title = "";
            let text = "Please fill out the form correctly"

            if (error.password) {
                title = error.password[0];
            }

            if (error.name) {
                title = error.name[0];
            }

            if (error.error) {
                title = error.error;
                text = "Please try again"
            }

            dispatch(submittingForm());
            Swal.fire({
                icon: "error",
                title: title,
                text: text
            });
        });
    };
};

export const getUserStats = () => {

    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        axios.get(`users/${userID}`, {
            headers: { Authorization: `Bearer ${accessToken}`}
        }).then(({ data }) => {
            dispatch(updateUserStats(data.data));
        });
    };
};

export const editUserDetails = (property, value) => {
    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        // display a spinner to the user while they are waiting for their request to be processed
        dispatch(submittingForm());

        // make a put request with property and the value provided from the form
        // use the user id and access token stored in global state
        axios.put(`users/${userID}`, {
            [property]: value
        }, {
            headers: { Authorization: `Bearer ${accessToken}`}

        // if successful, make a get request to get the new user details
        }).then(() => {
            axios.get(`users/${userID}`, {
                headers: { Authorization: `Bearer ${accessToken}`}
            }).then(({ data }) => {
                dispatch(changeUserDetails(data.data));
            }).then(() => {
                // remove spinner and display a success alert
                dispatch(submittingForm());
                Swal.fire({
                    icon: "success",
                    title: "Personal details saved successfully",
                    showConfirmButton: true,
                });
            // if GET failed remove spinner and display an error alert
            }).catch(() => {
                dispatch(submittingForm());
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
                });
            });

        // if the PUT request failed, remove the spinner and
        // display the custom error message provided by the back end
        }).catch(({ response }) => {

            dispatch(submittingForm());
            const error = response.data.error

            Swal.fire({
                icon: "error",
                title: error.title,
                text: error.text,
            });
        });
    };
};

export const addTransaction = (data) => {

    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        // display a spinner by triggering submittingForm
        dispatch(submittingForm());

        // post the new transaction using the values from the form
        // and the user id + token that are stored in globaL state
        axios.post("transactions", {
            amount: data.transactionAmount,
            type: data.transactionType,
            category: data.transactionCategory,
            user_id: userID
        }, {
            headers: { Authorization: `Bearer ${accessToken}`}

        // if successful, remove the spinner and display a success alert
        }).then(() => {
            dispatch(submittingForm());
            dispatch(reloadDashboard());
            Swal.fire({
                icon: "success",
                title: "Transaction saved successfully",
                showConfirmButton: true,
            });

        // if an error occurred, remove the spinner and figure out which
        // alert message to display to the user.
        }).catch(({ response }) => {

            dispatch(submittingForm());

            const error = response.data.errors
            let title = "Oops...";
            let text = "Something went wrong! Please try again.";

            if (error.amount) {
                title = error.amount[0];
                text = "Please fill out the form correctly";
            }

            Swal.fire({
                icon: "error",
                title: title,
                text: text,
            });
        });
    };
};

export const createNewUser = (data) => {

    return (dispatch) => {

        dispatch(submittingForm());

        axios.post("users", {
            name: data.username,
            password: data.password,
        }).then(() => {
            axios.post("login", {
                name: data.username,
                password: data.password,
            }).then(({ data }) => {
                dispatch(loginUser());
                dispatch(updateUserDetails(data));
            }).then(() => {
                dispatch(submittingForm());
                history.push("/dashboard");
            });
        }).catch(() => {
            dispatch(submittingForm());
            Swal.fire({
                icon: "error",
                title: "Username already taken.",
                text: "Please try a different username",
            });
        });
    };
};

export const logout = () => {

    return (dispatch) => {
        dispatch(logoutUser());
    };
};

export const deleteTransaction = (transactionID) => {

    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        // tell the dashboard it needs to reload
        dispatch(reloadDashboard());

        // make a transaction delete request using the transaction id
        axios.delete(`transactions/${transactionID}`, {
            headers: { Authorization: `Bearer ${accessToken}`}

        // if successful display a success message
        }).then(({ data }) => {
            Swal.fire({
                icon: "success",
                title: data.message,
                showConfirmButton: true,
            });

        // and update the user stats using the user id which is stored in the global state
        }).then(() => {
            axios.get(`users/${userID}`, {
                headers: { Authorization: `Bearer ${accessToken}`}
            }).then(({ data }) => {
                dispatch(updateUserStats(data.data));
            });

        // if error occurred display an error message
        }).catch(() => {
            dispatch(reloadDashboard());
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again.",
            });
        });
    };
}
