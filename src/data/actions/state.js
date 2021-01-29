export const loginUser = () => {
    return {
        type: "LOGIN_USER",
    }
}

export const updateUserStats = (data) => {
    return {
        type: "GET_USER_STATS",
        balance: data.balance,
        transactions: data.transactions,
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

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER",
    }
}
