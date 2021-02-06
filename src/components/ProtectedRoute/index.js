import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

// mapStateToProps is a function we use to fetch state from the
// global state file and pass it down to a component as a prop
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
