import React, { Component } from "react";

class Header extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.getBalance();
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

export default Header;
