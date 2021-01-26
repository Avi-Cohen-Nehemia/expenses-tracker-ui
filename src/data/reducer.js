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
        case "GET_USER_STATS" : return getUserStats(state, action)
        default: return state;
    };
};

export default reducer;
