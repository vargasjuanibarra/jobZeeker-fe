import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { parseToJson } from "../utils/parseJSON.utils";

const ProtectedRoute = () => {
    const user = parseToJson(window.localStorage.getItem('user'));
    const accessToken = window.localStorage.getItem('accessToken');
    return user ? <Outlet /> : <Navigate to='/login' />

};

export default ProtectedRoute;
