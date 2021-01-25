import axios from "./../../axios";
import { updateBalance } from "./state";

export const getBalance = () => {

    return (dispatch, getState) => {

        const userID = getState().userID;

        axios.get(`users/${userID}`)
        .then(({ data }) => {
            dispatch(updateBalance(data.data));
        });
 
    };
};