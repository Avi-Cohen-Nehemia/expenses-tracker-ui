import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
