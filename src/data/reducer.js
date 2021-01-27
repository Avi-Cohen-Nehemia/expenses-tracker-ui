const updateUserDetails = (state, action) => {
    return {
        ...state,
        username: action.username,
        userID: action.id,
    };
};

const getUserStats = (state, action) => {
    return {
        ...state,
        username: action.username,
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
