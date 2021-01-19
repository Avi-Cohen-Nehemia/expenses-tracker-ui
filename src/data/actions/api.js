import axios from "./../../axios";
import { updateBalance } from "./state";

export const getBalance = () => {

    return (dispatch, getState) => {

        axios.get('/balance')
        .then(({ data }) => {
            dispatch(updateBalance(data.data));
        });

    };

};