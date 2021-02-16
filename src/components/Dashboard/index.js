import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { getUserStats, logout } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        balanceWithCurrency: state.balanceWithCurrency,
        totalIncome: state.totalIncome,
        totalIncomeWithCurrency: state.totalIncomeWithCurrency,
        totalExpense: state.totalExpense,
        totalExpenseWithCurrency: state.totalExpenseWithCurrency,
        totalExpenseByCategory: state.totalExpenseByCategory,
        mostSpentOnCategory: state.mostSpentOnCategory,
        transactions: state.transactions,
        loaded: state.loaded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserStats: () => dispatch(getUserStats()),
        logoutUser: () => {
            dispatch(logout());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
