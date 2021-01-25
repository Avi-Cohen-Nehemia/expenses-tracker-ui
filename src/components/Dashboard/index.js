import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { getUserStats } from "../../data/actions/api";

// mapStateToProps is a function we use to fetch state from the
// global state file and pass it down to a component as a prop
const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        transactions: state.transactions,
    };
};

// mapDispatchToProps is a function we use to trigger a change in state
// and those function can be passed to the component as a prop
const mapDispatchToProps = (dispatch) => {
    return {
        getUserStats: () => dispatch(getUserStats()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
