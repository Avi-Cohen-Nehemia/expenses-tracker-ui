import { connect } from "react-redux";
import TransactionList from "./TransactionList";
import { deleteTransaction } from "../../../data/actions/api";

// const mapStateToProps = (state) => {
//     return {
//         isLoggedIn: state.isLoggedIn,
//         accessToken: state.accessToken,
//         username: state.username,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTransaction: () => dispatch(deleteTransaction())
    };
};

export default connect(null, mapDispatchToProps)(TransactionList);
