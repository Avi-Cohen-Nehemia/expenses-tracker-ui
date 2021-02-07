import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
