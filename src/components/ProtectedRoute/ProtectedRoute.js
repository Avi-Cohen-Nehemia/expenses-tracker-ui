import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, Component }) => isLoggedIn ? <Component /> : <Redirect to={{ pathname: "/login" }} />

export default ProtectedRoute;
