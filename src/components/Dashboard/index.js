import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { getUserStats } from "../../data/actions/api";
import { logout } from "../../data/actions/api";
import history from "../../history";

// mapStateToProps is a function we use to fetch state from the
// global state file and pass it down to a component as a prop
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

// mapDispatchToProps is a function we use to trigger a change in state
// and those function can be passed to the component as a prop
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
