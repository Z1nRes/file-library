import React from 'react';
import {Navigate} from "react-router-dom";

const AuthRequired = ({children}: any) => {
    return localStorage.getItem('token') ? children : <Navigate to="/login" />;
};

export default AuthRequired;