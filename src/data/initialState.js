export const initialState = {
	userID: null,
	username: "",
	accessToken: null,
	isLoggedIn: false,
	balance: "",
	balanceWithCurrency: 0,
	totalIncome: 0,
	totalIncomeWithCurrency: "",
	totalExpense: 0,
	totalExpenseWithCurrency: "",
	mostSpentOnCategory: "",
	totalExpenseByCategory: [],
	transactions: [],
	loaded: false
};

export default initialState;
