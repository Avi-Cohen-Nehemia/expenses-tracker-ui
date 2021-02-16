import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
        submittingForm: state.submittingForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
