import { connect } from "react-redux";
import Header from "./Header";

// mapStateToProps is a function we use to fetch state from the
// global state file and pass it down to a component as a prop
const mapStateToProps = (state) => {
    return {
        balance: state.currentBalance,
    };
};

export default connect(mapStateToProps, null)(Header);
