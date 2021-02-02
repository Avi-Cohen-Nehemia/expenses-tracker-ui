export const loginUser = () => {
    return {
        type: "LOGIN_USER",
    }
}

export const updateUserStats = (data) => {
    return {
        type: "GET_USER_STATS",
        balance: data.balance,
        totalIncome: data.total_income,
        totalExpense: data.total_expense,
        transactions: data.transactions
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
