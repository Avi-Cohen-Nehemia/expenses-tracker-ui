import { connect } from "react-redux";
import Signup from "./Signup";
import { createNewUser } from "../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        createNewUser: () => dispatch(createNewUser()),
    };
};

export default connect(null, mapDispatchToProps)(Signup);
