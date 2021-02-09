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

const mostSpentOnCategory = (totalExpenseByCategory) => {

    if (totalExpenseByCategory.length) {

        const mostSpentOn = totalExpenseByCategory.reduce((prevCategory, currentCategory) => {
            return prevCategory.amount > currentCategory.amount ? prevCategory : currentCategory
        });
    
        return mostSpentOn.category;   
    }
};

const getUserStats = (state, action) => {
    return {
        ...state,
        balance: action.balance,
        balanceWithCurrency: action.balanceWithCurrency,
        totalIncome: action.totalIncome,
        totalIncomeWithCurrency: action.totalIncomeWithCurrency,
        totalExpense: action.totalExpense,
        totalExpenseWithCurrency: action.totalExpenseWithCurrency,
        transactions: action.transactions,
        mostSpentOnCategory: mostSpentOnCategory(action.totalExpenseByCategory),
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

const submittingForm = (state, action) => {
    return {
        ...state,
        submittingForm: !state.submittingForm,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER" : return loginUser(state, action);
        case "UPDATE_USER_DETAILS" : return updateUserDetails(state, action);
        case "GET_USER_STATS" : return getUserStats(state, action);
        case "RELOAD_DASHBOARD" : return reloadDashboard(state, action);
        case "SUBMITTING_FORM" : return submittingForm(state, action);
        case "LOGOUT_USER" : return initialState;
        default: return state;
    };
};

export default reducer;
