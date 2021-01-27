import initialState from "./initialState";

const updateUserDetails = (state, action) => {
    return {
        ...initialState,
        userID: action.userID,
        username: action.username,
    };
};

const getUserStats = (state, action) => {
    return {
        ...state,
        balance: action.balance,
        transactions: action.transactions,
        loaded: true,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_DETAILS" : return updateUserDetails(state, action);
        case "GET_USER_STATS" : return getUserStats(state, action);
        default: return state;
    };
};

export default reducer;
