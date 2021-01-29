import axios from "./../../axios";
import { updateUserStats } from "./state";
import { updateUserDetails } from "./state";
import { loginUser } from "./state";
import { logoutUser } from "./state";
import history from "../../history";

export const login = (data) => {

    return (dispatch) => {

        axios.post("login", {
            name: data.username,
            password: data.password,
        }).then(({ data }) => {
            dispatch(loginUser());
            dispatch(updateUserDetails(data));
        }).then(() => {
            history.push("/dashboard");
        });
    };
};

export const getUserStats = () => {

    return (dispatch, getState) => {

        const userID = getState().userID;

        axios.get(`users/${userID}`)
        .then(({ data }) => {
            dispatch(updateUserStats(data.data));
        });
    };
};

export const addTransaction = (data) => {

    return (dispatch, getState) => {

        const userID = getState().userID;
        const accessToken = getState().accessToken;

        axios.post("transactions", {
            amount: data.transactionAmount,
            type: data.transactionType,
            category: data.transactionCategory,
            user_id: userID
        }, {
            headers: { Authorization: `Bearer ${accessToken}`}
        }).then(() => {
            history.push("/dashboard");
        });
    };
};

export const createNewUser = (data) => {

    return (dispatch) => {

        axios.post("users", {
            name: data.username,
            password: data.password,
        }).then(({ data }) => {
            dispatch(updateUserDetails(data.data));
        }).then(() => {
            history.push("/dashboard");
        });
    };
};

export const logout = () => {

    return (dispatch) => {
        dispatch(logoutUser());
    };
};
