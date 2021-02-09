import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {

    componentDidMount() {

        const { getUserStats, loaded } = this.props;

        if (!loaded) {
            getUserStats();
        }
    }

    render() {
        const { balance } = this.props;

        return(
            <>
                <h1>{"Expenses Tracker"}</h1>
                <p>{"Your Balance"}</p>
                <h3>{ balance }</h3>
            </>
        );
    }
}

Header.propTypes = {
    balance: PropTypes.string,
};

export default Header;
