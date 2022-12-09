import React from "react";
import { Navigate } from "react-router-dom";


const SecretPage = ({ isLoggedIn }) => {
    
    if (!isLoggedIn){
        return <Navigate to="/login"/>;
    }
    return ( 
        <div className="jumbotron text-center">
            <h3>You able to see this page because you are authorized!</h3>
        </div>
    )
};

export default SecretPage;