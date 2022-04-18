import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loding';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;