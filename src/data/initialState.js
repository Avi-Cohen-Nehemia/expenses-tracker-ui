export const initialState = {
	userID: null,
	username: "",
	accessToken: null,
	isLoggedIn: false,
	balance: 0,
	balanceWithCurrency: "",
	totalIncome: 0,
	totalIncomeWithCurrency: "",
	totalExpense: 0,
	totalExpenseWithCurrency: "",
	mostSpentOnCategory: "",
	totalExpenseByCategory: [],
	transactions: [],
	loaded: false,
	submittingForm: false
};

export default initialState;
