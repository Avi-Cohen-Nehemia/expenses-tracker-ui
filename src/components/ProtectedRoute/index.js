import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {

    // import global state values using redux hooks
    const { isLoggedIn } = useSelector((state) => state);

    return isLoggedIn ? <Component /> : <Redirect to={{ pathname: "/login" }} />
}

ProtectedRoute.propTypes = {
    Component: PropTypes.oneOfType([
        PropTypes.func.isRequired,
        PropTypes.object.isRequired,
    ])
};

export default ProtectedRoute;
