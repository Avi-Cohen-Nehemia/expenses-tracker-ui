import { connect } from "react-redux";
import Filters from "./Filters";
import { getFilteredTransactions } from "./../../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        getFilteredTransactions: (data) => dispatch(getFilteredTransactions(data)),
    };
};

export default connect(null, mapDispatchToProps)(Filters);
