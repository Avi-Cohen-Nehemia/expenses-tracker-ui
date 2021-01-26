const getUserStats = (state, action) => {
    return {
        ...state,
        username: action.username,
        balance: action.balance,
        transactions: action.transactions,
        loaded: true,
    };
};

const addTransaction = (state, action) => {
    return {
        ...state,
        transactions: [
            state.transactions,
            action.transaction
        ]
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_STATS" : return getUserStats(state, action)
        case "ADD_TRANSACTION" : return addTransaction(state, action);
        default: return state;
    };
};

export default reducer;
