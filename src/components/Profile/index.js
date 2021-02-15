import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserStats } from "../../data/actions/api";
import { editUserDetails } from "../../data/actions/api";
import { logout } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        userName: state.username,
        userEmail: state.email,
        loaded: state.loaded,
        submittingForm: state.submittingForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserStats: () => dispatch(getUserStats()),
        editUserDetails: (property, value) => dispatch(editUserDetails(property, value)),
        logoutUser: () => {
            dispatch(logout());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
