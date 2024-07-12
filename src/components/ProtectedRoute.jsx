import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const user = window.localStorage.getItem('user');
    const accessToken = window.localStorage.getItem('accessToken');
    const isUserAdmin = window.localStorage.getItem('userAdmin');
    return user && accessToken ? <Outlet /> : <Navigate to='/login' />

};

export default ProtectedRoute;
