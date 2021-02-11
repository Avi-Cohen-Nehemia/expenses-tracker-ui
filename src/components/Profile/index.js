import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserStats } from "../../data/actions/api";
import { logout } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        email: state.email,
        loaded: state.loaded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserStats: () => dispatch(getUserStats()),
        logoutUser: () => {
            dispatch(logout());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
