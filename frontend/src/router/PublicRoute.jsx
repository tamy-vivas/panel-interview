import React from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const logged = true;
    return (!logged) ? children : <Navigate to="/p1" />;
}
