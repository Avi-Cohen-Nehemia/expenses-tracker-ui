import { connect } from "react-redux";
import LandingPage from "./LandingPage";
import history from "../../history";

// mapStateToProps is a function we use to fetch state from the
// global state file and pass it down to a component as a prop
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    };
};

// mapDispatchToProps is a function we use to trigger a change in state
// and those function can be passed to the component as a prop
const mapDispatchToProps = (dispatch) => {
    return {
        redirectUserToDashboard: () => {
            history.push("/dashboard");
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
