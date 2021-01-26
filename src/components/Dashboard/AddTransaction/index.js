import { connect } from "react-redux";
import AddTransaction from "./AddTransaction";
import { addTransaction } from "../../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
    };
};

export default connect(null, mapDispatchToProps)(AddTransaction);
