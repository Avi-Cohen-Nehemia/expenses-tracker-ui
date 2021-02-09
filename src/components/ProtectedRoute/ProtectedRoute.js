import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, Component }) => isLoggedIn ? <Component /> : <Redirect to={{ pathname: "/login" }} />

ProtectedRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    Component: PropTypes.oneOfType([
        PropTypes.func.isRequired,
        PropTypes.object.isRequired,
    ])
};

export default ProtectedRoute;
