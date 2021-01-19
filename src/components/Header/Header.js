import React, { Component } from "react";

class Header extends Component {

    render() {
        const { balance } = this.props;

        return(
            <>
                <h1>{'Expenses Tracker'}</h1>
                <p>{'Your Balance'}</p>
                <h3>{ balance }</h3>
            </>
        )
    }
}

export default Header;