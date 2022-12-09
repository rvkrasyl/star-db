import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    let navigate = useNavigate();
    
    React.useEffect(() => {
        if (isLoggedIn){
           return navigate("/");
        }
    }
    ,[isLoggedIn]);

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