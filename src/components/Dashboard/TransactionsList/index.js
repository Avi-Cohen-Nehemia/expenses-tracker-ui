import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import { deleteTransaction } from "../../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTransaction: (data) => dispatch(deleteTransaction(data))
    };
};

export default connect(null, mapDispatchToProps)(TransactionList);
