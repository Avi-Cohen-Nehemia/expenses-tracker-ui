export const loginUser = () => {
    return {
        type: "LOGIN_USER",
    }
}

export const updateUserStats = (data) => {
    return {
        type: "GET_USER_STATS",
        balance: data.balance,
        balanceWithCurrency: data.balance_with_currency,
        totalIncome: data.total_income,
        totalIncomeWithCurrency: data.total_income_with_currency,
        totalExpense: data.total_expense,
        totalExpenseWithCurrency: data.total_expense_with_currency,
        transactions: data.transactions,
        totalExpenseByCategory: data.total_expense_by_category
    };
};

export const updateUserDetails = (data) => {
    return {
        type: "UPDATE_USER_DETAILS",
        userID: data.id,
        username: data.name,
        accessToken:data.access_token
    };
};

export const reloadDashboard = () => {
    return {
        type: "RELOAD_DASHBOARD",
    };
};

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER",
    }
}
