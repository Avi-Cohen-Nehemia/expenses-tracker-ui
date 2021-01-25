import React, { Component } from "react";
import PropTypes from 'prop-types';

class Header extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getUserStats();
        };
    };

    render() {
        const { balance } = this.props;

        return(
            <>
                <h1>{'Expenses Tracker'}</h1>
                <p>{'Your Balance'}</p>
                <h3>{ balance }</h3>
            </>
        );
    };
};

Header.propTypes = {
    balance: PropTypes.string,
}

export default Header;
