export const updateBalance = (data) => {
    return {
        type: "GET_BALANCE",
        balance: data.balance
    };
};