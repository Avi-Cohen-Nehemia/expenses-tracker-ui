import { connect } from "react-redux";
import AddTransaction from "./AddTransaction";
import { addTransaction } from "../../data/actions/api";
import { logout } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        submittingForm: state.submittingForm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
        logoutUser: () => {
            dispatch(logout());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
