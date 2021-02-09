import { connect } from "react-redux";
import LandingPage from "./LandingPage";
import { logout } from "../../data/actions/api";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
        username: state.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => {
            dispatch(logout());
            history.push("/");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
