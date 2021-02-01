import initialState from "./initialState"

const loginUser = (state, action) => {
    return {
        ...state,
        isLoggedIn: true
    };
};

const updateUserDetails = (state, action) => {
    return {
        ...state,
        userID: action.userID,
        username: action.username,
        accessToken: action.accessToken,
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
        case "LOGIN_USER" : return loginUser(state, action);
        case "UPDATE_USER_DETAILS" : return updateUserDetails(state, action);
        case "GET_USER_STATS" : return getUserStats(state, action);
        case "LOGOUT_USER" : return initialState;
        default: return state;
    };
};

export default reducer;
