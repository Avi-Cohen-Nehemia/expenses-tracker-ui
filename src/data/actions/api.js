import axios from "./../../axios";
import { updateUserStats } from "./state";
import { updateUserDetails } from "./state";
import { loginUser } from "./state";
import { logoutUser } from "./state";
import { reloadDashboard } from "./state";
import { submittingForm } from "./state";
import { changeUserDetails } from "./state";
import history from "../../history";
import Swal from "sweetalert2";

export const login = (data) => {

    return (dispatch) => {

        axios.post("login", {
            name: data.username,
            password: data.password,
        }).then(({ data }) => {
            dispatch(loginUser());
            dispatch(updateUserDetails(data));
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect credentials',
                text: 'Please try again',
            });
        }).then(() => {
            history.push("/dashboard");
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

        dispatch(submittingForm());

        axios.put(`users/${userID}`, {
            [property]: value
        }, {
            headers: { Authorization: `Bearer ${accessToken}`}
        }).then(() => {
            axios.get(`users/${userID}`, {
                headers: { Authorization: `Bearer ${accessToken}`}
            }).then(({ data }) => {
                dispatch(changeUserDetails(data.data));
            }).then(() => {
                dispatch(submittingForm());
                Swal.fire({
                    icon: 'success',
                    title: 'Personal details saved successfully',
                    showConfirmButton: true,
                });
            }).catch(() => {
                dispatch(submittingForm());
            });
        }).catch(() => {
            dispatch(submittingForm());
        });
    };
};

export const addTransaction = (data) => {

    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        dispatch(submittingForm());

        axios.post("transactions", {
            amount: data.transactionAmount,
            type: data.transactionType,
            category: data.transactionCategory,
            user_id: userID
        }, {
            headers: { Authorization: `Bearer ${accessToken}`}
        }).then(() => {
            dispatch(submittingForm());
            dispatch(reloadDashboard());
            Swal.fire({
                icon: 'success',
                title: 'Transaction saved successfully',
                showConfirmButton: true,
            });
        }).catch(() => {
            dispatch(submittingForm());
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
            });
        });
    };
};

export const createNewUser = (data) => {

    return (dispatch) => {

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
                dispatch(reloadDashboard())
                history.push("/dashboard");
            });
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Username already taken.',
                text: 'Please try a different username',
            });
        });
    };
};

export const logout = () => {

    return (dispatch) => {
        dispatch(logoutUser());
    };
};
