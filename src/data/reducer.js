const getUserStats = (state, action) => {
    return {
        ...state,
        username: action.username,
        balance: action.balance,
        transactions: action.transactions,
        loaded: true,
    };
};

const addExpense = (state, action) => {
    return {
        ...state,
        expenses: state.expenses.concat()
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_STATS" : return getUserStats(state, action)
        case "ADD_EXPENSE" : return addExpense(state, action);
        default: return state;
    };
};

export default reducer;
