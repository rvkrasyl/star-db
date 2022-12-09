import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn){
        return <Navigate to="/" />;
     }

    return (
        <div className="jumbotron">
            <p>Login into StarDb</p>
            <button
            className="btn btn-primary"
            onClick={onLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;