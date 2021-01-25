const getBalance = (state, action) => {
    return {
        ...state,
        balance: action.balance,
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
        case "GET_BALANCE" : return getBalance(state, action)
        case "ADD_EXPENSE" : return addExpense(state, action);
        default: return state;
    };
};

export default reducer;
