import axios from "./../../axios";
import { updateUserStats } from "./state";

export const getUserStats = () => {

    return (dispatch, getState) => {

        const userID = getState().userID;

        axios.get(`users/${userID}`)
        .then(({ data }) => {
            dispatch(updateUserStats(data.data));
        });
 
    };
};