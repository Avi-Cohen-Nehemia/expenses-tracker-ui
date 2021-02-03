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

const mostSpentOnCategory = (state, action) => {

    const mostSpentOn = state.totalExpenseByCategory.reduce((prevCategory, currentCategory) => {
        return prevCategory.amount > currentCategory.amount ? prevCategory : currentCategory
    });

    return {
        ...state,
        mostSpentOnCategory: mostSpentOn.category
    }
};

const getUserStats = (state, action) => {
    return {
        ...state,
        balance: action.balance,
        totalIncome: action.totalIncome,
        totalExpense: action.totalExpense,
        transactions: action.transactions,
        totalExpenseByCategory: action.totalExpenseByCategory,
        loaded: true,
    };
};

const reloadDashboard = (state, action) => {
    return {
        ...state,
        loaded: false,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER" : return loginUser(state, action);
        case "UPDATE_USER_DETAILS" : return mostSpentOnCategory(updateUserDetails(state, action));
        case "GET_USER_STATS" : return getUserStats(state, action);
        case "RELOAD_DASHBOARD" : return reloadDashboard(state, action);
        case "LOGOUT_USER" : return initialState;
        default: return state;
    };
};

export default reducer;
