import React from "react";
import { useNavigate } from "react-router-dom";


const SecretPage = ({ isLoggedIn }) => {
    
    let navigate = useNavigate();
    
    React.useEffect(() => {
        if (!isLoggedIn){
           return navigate("/login");
        }
    }
    ,[!isLoggedIn]);

    if (!isLoggedIn){
        return ;
    }
    return ( 
        <div className="jumbotron text-center">
            <h3>You able to see this page because you are authorized!</h3>
        </div>
    )
};

export default SecretPage;