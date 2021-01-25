export const updateUserStats = (data) => {
    return {
        type: "GET_USER_STATS",
        username: data.username,
        balance: data.balance,
        transactions: data.transactions,
    };
};