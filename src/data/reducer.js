import initialState from "./initialState";

const getStats = (state, action) => {
    return {
        ...state,
    }
};

const addExpense = (state, action) => {
    return {
        ...state,
        expenses: state.expenses.concat()
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_STATS" : return getStats(state, action)
        case "ADD_EXPENSE" : return addExpense(state, action);
        default: return state;
    }
};

export default reducer;
