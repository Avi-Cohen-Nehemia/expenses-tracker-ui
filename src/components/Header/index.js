import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        balance: state.currentBalance,
    };
};

export default connect(mapStateToProps, null)(Header);