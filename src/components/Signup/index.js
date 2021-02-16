import { connect } from "react-redux";
import Signup from "./Signup";
import { createNewUser } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        submittingForm: state.submittingForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewUser: (data) => dispatch(createNewUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
