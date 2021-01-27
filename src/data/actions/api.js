import axios from "./../../axios";
import { updateUserStats } from "./state";
import { updateUserDetails } from "./state";
import history from "../../history";

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

        axios.post("transactions/create", {
            amount: data.transactionAmount,
            type: data.transactionType,
            category: data.transactionCategory,
            user_id: userID
        }).then(() => {
            history.push("/dashboard");
        });
    };
};

export const createNewUser = (data) => {

    return (dispatch) => {

        axios.post("users/create", {
            name: data.username,
            password: data.password,
        }).then(() => {
            dispatch(updateUserDetails(data.data));
        }).then(() => {
            history.push("/dashboard");
        });
    };
};
